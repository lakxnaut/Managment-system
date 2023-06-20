import React,{useState,useEffect} from 'react';
import ScrollTop from '../ScrollTop';

export default function Pagination(props) {

    const [pageNumber, setPageNumber] = useState(1);
    const [totalLength, setTotalLength] = useState(1);
    const [totalEntires, setTotalEntries] = useState(props.totalEntires);
    const [totalPages, setTotalPages] = useState(props.totalPages);

    useEffect(() => {
        props.changePage(pageNumber);
    }, [pageNumber]);
    

    const handleNext = () => {
        if (pageNumber + 1 <= totalPages) {
            setPageNumber(pageNumber + 1);
        } else {
            return;
        }
    };

    const handlePrevious = () => {
        if (pageNumber - 1 > 0) {
            setPageNumber(pageNumber - 1);
            // console.log(pageNumber)
        } else {
            return;
        }
    };

    return (
        <div className='col-12 d-flex align-items-center'>
            <label className='p-2' htmlFor='name'>
                Show
            </label>
            <select
                className='form-control m-2 mb-3 col-2 d-flex align-items-center'
            >
                <option defaultValue={50}>50</option>
            </select>
            <nav aria-label='Page navigation example '>
                <ul className='pagination'>
                    <li className='page-item' onClick={handlePrevious}>
                        <a
                            className='page-link'
                            // href="#"
                            aria-label='Previous'
                        >
                            <span aria-hidden='true'>&laquo;</span>
                            <span className='sr-only'>Previous</span>
                        </a>
                    </li>
                    <li
                        className='page-item active'
                    >
                        <button className='page-link'>{pageNumber}</button>
                    </li>

                    <li
                        className='page-item'
                        onClick={() => {
                            handleNext();
                        }}
                    >
                        <a className='page-link' aria-label='Next'>
                            <span aria-hidden='true'>&raquo;</span>
                            <span className='sr-only'>Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className='col-6 d-flex align-items-center'>
                <h5 className='d-flex p-2 mb-3 transaction_pagi_div'>out of <span className='transaction_pagi_box'>{totalPages}</span> Pages</h5>

                <h5 className='d-flex p-2 mb-3 transaction_pagi_div'>
                    and <span className='transaction_pagi_box'>{totalEntires}</span> users
                </h5>
            </div>

            <ScrollTop name={'Top'} />
        </div>
    );
}
