import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";
import { requireUnauth } from "@/lib/auth-utils";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireUnauth();

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <Link
          href="/"
          className={buttonVariants({
            variant: "default",
            className: "absolute top-4 left-4",
          })}
        >
          Back to home
        </Link>
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="w-[90%] max-w-100 text-center">
            <Link
              href="/"
              className="flex flex-col items-center justify-center gap-x-2 font-medium mb-6 gap-y-2"
            >
              <Image
                src="/logo.png"
                alt={`${siteConfig.title} logo`}
                width={30}
                height={30}
              />
              {siteConfig.title}
            </Link>
            {children}
          </div>
          <span className="text-muted-foreground mt-4 w-[90%] max-w-[400px] text-center text-xs text-balance">
            By continuing to register and log in, you agree to our{" "}
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="hover:underline">
              Privacy Policy.
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
