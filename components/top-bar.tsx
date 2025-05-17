"use client";

import { Navbar as HeroUINavbar, NavbarItem } from "@heroui/navbar";
import { Input } from "@heroui/input";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";
import { BellAlertIcon as BellAlertSolid } from "@heroicons/react/24/solid";
import { BellAlertIcon as BellAlertOutline } from "@heroicons/react/24/outline";
import LanguageSwitcher from "./language-switch";
import { useState } from "react";
import { Badge } from "@heroui/badge";

export const TopBar = () => {
  const [hover, setHover] = useState(false);
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
        <div className="flex gap-4 items-center">
          <LanguageSwitcher />
          <ThemeSwitch />
          <Badge color="danger" content="9" shape="circle">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="w-6 h-6 cursor-pointer"
            >
              {hover ? (
                <BellAlertSolid className="w-6 h-6" />
              ) : (
                <BellAlertOutline className="w-6 h-6" />
              )}
            </div>
          </Badge>
        </div>
      </div>
    </HeroUINavbar>
  );
};
