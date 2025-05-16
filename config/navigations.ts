import {
  ArrowLeftStartOnRectangleIcon,
  BookOpenIcon,
  ClockIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { ElementType } from "react";

export type Item = {
  name: string;
  slug: string;
  icon: ElementType;
};

export const navigations: { name: string; items: Item[] }[] = [
  {
    name: "Learning",
    items: [
      {
        name: "Learning",
        slug: "learning",
        icon: BookOpenIcon,
      },
      {
        name: "History",
        slug: "history",
        icon: ClockIcon,
      },
      {
        name: "Profile",
        slug: "profile",
        icon: UserCircleIcon,
      },
      {
        name: "Exit",
        slug: "exit",
        icon: ArrowLeftStartOnRectangleIcon,
      },
    ],
  },
];
