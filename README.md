# Slopify - A Spotify clone app

## Getting Started

### Node version

For Node, we use the current LTS version of Node: `20.11.0 LTS`.

### Package manager version

[pnpm](https://pnpm.io/) is used to manage dependencies. We use the version `>= 8.15.1`.

### asdf

If you're using [asdf](https://asdf-vm.com/), you should be good to go, a `.tool-versions` file is present at the root of the repository.

## Available Scripts

### Build

Running `pnpm build` builds the application

### Dev

Running `pnpm dev` starts the application in development mode

### Format

Running `pnpm format --check` checks for incorrect file formating
Running `pnpm format --write` fixes incorrect file formating

### Lint

Running `pnpm lint` checks for javascript errors

### Types

Running `pnpm types` checks for type errors

### Start

Running `pnpm start` starts the application in production

### Storybook

Running `pnpm storybook` starts Storybook
Running `pnpm storybook:build` builds Storybook

Then, open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

### Test

Running `pnpm test` starts the test runner and checks all test files
Running `pnpm test --coverage` starts the test runner, checks all test files and print the test coverage.

## Development

First, run the development server:

### Run the app locally

```zsh
pnpm dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run Storybook

```zsh
pnpm storybook
```

Then, open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

## Deployment

To be defined.
