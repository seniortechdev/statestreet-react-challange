import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TransactionSection from "./TransactionSection";

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

describe("TransactionSection", () => {
  it("should render", () => {
    const component = render(
      <BrowserRouter>
        <TransactionSection transaction={mockData[0]} />
      </BrowserRouter>
    );
    expect(component).toBeDefined();
  });

  it("should navigate on click", () => {
    const component = render(
      <BrowserRouter>
        <TransactionSection transaction={mockData[0]} />
      </BrowserRouter>
    );
    const btn = component.getByText("85225264");
    fireEvent.click(btn);
    expect(btn).toBeDefined();
  });
});
