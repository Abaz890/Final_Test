# 🚀 React Dashboard Frontend

A modern and scalable **React + Vite** dashboard application setup with full developer tooling including **ESLint**, **Prettier**, **Husky**, **Vitest**, **Testing Library**, and **Cypress** for a seamless development experience. Built with **TypeScript**, this boilerplate is production-ready, clean, and linted with CI-ready hooks.

---

## 📸 Dashboard Overview

This project is designed to serve as a solid foundation for any **dashboard-based frontend**. It supports responsive layouts, theme customization, and can be easily extended with components, routes, and APIs.

---

## ⚙️ Tech Stack

| Tool/Library        | Purpose                                    |
|---------------------|--------------------------------------------|
| React + Vite        | Fast frontend development                  |
| TypeScript          | Static typing                              |
| ESLint              | Code linting                               |
| Prettier            | Code formatting                            |
| Husky + Lint-Staged | Git hooks & staged file formatting         |
| Vitest              | Unit testing framework                     |
| Testing Library     | React component testing                    |
| Cypress             | End-to-end testing                         |

---

## 📦 Project Setup

```bash
npm install
🧪 Available Scripts
Script	Description
npm run dev	Start the dev server using Vite
npm run build	Type-check and build the project
npm run preview	Preview the production build
npm run lint	Run ESLint with autofix
npm run format	Format all files using Prettier
npm run test	Run unit tests using Vitest
npm run test:watch	Watch mode for unit tests
npm run test:coverage	Generate test coverage reports using V8
npm run e2e	Launch Cypress UI for E2E testing
npm run e2e:run	Run Cypress E2E tests in headless mode

🧹 Linting & Formatting
This project is configured to use:

ESLint with support for React, Hooks, and TypeScript

Prettier for code formatting

Husky + Lint-Staged for pre-commit quality checks

ESLint
.eslintrc.js:

js
Copy code
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
Prettier
.prettierrc:

json
Copy code
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "all",
  "arrowParens": "always"
}
Ignore Configs
.eslintignore

.prettierignore

.gitignore includes dist, coverage, node_modules, cypress/screenshots, cypress/videos, cypress/downloads

🔒 Git Hooks (Husky)
Husky is configured to run linting, unit tests, coverage, and E2E tests before each commit.

bash
Copy code
npx husky-init && npm install
pre-commit file
sh
Copy code
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
npm test
npm run test:coverage
npm run e2e:run
lint-staged config in package.json
json
Copy code
"lint-staged": {
  "src/**/*.{ts,tsx,js,jsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
🧪 Unit Testing (Vitest + Testing Library)
Install:

bash
Copy code
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
vitest.config.ts
ts
Copy code
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      all: true,
    },
  },
});
src/setupTests.ts
ts
Copy code
import '@testing-library/jest-dom';
🧪 End-to-End Testing (Cypress)
Install:

bash
Copy code
npm install --save-dev cypress
npx cypress open
Project Structure:
Copy code
cypress/
  ├── e2e/
  ├── screenshots/
  ├── videos/
Cypress TypeScript Support
In tsconfig.node.json:

json
Copy code
{
  "compilerOptions": {
    "types": ["cypress"],
    ...
  },
  "include": ["vite.config.ts", "cypress/**/*.ts"]
}
✅ CI-Ready Hooks
With all tools combined, this setup ensures:

Code is clean and formatted before every commit

Linting issues are auto-fixed

Unit and E2E tests run automatically

Test coverage is checked

Pull requests stay green and stable

📁 Folder Structure
bash
Copy code
src/
  ├── components/
  ├── pages/
  ├── __tests__/         # Unit tests
  ├── setupTests.ts
  └── main.tsx
cypress/
  └── e2e/               # Cypress test files
🌐 Live Preview
Run:

bash
Copy code
npm run dev
Visit http://localhost:5173

📌 Notes
Cypress output (screenshots/videos) is ignored via .gitignore

TypeScript strict mode is enabled

All test coverage data is output to /coverage

📜 License
MIT License — feel free to use, fork, and modify this boilerplate.

yaml
Copy code

---

Let me know if you want me to add:

- Shields (badges) like `build`, `coverage`, `license`, `tests`
- Example Cypress or Vitest test files
- GitHub Actions workflow for CI

Just say the word.