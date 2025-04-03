// vite.config.ts

import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        globals: true,  // Enables global test APIs like describe, it, expect
        environment: "jsdom",  // Set the environment to jsdom for DOM manipulation tests
        setupFiles: "./vitest.setup.ts",  // Path to your setup file
        alias: {
            "@": "/src",  // Fixes @ alias issue for imports
        },
    },
});
