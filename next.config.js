/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["sv"],
    defaultLocale: "sv",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
