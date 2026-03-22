"use client";

import MainWrapper from "../ui/MainWrapper";
import Logo from "../ui/Logo";
import NavbarRoutes from "./NavbarRoutes";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { UserDropdown } from "./UserDropdown";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { ModeToggle } from "@/components/theme/ModeToggle";

function Navbar() {
  const isScrolled = useScroll();
  const { data: session, isPending } = authClient.useSession();

  return (
    <header
      className={cn(
        "bg-card sticky top-0 z-40 h-16 border-b transition-all duration-200 md:h-20",
        isScrolled && "h-14 border-b md:h-16"
      )}
    >
      <MainWrapper className="flex h-full items-center justify-between">
        <div className="flex items-center gap-x-12">
          <Logo />
          <NavbarRoutes />
        </div>
        <div className="flex items-center gap-x-4">
          {/*<ModeToggle />*/}
          <Sidebar />
          <div className="hidden items-center gap-x-4 md:flex">
            {isPending ? null : session ? (
              <>
                <UserDropdown
                  name={
                    session?.user.name && session.user.name.length > 0
                      ? session.user.name
                      : (session?.user.email?.split("@")[0] ?? "")
                  }
                  email={session.user.email}
                  image={
                    session?.user.image ??
                    `https://avatar.vercel.sh/${session?.user.email}`
                  }
                />
              </>
            ) : (
              <>
                <Link
                  href="/auth/sign-in"
                  className={buttonVariants({ variant: "default" })}
                >
                  Login
                </Link>
                <Link
                  href="/auth/sign-up"
                  className={buttonVariants({ variant: "outline" })}
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <ModeToggle />
        </div>
      </MainWrapper>
    </header>
  );
}
export default Navbar;
