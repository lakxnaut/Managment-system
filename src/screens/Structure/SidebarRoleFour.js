import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../ViewAllUsers.css';
import {
    BsFillBarChartLineFill,
    BsFillCalendarPlusFill,
    BsFillPersonFill,
    BsFillShieldLockFill,
    BsFillVinylFill,
    BsReverseLayoutTextSidebarReverse,
    BsBorderAll,
} from 'react-icons/bs';
import {
    AiOutlineTeam,
    AiFillBuild,
    AiFillBoxPlot,
    AiFillCopyrightCircle,
    AiFillEdit,
    AiFillNotification,
    AiFillRest,
    AiOutlinePhone,
    AiTwotoneMail,
    AiOutlineBook,
    AiOutlineWallet
} from 'react-icons/ai';
import { FiRefreshCcw, FiCheckSquare, FiShuffle, FiClipboard, FiGrid } from 'react-icons/fi';
import { RiCoupon3Fill } from 'react-icons/ri';
import { ImUsers, ImBullhorn } from 'react-icons/im';
import { HiDocumentText, HiOutlineDocumentReport } from 'react-icons/hi';
import { MdOutlineCases } from 'react-icons/md';


function SidebarRoleFourView() {
    console.log('from role 2');
    return (
        <div>
            <div className='iq-sidebar  rtl-iq-sidebar sidebar-default '>
                <div className='iq-sidebar-logo d-flex align-items-center justify-content-between'>
                    <Link to='/' className='header-logo'>
                        <img
                            src='assets/images/logo.png'
                            className='img-fluid rounded-normal light-logo'
                            alt='logo'
                        />
                    </Link>
                    <div className='iq-menu-bt-sidebar'>
                        <i className='las la-bars wrapper-menu'></i>
                    </div>
                </div>
                <div className='data-scrollbar' data-scroll='1'>
                    <nav className='iq-sidebar-menu'>
                        <ul id='iq-sidebar-toggle' className='iq-menu'>


                            <li className=' '>
                                <a
                                    href='#icon'
                                    className='collapsed'
                                    data-toggle='collapse'
                                    aria-expanded='false'
                                >
                                    <BsFillPersonFill className='dashboard_icons' />
                                    <span>User Manager</span>
                                    <i className='las la-angle-right iq-arrow-right arrow-active'></i>
                                    <i className='las la-angle-down iq-arrow-right arrow-hover'></i>
                                </a>
                                <ul
                                    id='icon'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/userManager'}>

                                            <span>All Users</span>
                                        </Link>
                                    </li>
                                    {/* <li className=' '>
                                        <Link to={'/view_all_feedback'}>
                                            <ImBullhorn className='dashboard_icons' />
                                            <span>User Feedback</span>
                                        </Link>
                                    </li> */}
                                </ul>
                            </li>

                            <li className=' '>
                                <a
                                    href='#slidetable'
                                    className='collapsed'
                                    data-toggle='collapse'
                                    aria-expanded='false'
                                >
                                    <AiFillCopyrightCircle className='dashboard_icons' />
                                    <span>Case Manager</span>
                                    <i className='las la-angle-right iq-arrow-right arrow-active'></i>
                                    <i className='las la-angle-down iq-arrow-right arrow-hover'></i>
                                </a>
                                <ul
                                    id='slidetable'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/cases'}>
                                            <MdOutlineCases className='dashboard_icons' />
                                            <span>Create Case</span>
                                        </Link>
                                    </li>

                                    <li className=' '>
                                        <Link to={'/allcases'}>
                                            <MdOutlineCases className='dashboard_icons' />
                                            <span>All Cases</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>



                        </ul>
                    </nav>
                    {/* <div id="sidebar-bottom" className="position-relative sidebar-bottom">
                        <div className="card bg-primary rounded">
                            <div className="card-body">
                                <div className="sidebarbottom-content">
                                    <div className="image"><img src="assets/images/layouts/side-bkg.png" className="img-fluid"
                                        alt="side-bkg" /></div>
                                    <h5 className="mb-3 text-white mt-3">Did you Know ?</h5>
                                    <p className="mb-0 text-white">You can add additional user in your Account's Settings</p>
                                    <button type="button" className="btn bg-light  mt-3"><i className="fas fa-plus-square"></i> New
                                        Program</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
export default SidebarRoleFourView;
