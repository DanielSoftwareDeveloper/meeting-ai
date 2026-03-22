"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import type { z } from "zod";

import { ForgotPasswordSchema } from "@/schemas";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useState } from "react";
import FormError from "./FormError";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Field, FieldError, FieldLabel } from "../ui/field";

function PasswordForgotForm() {
  const [error, setError] = useState<string | undefined>("");
  const [pending, setPending] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof ForgotPasswordSchema>) {
    setError("");
    setPending(true);

    void authClient.requestPasswordReset(
      {
        email: values.email,
        redirectTo: "/auth/reset-password",
      },
      {
        onSuccess: () => {
          setPending(false);
          toast.success(`Reset link sent!`);
          router.push("/auth/reset-link-sent");
        },
        onError: (error) => {
          setPending(false);
          setError(error.error.message);
        },
      }
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input {...field} placeholder="johndoe@example.com" />
            <FieldError className="text-left text-rose-400">
              {fieldState.error?.message}
            </FieldError>
          </Field>
        )}
      />

      <Button
        type="submit"
        size="lg"
        className="mt-2 w-full cursor-pointer"
        disabled={pending}
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          "Send reset link"
        )}
      </Button>
      <FormError message={error} />
    </form>
  );
}
export default PasswordForgotForm;
