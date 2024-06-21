import { NavbarBurgerMenu } from "../navbarBurguerMenu/NavbarBurguerMenu";
import { NavbarMenuItems } from "../navbarMenuItems/NavbarMenuItems";

const navItems = [
  { text: "Contacto", url: "/contacto" },
  { text: "Manifiesto", url: "/manifiesto" },
  { text: "Mision-Vision", url: "/mision-vision" },
];

export const Navbar = () => {
  return (
    <nav className="rounded border border-gray-200 bg-white px-2 py-2.5 shadow sm:px-4 dark:border-gray-700 dark:bg-gray-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Eritis Sicut Dei
          </span>
        </a>

        <NavbarBurgerMenu>
          {navItems.map((navItem) => (
            <NavbarMenuItems key={navItem.text} {...navItem} />
          ))}
        </NavbarBurgerMenu>
      </div>
    </nav>
  );
};
