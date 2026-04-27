# edu.typescript.interview

LeetCode-style problem solving practice in TypeScript.

## Setup

Install dependencies:

```sh
npm install
```

## Commands

Run the test suite once:

```sh
npm test
```

Run tests in watch mode:

```sh
npm run test:watch
```

Type-check the project:

```sh
npm run typecheck
```

## Structure

Problem solutions are grouped by source website and problem name:

```text
src/<site-name>/<problem-name>/<problem-name>.ts
tests/<site-name>/<problem-name>/<problem-name>.test.ts
```

For example:

```text
src/leetcode/two-sum/two-sum.ts
tests/leetcode/two-sum/two-sum.test.ts
```

## Adding a Problem

1. Create a folder for the source website under `src`.
2. Create a folder for the problem using a kebab-case problem name.
3. Add the solution file in that problem folder.
4. Export the function you want to test.
5. Add a matching test file under the same site/problem path in `tests`.
6. Run `npm test` and `npm run typecheck`.
