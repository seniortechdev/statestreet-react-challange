import axios from "axios";
const dataApi = 'http://localhost:3000/assets/data.json';

export const getFilterItems = async () => {
    const data = await (await axios.get(dataApi))?.data;

    const transactionTypeList = []
    const accountNameList = []

    data?.transactions?.forEach(item => {
        transactionTypeList.push(item.transactionType)
        accountNameList.push(item.accountName)
    })
    const transactionType = [...new Set(transactionTypeList)]
    const accountName = [...new Set(accountNameList)]

    return { transactionType, accountName }
}

export const getTransactions = async () => {
    const data = await (await axios.get(dataApi))?.data;
    return data?.transactions;
}

const getTransactionsByType = async (types, data) => {
    if (!types[0]) {
        throw new Error('type should provided on getTransactionsByType');
    }
    const result = data?.transactions.filter(item => types.indexOf(item.transactionType) !== -1)
    return result;
}

const getTransactionsByName = async (names, data) => {
    if (!names[0]) {
        throw new Error('name should provided on getTransactionsByType');
    }
    const result = data?.transactions?.filter(item => names.indexOf(item.accountName) !== -1)
    return result;
}

const getTransactionsByTypeAndName = async (types, names, data) => {
    if (!types[0] || !names[0]) {
        throw new Error('name and type should provided on getTransactionsByType');
    }
    const result = data?.transactions?.filter(item => names.indexOf(item.accountName) !== -1 && types.indexOf(item.transactionType) !== -1)
    return result;
}

export const getTransactionsByFilter = async (types, names) => {
    const data = await (await axios.get(dataApi))?.data;

    if (types[0] && names[0]) {
        const dataInner = getTransactionsByTypeAndName(types, names, data)
        return dataInner;
    } else if (types[0]) {
        const dataInner = getTransactionsByType(types, data)
        return dataInner;
    } else if (names[0]) {
        const dataInner = getTransactionsByName(names, data)
        return dataInner;
    }
    return data?.transactions;
}


export const getTransactionsById = async (id) => {
    const data = await (await axios.get(dataApi))?.data;
    const transaction = data?.transactions.find(item => item.account === id);
    return transaction;
}