import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';

const TransactionSection = ({ transaction }) => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-between w-full uppercase text-sm mb-2'>
            <p className='w-24 underline cursor-pointer' onClick={() => navigate(`/transactions/${transaction.account}`)}>{transaction.account}</p>
            <p className='w-48'>{transaction.accountName}</p>
            <p className='w-20'>{transaction.currencyCode}</p>
            <p className='w-20'>{transaction.amount}</p>
            <p className='w-40'>{transaction.transactionType}</p>
        </div>
    )
}

export default memo(TransactionSection)