import React from "react";
import BlockFlix from "./blockflix";
import { CartMoviesProvider } from "./context/cartmoviescontext"
import { render, fireEvent, getByText } from "@testing-library/react";
import '@testing-library/jest-dom'

jest.mock("./context/cartmoviescontext");
jest.mock("react-router-dom", () => {
    return {
        useLocation: () => ({
            pathname: "/"
        })
    };
});

test("TESTE", () => {
    const { container, getByText } =  render(()=>{<CartMoviesProvider><BlockFlix /></CartMoviesProvider>});


})
