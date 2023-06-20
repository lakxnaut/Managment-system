import React from 'react';
import '../src/screens/ViewAllUsers.css';
import { BsFillCaretUpFill } from 'react-icons/bs';

const handleTopScroll = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const ScrollTop = (props) => {
    const { name } = props;

    return (
        <div className='scroll_btn'>
            <button onClick={handleTopScroll} className='scrollTop'>
                <BsFillCaretUpFill /> {name}
            </button>
        </div>
    );
};

export default ScrollTop;
