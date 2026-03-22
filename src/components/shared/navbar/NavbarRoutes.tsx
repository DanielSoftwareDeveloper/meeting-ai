import { navbarRoutes } from "./navbar-routes";
import NavbarRoute from "./NavbarRoute";

function NavbarRoutes() {
  return (
    <nav>
      <ul className="hidden md:flex gap-x-8">
        {navbarRoutes.map((route) => (
          <li key={route.id} className="">
            <NavbarRoute label={route.label} path={route.path} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavbarRoutes;
