import Link from "next/link";

interface NavbarRouteProps {
  label: string;
  path: string;
}

function NavbarRoute({ label, path }: NavbarRouteProps) {
  return <Link href={path}>{label}</Link>;
}
export default NavbarRoute;
