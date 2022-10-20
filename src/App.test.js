import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.css'

describe('<App>', () => {
  it('should render', () => {
    const component = render(
      <BrowserRouter >
        <App />
      </BrowserRouter>
    )
    expect(component).toBeDefined();
  })
})