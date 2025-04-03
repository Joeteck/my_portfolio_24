// vitest.setup.ts

import "@testing-library/jest-dom";  // Importing jest-dom for extended DOM matchers
import { vi } from "vitest";  // Import the 'vi' object for mocking

// Mocking matchMedia to avoid GSAP error in tests
globalThis.matchMedia = globalThis.matchMedia || function () {
    return {
        matches: false,
        addListener: vi.fn(),  // Use vi.fn() from Vitest
        removeListener: vi.fn(),  // Use vi.fn() from Vitest
    };
};

// Mock ResizeObserver to prevent errors in tests related to unsupported ResizeObserver
global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
};
