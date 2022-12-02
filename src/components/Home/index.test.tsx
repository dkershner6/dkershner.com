import React from "react";

import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";

import { UIContextProvider } from "../../context/UIContext";
import ThemeProviders from "../ThemeProviders";

import Home from ".";

describe("Home", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    const TestWrapper: React.FC = ({ children }) => {
        return (
            <UIContextProvider>
                <ThemeProviders>{children}</ThemeProviders>
            </UIContextProvider>
        );
    };

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <TestWrapper>
                <Home />
            </TestWrapper>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);

        expect(true).toBeTruthy();
    });

    it("has correct heading and subheading", async () => {
        const { queryByText } = render(
            <TestWrapper>
                <Home />
            </TestWrapper>
        );

        expect(queryByText("Derek Kershner")).toBeInTheDocument();
        expect(screen.queryByText("Evil Genius")).toBeNull();

        expect(queryByText("Software Architect")).toBeInTheDocument();
    });
});
