import { Kantumruy_Pro, Roboto } from "next/font/google";

export const fontKhmer = Kantumruy_Pro({
  subsets: ["khmer"],
  weight: ["400", "700"],
  variable: "--font-khmer",
  display: "swap",
});

export const fontEnglish = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-english",
  display: "swap",
});
