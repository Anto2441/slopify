import path from "path";

/**
 * This function allows the `next lint` executable to find and lint files in the repository
 */
function lint() {
  return `pnpm lint:javascript --file ${filenames
    .map((filename) => path.relative(process.cwd(), filename))
    .join(" --file ")}`;
}

/**
 * This function allows the `next test` executable to find and lint files in the repository
 */
function test(filenames) {
  return `pnpm test -- --run related ${filenames
    .map((filename) => path.relative(process.cwd(), filename))
    .join(" ")}`;
}

/**
 * Lint staged configuration.
 *
 * 🦉 Each tack runs concurrently
 *
 * @see https://github.com/okonet/lint-staged#configuration
 */
export default {
  "**/*": "pnpm lint:secrets",
  "**/*.{json,js,jsx,md,ts,tsx}": "pnpm format --check",
  "**/*.{ts,tsx}": "pnpm lint:types",
  "**/*.{ts,tsx}": lint,
  "**/*.{ts,tsx}": test,
};
