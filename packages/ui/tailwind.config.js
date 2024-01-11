/** @type {import('tailwindcss').Config} */
import sharedConfig from "@repo/tailwind-config";
module.exports = {
  ...sharedConfig,
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",

  plugins: [require("tailwindcss-animate")],
};
