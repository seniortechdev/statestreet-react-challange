import Transaction from "./pages/Transaction";
import Transactions from "./pages/Transactions";

const routes = [
    {
        path: "/",
        exact: true,
        name: "Home",
        component: Transactions,
    },
    {
        path: "/transactions",
        exact: true,
        name: "Home",
        component: Transactions,
    },
    {
        path: "/transactions/:id",
        exact: true,
        name: "Home",
        component: Transaction,
    },
    { path: "*", name: "Transactions", component: Transactions },
];

export default routes;
