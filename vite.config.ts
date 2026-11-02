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
      // Fixed floors (today's coverage rounded down), not a no-drop rule:
      // falling below a floor fails `npm run test`, but a drop that stays
      // above it, such as less than a point today, still passes.
      thresholds: {
        statements: 23,
        branches: 29,
        functions: 27,
        lines: 22,
      },
    },
  },
});
