export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const navigations: { name: string; items: Item[] }[] = [
  {
    name: "Learning",
    items: [
      {
        name: "Learning",
        slug: "learning",
        description: "Enjoy learning here!",
      },
      {
        name: "History",
        slug: "history",
        description: "View your history here!",
      },
      {
        name: "Profile",
        slug: "profile",
        description: "Here is your profile!",
      },
    ],
  },
];
