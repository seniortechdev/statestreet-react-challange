import React from "react";
import { fireEvent, render } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import FilterSection from "./FilterSection";

jest.mock("axios");

const mockFilterData = {
  accountName: ["Savings Account", "Checking Account"],
  transactionType: ["deposit", "withdrawal"],
};

const mockData = [
  {
    account: "85225264",
    accountName: "Savings Account",
    mask: "0124",
    amount: 588.59,
    transactionType: "deposit",
    currencyCode: "PAB USD",
    currencyName: "Liberian Dollar",
    currencySymbol: "лв",
    iban: "NO2607790970023",
    bic: "YWGIGPX1",
  },
  {
    account: "67442173",
    accountName: "Checking Account",
    mask: "9572",
    amount: 890.66,
    transactionType: "withdrawal",
    currencyCode: "DKK",
    currencyName: "Codes specifically reserved for testing purposes",
    currencySymbol: "₫",
    iban: "PS828FY1714093005050080097054",
    bic: "JFEOIEQ1",
  },
];

describe("FilterSection", () => {
  beforeEach(() => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: { transactions: mockData } })
    );
  });

  it("should render", () => {
    const component = render(
      <BrowserRouter>
        <FilterSection
          filterData={mockFilterData}
          setTransactions={jest.fn()}
        />
      </BrowserRouter>
    );
    expect(component).toBeDefined();
  });

  it("should filter on click input section 1", () => {
    const component = render(
      <BrowserRouter>
        <FilterSection
          filterData={mockFilterData}
          setTransactions={jest.fn()}
        />
      </BrowserRouter>
    );
    const checkbox = component.getAllByRole("checkbox");
    fireEvent.click(checkbox[0]);
    fireEvent.click(checkbox[0]);
  });

  it("should filter on click input section 2", () => {
    const component = render(
      <BrowserRouter>
        <FilterSection
          filterData={mockFilterData}
          setTransactions={jest.fn()}
        />
      </BrowserRouter>
    );
    const checkbox = component.getAllByRole("checkbox");
    fireEvent.click(checkbox[2]);
    fireEvent.click(checkbox[2]);
  });
});
