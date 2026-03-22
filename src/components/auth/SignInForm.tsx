"use client";

import { useState } from "react";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { siteConfig } from "@/config/site-config";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { SignInSchema } from "@/schemas";

import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";

import FormSuccess from "./FormSuccess";
import FormError from "./FormError";

function SignInForm() {
  const [error, setError] = useState<string | undefined>("");
  const [pending, setPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  // Get the URL search params, for example:
  // /auth/sign-in?reset=success
  const searchParams = useSearchParams();
  // Read the value of the "reset" query param
  // If the URL is /auth-sign-in?reset=success -> reset = "success"
  // If it doesn't exist -> reset = null
  const reset = searchParams.get("reset");

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    setPending(true);
    setError("");

    try {
      await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
        },
        {
          onSuccess: () => {
            toast.success("Login successful!");
            router.push(siteConfig.panelPath);
          },
          onError: (err) => {
            setError(err.error.message);
          },
        },
      );
    } catch {
      setError("Unexpected error. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-y-4">
        {/* Email */}
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
        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Password</FieldLabel>
              <div className="relative">
                <Input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              <FieldError className="text-left text-rose-400">
                {fieldState.error?.message}
              </FieldError>
            </Field>
          )}
        />
      </FieldGroup>

      {reset === "success" && (
        <FormSuccess message="Password updated successfully" />
      )}
      {error && <FormError message={error} />}

      <div className="text-end">
        <Link
          href="/auth/forgot-password"
          className={cn(
            buttonVariants({ variant: "link", size: "xs" }),
            "text-foreground p-0 mt-1 mb-4",
          )}
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full cursor-pointer"
        disabled={pending}
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
}
export default SignInForm;
