"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { Item, navigations } from "../lib/navigations";
import Link from "next/link";
import clsx from "clsx";

export function GlobalNav() {
  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800  lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="h-16 flex items-center justify-center w-full">
            <img src="/logo-web.png" alt="logo" width={200} />
          </div>

          {/* <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            Self Learning
          </h3> */}
        </Link>
      </div>
      <div>
        <nav>
          {navigations.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  {/* <div>{section.name}</div> */}
                </div>
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

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-black": isActive,
        }
      )}
    >
      {item.name}
    </Link>
  );
}
