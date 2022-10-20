import React, { useEffect, useState } from "react";
import FilterSection from "../components/FilterSection";
import TransactionSection from "../components/TransactionSection";
import {
  getFilterItems,
  getTransactions,
} from "../services/transactionsServices";
import ReactPaginate from "react-paginate";

const Transactions = () => {
  const [filterData, setFilterData] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getFilterItemsData();
  }, []);

  useEffect(() => {
    getTransactionsData();
  }, []);

  const getTransactionsData = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  const getFilterItemsData = async () => {
    const data = await getFilterItems();
    setFilterData(data);
  };

  return (
    <div className="w-full">
      <h1 className="py-4 text-xl">My Transactions</h1>
      <hr className="border-black/30" />

      <div className="flex flex-col lg:flex-row mt-4 ">
        <div className="max-w-[300px] min-w-[180px]">
          <h4 className="mb-2 -mt-1 text-lg">Filters</h4>
          <div className="">
            {filterData && (
              <FilterSection
                filterData={filterData}
                setTransactions={setTransactions}
              />
            )}
          </div>
        </div>
        
                <div className='w-full lg:ml-10 ml-2'>
                    <div className='flex items-center justify-between sticky top-0 w-full uppercase text-sm mb-2'>
                        <h6 className='w-24'>Account No.</h6>
                        <h6 className='w-48'>Account Name</h6>
                        <h6 className='w-20'>currency</h6>
                        <h6 className='w-20'>Amount</h6>
                        <h6 className='w-40'>Transaction Type</h6>
                    </div>
                    {transactions && <PaginatedItems items={transactions} itemsPerPage={16} />}
                </div>
            </div>
        </div>
  );
};

const PaginatedItems = ({ itemsPerPage, items }) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    const NextBtn = () => (
        <button className='rounded-full w-8 h-8 flex items-center justify-center'>
            <p>{'>'}</p>
        </button>
    )

    const PrevBtn = () => (
        <button className='rounded-full w-8 h-8 flex items-center justify-center'>
            <p>{'<'}</p>
        </button>
    )

    return (
        <>
            <div className='w-full max-h-[78vh] relative overflow-y-scroll'>
                {currentItems && currentItems.map((transaction) => <TransactionSection transaction={transaction} />)}
            </div>
            <div className='flex items-center w-full justify-center mt-16'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<NextBtn />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel={<PrevBtn />}
                    renderOnZeroPageCount={null}
                    className='flex items-center justify-between w-[300px]'
                    activeClassName='bg-gray-300'
                    pageClassName='rounded-full min-w-[30px] min-h-[30px] flex items-center justify-center bg-gray-100 mr-3'
                    breakLinkClassName='rounded-full min-w-[30px] min-h-[30px] flex items-center justify-center bg-gray-100 mr-3'
                />
            </div>
        </>
    );
}


export default Transactions
