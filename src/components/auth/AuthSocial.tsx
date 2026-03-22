"use client";

import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Button } from "../ui/button";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { siteConfig } from "@/config/site-config";

function AuthSocial() {
  const [pending, setPending] = useState(false);

  const onSocial = (provider: "google" | "github") => {
    setPending(true);

    void authClient.signIn.social(
      {
        provider: provider,
        callbackURL: siteConfig.panelPath,
      },
      {
        onSuccess: () => {
          setPending(false);
        },
        onError: () => {
          setPending(false);
        },
      }
    );
  };

  return (
    <div className="flex space-x-3">
      <Button
        type="button"
        variant="outline"
        size="lg"
        className="flex-1 cursor-pointer"
        disabled={pending}
        aria-label="Login with Google"
        onClick={() => onSocial("google")}
      >
        <FcGoogle className="size-5" />
        <span className="">Google</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        size="lg"
        className="flex-1 cursor-pointer"
        disabled={pending}
        aria-label="Login with Github"
        onClick={() => onSocial("github")}
      >
        <IoLogoGithub className="size-5" />
        <span className="">Github</span>
      </Button>
    </div>
  );
}
export default AuthSocial;
