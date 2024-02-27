import path from "path";

const lint = (filenames) =>
  `pnpm lint --file ${filenames
    .map((filename) => path.relative(process.cwd(), filename))
    .join(" --file ")}`;

const test = (filenames) =>
  `pnpm test -- --run related ${filenames
    .map((filename) => path.relative(process.cwd(), filename))
    .join(" ")}`;

export default {
  "**/*.{json,js,jsx,md,ts,tsx}": "pnpm format --write",
  "**/*.{ts,tsx}": lint,
  "**/*.{ts,tsx}": test,
};
