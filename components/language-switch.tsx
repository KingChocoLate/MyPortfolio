"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const languages = [
  { code: "kh", name: "KH", flag: "/flags/kh.svg" },
  { code: "en", name: "EN", flag: "/flags/en.svg" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    const segments = pathname.split("/");

    // Remove empty string at index 0 due to leading '/'
    // Example: ['', 'en', 'about'] -> 'en' is at index 1
    const pathWithoutLocale = segments.slice(2).join("/");

    const newPath = `/${newLocale}/${pathWithoutLocale}`;
    router.replace(newPath);
    setOpen(false);
  };

  const currentLang =
    languages.find((lang) => lang.code === locale) ?? languages[0];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-lg shadow"
      >
        <Image
          src={currentLang.flag}
          alt={currentLang.code}
          width={24}
          height={24}
        />
        <span className="ml-2 font-medium">{currentLang.name}</span>
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-2 w-full rounded-lg shadow bg-white z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
            >
              <Image src={lang.flag} alt={lang.code} width={24} height={24} />
              <span className="ml-2">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
