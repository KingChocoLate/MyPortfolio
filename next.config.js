// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n: {
//     locales: ["en", "km"],
//     defaultLocale: "en",
//     localeDetection: true,
//   },
// };

// module.exports = nextConfig;

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);
