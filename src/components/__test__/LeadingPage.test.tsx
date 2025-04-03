import React from "react";  // Add this import

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import LeadingPage from "@/app/page";

describe("LeadingPage Component", () => {
    it("renders without crashing", () => {
        render(<LeadingPage />);
        expect(screen.getByText(/Stay Tuned for the Big Reveal!/i)).toBeInTheDocument();
    });

    it("contains the toggle theme button and toggles mode", () => {
        render(<LeadingPage />);
        const toggleButton = screen.getByTitle("Toggle Light/Dark Mode");

        // Ensure the initial mode is dark (🌞 means dark mode is active)
        expect(toggleButton).toHaveTextContent("🌞");

        // Click the button to switch mode
        fireEvent.click(toggleButton);

        // Mode should change to light (🌙 means light mode is active)
        expect(toggleButton).toHaveTextContent("🌙");
    });

    it("renders the 3D canvas", () => {
        render(<LeadingPage />);
        const canvasElement = screen.getByRole("presentation");
        expect(canvasElement).toBeInTheDocument();
    });

        it("moves the custom cursor on mouse move", () => {
            render(<LeadingPage />);
            const cursor = document.querySelector(".cursor") as HTMLElement; // Cast to HTMLElement
        
            expect(cursor).toBeInTheDocument();
        
            act(() => {
            fireEvent.mouseMove(document, { clientX: 100, clientY: 200 });
            });
        
            // Check if the cursor's position was updated
            expect(cursor.style.left).toBe("100px");
            expect(cursor.style.top).toBe("200px");
        });

    it("has a button linking to the testing page", () => {
        render(<LeadingPage />);
        const linkButton = screen.getByRole("link", { name: /Visit testing page/i });
        expect(linkButton).toHaveAttribute("href", "/joeteck");
    });
});
