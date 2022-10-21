import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Transaction from "./Transaction";
import axios from "axios";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "85225264",
  }),
}));

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
  beforeEach(() => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: { transactions: mockData } })
    );
  });
  it("should render", () => {
    const component = render(
      <BrowserRouter>
        <Transaction />
      </BrowserRouter>
    );
    expect(component).toBeDefined();
  });
});
