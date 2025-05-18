import {
  ArrowLeftStartOnRectangleIcon,
  BookOpenIcon,
  ClockIcon,
  InformationCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ElementType } from "react";

export type Item = {
  name: string;
  slug: string;
  icon: ElementType;
};

export const getNavigations = (
  t: (key: string) => string
): { name: string; items: Item[] }[] => [
  {
    name: "Learning",
    items: [
      {
        name: t("sidebar.learning"),
        slug: "learning",
        icon: BookOpenIcon,
      },
      {
        name: t("sidebar.history"),
        slug: "history",
        icon: ClockIcon,
      },
      {
        name: t("sidebar.information"),
        slug: "information",
        icon: InformationCircleIcon,
      },
      {
        name: t("sidebar.profile"),
        slug: "profile",
        icon: UserCircleIcon,
      },

      {
        name: t("sidebar.exit"),
        slug: "exit",
        icon: ArrowLeftStartOnRectangleIcon,
      },
    ],
  },
];
