import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { getTransactionsByFilter } from '../services/transactionsServices'

const FilterSection = ({ filterData, setTransactions }) => {
    const [selectedTransactionTypeFilters, setSelectedTransactionTypeFilters] = useState([])
    const [selectedaccountNameFilters, setSelectedaccountNameFilters] = useState([])

    const onChangeCheckbox = async (key, item, isSelected) => {
        const toastId = toast.loading('appling filter ..')
        if (key === 'transactionType') {
            if (isSelected) {
                const data = [...selectedTransactionTypeFilters, item]
                setSelectedTransactionTypeFilters(data)
                await changeTransaction(data, selectedaccountNameFilters)
            } else {
                const data = selectedTransactionTypeFilters?.filter(oldTtem => oldTtem !== item)
                setSelectedTransactionTypeFilters(data)
                await changeTransaction(data, selectedaccountNameFilters)
            }
        }
        if (key === 'accountName') {
            if (isSelected) {
                const data = [...selectedaccountNameFilters, item]
                setSelectedaccountNameFilters(data)
                await changeTransaction(selectedTransactionTypeFilters, data)

            } else {
                const data = selectedaccountNameFilters?.filter(oldTtem => oldTtem !== item)
                setSelectedaccountNameFilters(data)
                await changeTransaction(selectedTransactionTypeFilters, data)
            }
        }
        toast.success('filter applied', { id: toastId })
    }

    const changeTransaction = async (types, names) => {
        const result = await getTransactionsByFilter(types, names)
        if (result) {
            setTransactions(result)
        }
    }

    return (
        <>
            {Object?.keys(filterData)?.map((key) => {
                return (
                    <div key={key} className='bg-gray-100 py-2 px-4 mb-3 rounded-sm'>
                        <h5 className='capitalize'>{key}</h5>
                        {filterData[key]?.map(item => (
                            <div key={item} className='flex items-start space-x-1 space-y-1 text-sm'>
                                <input id={item} name={item} className='mt-2' type="checkbox" onChange={(e) => onChangeCheckbox(key, item, e.target.checked)} />
                                <label htmlFor={item} className='capitalize cursor-pointer'>{item}</label>
                            </div>
                        ))}
                    </div>
                )
            })}
        </>
    )
}



export default FilterSection
