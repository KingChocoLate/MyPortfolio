"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { getNavigations, Item } from "../config/navigations";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useLocale, useTranslations } from "next-intl";

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const t = useTranslations();
  const locale = useLocale();
  const navigations = getNavigations(t);

  return (
    <div className="fixed top-0 z-50 flex w-full flex-col lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 bg-white">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="h-16 flex items-center justify-center w-full">
            <img src="/logo-web.png" alt="logo" width={100} />
          </div>
        </Link>
      </div>

      <button
        type="button"
        className="group absolute top-0 right-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-400" />
        ) : (
          <Bars3Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 top-14 bottom-0 mt-px bg-white": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav>
          {navigations.map((section) => {
            return (
              <div key={section.name}>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  const Icon = item.icon;

  return (
    <Link
      href={`/${item.slug}`}
      className={clsx(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300",
        {
          "text-gray-500 hover:bg-gray-200 hover:text-black": !isActive,
          "text-black": isActive,
        }
      )}
    >
      <Icon className="w-6 h-6" />
      {item.name}
    </Link>
  );
}
