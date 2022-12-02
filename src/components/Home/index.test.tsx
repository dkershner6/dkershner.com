import React, { ReactElement, ReactNode } from "react";

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

    const TestWrapper = ({
        children,
    }: {
        children: ReactNode;
    }): ReactElement => {
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
});
