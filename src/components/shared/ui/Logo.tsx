import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}

function Logo({ className }: Props) {
  return (
    <Link
      href="/#banner"
      className={cn(
        "text-primary block text-xl font-bold uppercase lg:text-2xl",
        className
      )}
    >
      MochiDevs
    </Link>
  );
}
export default Logo;
