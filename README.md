# Prodesk Internship Missions

Professional repository documentation for all internship missions completed at Prodesk IT.

## Intern Profile

- Name: Charan Nayak
- Role: Frontend Developer Intern
- Organization: Prodesk IT

## Project Summary

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and extended with an enterprise-style testing setup (Jest + React Testing Library).

## Overview

- Framework: Next.js (App Router)
- Language: JavaScript
- Testing: Jest + React Testing Library + userEvent
- Coverage gates: 70% global thresholds

## Live Demo

https://the-proffesional-standards.vercel.app/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
.
├── __tests__/
├── src/
│   ├── app/
│   └── components/
├── jest.config.js
├── jest.setup.js
├── package.json
└── README.md
```

### Key Paths

- UI: `src/components`
- App entry: `src/app/page.js`
- Tests: `__tests__`
- Jest config: `jest.config.js`
- Jest setup: `jest.setup.js`

## Testing

This project includes unit, interaction, and network-mocking tests with coverage thresholds.

### Scripts

```bash
npm test
npm run test:watch
npm run coverage
```

### Test Stack

- Jest + jsdom for test environment
- React Testing Library + `@testing-library/user-event`
- Mocked network layer via `fetch`
- Coverage thresholds enforced at 70% globally

### Coverage

```bash
npm run coverage
```

The HTML report is generated in `coverage/`.

## Components Used For Tests

Located in `src/components`:

- `Button`
- `Card`
- `Input`
- `Counter`
- `UserList`

Tests live in `__tests__/`.

## QA Workflow

- Run `npm test` for unit and interaction suites.
- Run `npm run coverage` to enforce coverage gates.
- Keep component logic isolated so tests stay deterministic.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
