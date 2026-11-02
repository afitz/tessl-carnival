import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Relative asset paths, so the build works on any fork's GitHub Pages URL.
  base: './',
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts'],
      reporter: ['text-summary'],
      // Today's coverage rounded down, so any drop fails `npm run test`.
      thresholds: {
        statements: 23,
        branches: 29,
        functions: 27,
        lines: 22,
      },
    },
  },
});
