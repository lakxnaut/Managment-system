import { Link } from 'react-router-dom';
import '../ViewAllUsers.css';
import {
    HiOutlineDocumentReport,
    AiOutlineBook,
    AiOutlineWallet
    

} from 'react-icons/bs';


import { MdOutlineCases } from 'react-icons/md';
import { AirOutlined, AirplayOutlined, HiveOutlined } from '@mui/icons-material';

function SidebarRoleTwoView() {
    console.log('from role 2');
    return (
        <div>
            <div className='iq-sidebar  rtl-iq-sidebar sidebar-default '>
                <div className='iq-sidebar-logo d-flex align-items-center justify-content-between'>
                    <Link to='/' className='police_div'>

                        <img
                            src='assets/images/pfizer.jpeg'
                            className='img-fluid rounded-normal light-logo'
                            alt='logo'
                        />

                        <h2 className='UP_Police'>Management System</h2>
                    </Link>
                    <div className='iq-menu-bt-sidebar'>
                        <i className='las la-bars wrapper-menu'></i>
                    </div>
                </div>
                <div className='data-scrollbar' data-scroll='1'>
                    <nav className='iq-sidebar-menu'>
                        <ul id='iq-sidebar-toggle' className='iq-menu'>

                           

                            <li className=' '>
                                <Link
                                    to={'/'}
                                    className='collapsed'
                                    data-toggle='collapse'
                                >
                                    <MdOutlineCases className='dashboard_icons' />
                                    <span>Report</span>

                                </Link>

                            </li>
 


                            <li className=' '>
                                <a
                                    href='#reportManager'
                                    className='collapsed'
                                    data-toggle='collapse'
                                    aria-expanded='false'
                                >
                                    <HiveOutlined className='dashboard_icons' />
                                    <span>Departments</span>
                                    <i className='las la-angle-right iq-arrow-right arrow-active'></i>
                                    <i className='las la-angle-down iq-arrow-right arrow-hover'></i>
                                </a>
                                <ul
                                    id='reportManager'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/add_department'}>
                                            <AirOutlined className='dashboard_icons' />
                                            <span>Accounts Department</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/add_department'}>
                                            <AirplayOutlined className='dashboard_icons' />
                                            <span>IT Department</span>
                                        </Link>
                                    </li>

                                    <li className=' '>
                                        <Link to={'/add_department'}>
                                            <AirplayOutlined className='dashboard_icons' />
                                            <span>Finance Department</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

 


                        </ul>
                    </nav>

                    <div className='p-3'></div>
                </div>
            </div>

            <div
                className='modal fade'
                id='pandl'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='exampleModalScrollableTitle'
                aria-hidden='true'
            >
                <div className='modal-dialog modal-dialog-scrollable' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalScrollableTitle'>
                                Profit &amp; Loss Report Password
                            </h5>
                            <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'
                            >
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <form>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputText1'>
                                        Enter Your P and L Paaword{' '}
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='exampleInputText1'
                                        defaultValue='hellohello'
                                        placeholder=''
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                data-dismiss='modal'
                            >
                                Close
                            </button>
                            <button type='button' className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SidebarRoleTwoView;
