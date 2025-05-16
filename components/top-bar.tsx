import { Navbar as HeroUINavbar, NavbarItem } from "@heroui/navbar";
import { Input } from "@heroui/input";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";

export const TopBar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="z-0">
      <div className="flex gap-2 justify-between items-center w-full">
        <NavbarItem className="flex">{searchInput}</NavbarItem>
        <ThemeSwitch />
      </div>
    </HeroUINavbar>
  );
};
