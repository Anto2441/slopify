import path from "path";

/**
 * This function allows the `next lint` excutable to find and lint files in the repository
 */
function lint() {
  return `pnpm lint --file ${filenames
    .map((filename) => path.relative(process.cwd(), filename))
    .join(" --file ")}`;
}

/**
 * This function allows the `next test` excutable to find and lint files in the repository
 */
function test(filenames) {
  return `pnpm test -- --run related ${filenames
    .map((filename) => path.relative(process.cwd(), filename))
    .join(" ")}`;
}

export default {
  "**/*.{json,js,jsx,md,ts,tsx}": "pnpm format --check",
  "**/*.(ts,tsx)": "pnpm types",
  "**/*.{ts,tsx}": lint,
  "**/*.{ts,tsx}": test,
};
