"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navbarRoutes } from "./navbar-routes";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center order-2"
      >
        <Menu size={35} className="cursor-pointer hover:opacity-80 md:hidden" />
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`fixed top-0 left-0 z-30 h-screen w-full bg-zinc-800/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      ></div>

      <nav
        className={`fixed top-0 right-0 z-40 h-screen w-4/6 transform border-l border-zinc-400 bg-slate-100 px-6 py-4 shadow transition-transform duration-300 dark:border-zinc-700 dark:bg-zinc-800 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setOpen(false)} className="mb-16">
            <X size={30} className="cursor-pointer" />
          </button>
        </div>
        <ul className="flex flex-col space-y-6">
          {navbarRoutes.map((route) => (
            <li key={route.path}>
              <a
                href={route.path}
                className={cn(
                  "block p-2 text-base text-neutral-600 transition-all duration-100 ease-in-out hover:bg-neutral-700 dark:text-neutral-50",
                  {
                    "text-orange-500 dark:text-orange-300":
                      pathname === route.path,
                  },
                )}
              >
                {route.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
export default Sidebar;
