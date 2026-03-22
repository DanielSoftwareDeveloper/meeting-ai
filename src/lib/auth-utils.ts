import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";
import { siteConfig } from "@/config/site-config";

export const requireAuth = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  return session;
};

export const requireUnauth = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect(siteConfig.panelPath);
  }
};
