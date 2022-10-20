import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTransactionsById } from '../services/transactionsServices'

const Transaction = () => {
    const { id } = useParams()
    const [transaction, setTransaction] = useState()

    useEffect(() => {
        if (id) {
            getTransactionsByIdData()
        }
    }, [id])

    const getTransactionsByIdData = async () => {
        const data = await getTransactionsById(id)
        setTransaction(data)
    }

    return (
        <div>
            <h1 className='py-4 text-xl'>Transaction {id}</h1>
            <hr className='border-black/30' />
            <div className='mt-6 space-y-2'>
                <div className='transaction_item'>
                    <h6>Account No. :</h6>
                    <p>{id}</p>
                </div>
                <div className='transaction_item'>
                    <h6>Account Name :</h6>
                    <p>{transaction?.accountName}</p>
                </div>
                <div className='transaction_item'>
                    <h6>Currency Code :</h6>
                    <p>{transaction?.currencyCode}</p>
                </div>
                <div className='transaction_item'>
                    <h6>Amount :</h6>
                    <p>{transaction?.amount}</p>
                </div>
                <div className='transaction_item'>
                    <h6>Transaction Type :</h6>
                    <p>{transaction?.transactionType}</p>
                </div>
            </div>
        </div>
    )
}

export default Transaction