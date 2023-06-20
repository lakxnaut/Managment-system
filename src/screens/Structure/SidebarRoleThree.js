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

function SidebarRoleThreeView() {
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
                                <Link to='/' className='collapsed' data-toggle='collapse'>
                                    <BsFillBarChartLineFill className='dashboard_icons' />{' '}
                                    <span>Dashboards</span>
                                </Link>
                                {/* <ul id="" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className=" ">
                                        <Link to="/">
                                            <i className="lab la-blogger-b"></i><span>Dashboard </span>
                                        </Link>
                                    </li>

                                </ul> */}
                            </li>
                          

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
                                        <Link to={'/view_all_users'}>
                                            <ImUsers className='dashboard_icons' />
                                            <span>All Users</span>
                                        </Link>
                                    </li>
                                    {/* <li className=" ">
                                        <Link to={"/users_wallets"}>
                                            <i className="las la-check-double"></i><span>View Wallet Report</span>
                                        </Link>
                                    </li> */}
                                    <li className=' '>
                                        <Link to={'/view_all_feedback'}>
                                            <ImBullhorn className='dashboard_icons' />
                                            <span>User Feedback</span>
                                        </Link>
                                    </li>
                                    {/* <li className=" ">
                                        <Link to={"/admin_wallet"}>
                                            <i className="las la-check-double"></i><span>Admin Wallet</span>
                                        </Link>
                                    </li> */}
                                </ul>
                            </li>

                            <li className=' '>
                                <a
                                    href='#reportManager'
                                    className='collapsed'
                                    data-toggle='collapse'
                                    aria-expanded='false'
                                >
                                    <HiOutlineDocumentReport className='dashboard_icons' />
                                    <span>Report Manager</span>
                                    <i className='las la-angle-right iq-arrow-right arrow-active'></i>
                                    <i className='las la-angle-down iq-arrow-right arrow-hover'></i>
                                </a>
                                <ul
                                    id='reportManager'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/kyc_report'}>
                                            <AiOutlineBook className='dashboard_icons' />
                                            <span>KYC Report</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/wallet_report'}>
                                            <AiOutlineWallet className='dashboard_icons' />
                                            <span>Wallet Report</span>
                                        </Link>
                                    </li>

                                    <li className=''>
                                        <Link to={'/unutilizedReport'}>
                                            {/* <BsFillSendSlashFill className='dashboard_icons' /> */}
                                            <span>Unutilized Report</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>


                           
                            <li className=' '>
                                <Link
                                    to={'/fulldetail'}
                                    className='collapsed'
                                    data-toggle='collapse'
                                >
                                    <BsReverseLayoutTextSidebarReverse className='dashboard_icons' />
                                    <span>Full Series Detail</span>
                                    {/* <i className="las la-angle-right iq-arrow-right arrow-active"></i> */}
                                    {/* <i className="las la-angle-down iq-arrow-right arrow-hover"></i> */}
                                </Link>
                                {/* <ul id="chart" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className=" ">
                                        <Link to={"/fulldetail"}>
                                            <i className="lab la-rocketchat"></i><span>Series Detail</span>
                                        </Link>
                                    </li>

                                </ul> */}
                            </li>

                            <li className=' '>
                                <Link
                                    to={'/addoffers'}
                                    className='collapsed'
                                    data-toggle='collapse'
                                >
                                    <RiCoupon3Fill className='dashboard_icons' />
                                    <span>Add Coupons</span>
                                    {/* <i className="las la-angle-right iq-arrow-right arrow-active"></i> */}
                                    {/* <i className="las la-angle-down iq-arrow-right arrow-hover"></i> */}
                                </Link>
                            </li>

                            {/* <li className=" ">
                                <a href="#map" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="las la-map-marked iq-arrow-left"></i><span>Fund Manager</span>
                                    <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                    <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                </a>
                                <ul id="map" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className=" ">
                                        <Link to={"/cashfree"}>
                                            <i className="lab la-rocketchat"></i><span>Via Cashfree</span>
                                        </Link>
                                    </li>

                                </ul>
                            </li> */}
                            <li className=' '>
                                <Link
                                    to={'/banner'}
                                    className='collapsed'
                                    data-toggle='collapse'
                                >
                                    <BsBorderAll className='dashboard_icons' />
                                    <span>Banner Manager</span>
                                    {/* <i className="las la-angle-right iq-arrow-right arrow-active"></i> */}
                                    {/* <i className="las la-angle-down iq-arrow-right arrow-hover"></i> */}
                                </Link>
                            </li>
                            <li className=' '>
                                <a
                                    href='#push_notifcations'
                                    className='collapsed'
                                    data-toggle='collapse'
                                    aria-expanded='false'
                                >
                                    <AiFillNotification className='dashboard_icons' />
                                    <span>Notification</span>

                                </a>
                                <ul
                                    id='push_notifcations'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/push_notification'}>
                                            <AiOutlinePhone className="dashboard_icons" />
                                            <span>Send App Notification</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/email_notification'}>
                                            <AiTwotoneMail className='dashboard_icons' />
                                            <span>Send Email Notification</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                           
                            {/* <li className=" ">
                                <a href="#points" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="las la-book-reader iq-arrow-left"></i><span>Point</span>
                                    <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                    <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                </a>
                                <ul id="points" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className=" ">
                                        <Link to={"/points"}>
                                            <i className="lab la-rocketchat"></i><span>Add Points</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
                            <li className=' '>
                                <a
                                    href='#referrals'
                                    className='collapsed'
                                    data-toggle='collapse'
                                    aria-expanded='false'
                                >
                                    <FiRefreshCcw className='dashboard_icons' />
                                    <span>Referrals</span>
                                    <i className='las la-angle-right iq-arrow-right arrow-active'></i>
                                    <i className='las la-angle-down iq-arrow-right arrow-hover'></i>
                                </a>
                                <ul
                                    id='referrals'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/referrals'}>
                                            <i className='lab la-rocketchat'></i>
                                            <span>Add Referral</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/referrals_users'}>
                                            <i className='lab la-rocketchat'></i>
                                            <span>Referral Users</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/view_referrals'}>
                                            <i className='lab la-rocketchat'></i>
                                            <span>View Referrals</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>



                            {/* <li className=" ">
                                <a href="#cms" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="las la-tags iq-arrow-left"></i><span>CMS</span>
                                    <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                    <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                </a>
                                <ul id="cms" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className=" ">
                                        <Link to={"/add_aboutus"}>
                                            <i className="lab la-rocketchat"></i><span>About us</span>
                                        </Link>
                                    </li>
                                    <li className=" ">
                                        <Link to={"/add_howto_play"}>
                                            <i className="las la-check-double"></i><span>How to Play</span>
                                        </Link>
                                    </li>
                                    <li className=" ">
                                        <Link to={"/cms"}>
                                            <i className="las la-check-double"></i><span>FAQ</span>
                                        </Link>
                                    </li>
                                    <li className=" ">
                                        <Link to={"/cms"}>
                                            <i className="las la-check-double"></i><span>Support</span>
                                        </Link>
                                    </li>
                                    <li className=" ">
                                        <Link to={"/cms"}>
                                            <i className="las la-check-double"></i><span>Terms & Conditions</span>
                                        </Link>
                                    </li>
                                    <li className=" ">
                                        <Link to={"/cms"}>
                                            <i className="las la-check-double"></i><span>Privacy Policy</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li className=" ">
                                <a href="#affi" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="las la-pager iq-arrow-left"></i><span>Affilate Manager</span>
                                    <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                    <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                </a>
                                <ul id="affi" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className=" ">
                                        <Link to={"/add_youtuber"}>
                                            <i className="lab la-rocketchat"></i><span>Add Affliate</span>
                                        </Link>
                                    </li>
                                    <li className=" ">
                                        <Link to={"/view_youtuber"}>
                                            <i className="las la-check-double"></i><span>View Affliate</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li className=" ">
                                <a href="#act" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="las la-file-invoice-dollar"></i><span>Account Manager</span>
                                    <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                    <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                </a>
                                <ul id="act" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">

                                    <li className=" ">
                                        <a href="#" data-toggle="modal" data-target="#pandl">
                                            <i className="lab la-rocketchat"></i><span>View Profit &amp; Lose</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="#" data-toggle="modal" data-target="#pandl">
                                            <i className="las la-check-double"></i><span>View Daily Report</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <Link to={"/view_tds"}>
                                            <i className="las la-check-double"></i><span>View TDS Report</span>
                                        </Link>
                                    </li>
                                    <li className=" ">
                                        <Link to={"/earning"}>
                                            <i className="las la-check-double"></i><span>Earning</span>
                                        </Link>
                                    </li>
                                    <li className=" ">
                                        <Link to={"/total_balance"}>
                                            <i className="las la-check-double"></i><span>Total Balance</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li className=" ">
                            <a href="#score" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="la fa-thin fa-address-card"></i><span>Points Table</span>
                                    <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                    <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                </a>
                                <ul id="score" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li className="">
                                        <Link to={"/createScoreBoard"}>
                                            <i className="las la-check-double"></i><span>Create Points Score</span>
                                        </Link>
                                    </li>
                                  <li className="">
                                        <Link to={"/scoreBoard"}>
                                            <i className="las la-check-double"></i><span>Points Table</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to={"/strikeBoard"}>
                                            <i className="las la-check-double"></i><span>Strike Rate Table</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to={"/economyBoard"}>
                                            <i className="las la-check-double"></i><span>Economy Rate Table</span>
                                        </Link>
                                    </li>
                                    </ul>
                                    </li> */}

                            {/* <li className=" ">
                                <a href="#royalty" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="las la-mobile iq-arrow-left"></i><span>Royalty Bonus</span>
                                    <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                    <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                </a>
                                <ul id="royalty" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            
                                    <li className=" ">
                                        <Link to="/royalty_points">
                                            <i className="las la-check-double"></i><span>Royalty Points</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}

                            {/* <li className=" ">
                                <a href="#Reports" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="las la-mobile iq-arrow-left"></i><span>Reports Manager</span>
                                    <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                    <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                </a>
                                <ul id="Reports" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                     
                                    <li className=" ">
                                        <Link to="/user_activity_log">
                                            <i className="las la-check-double"></i><span>User Activity</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}

                            {/* <li className=''>
                                <a href="#master" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="la fa-thin fa-code-branch"></i><span>Master Manager</span>
                                    <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                    <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                </a>
                                <ul id="master" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className=" ">
                                        <Link to={"/master"}>
                                            <i className="la la-folder"></i><span>Master Controller</span>
                                            <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                        </Link>
                                    </li>

                                    <li className=" ">
                                        <Link to={"/master_table"}>
                                            <i className="la la-folder"></i><span>Master Table</span>
                                            <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                        </Link>
                                    </li>

                                    <li className=" ">
                                        <Link to={"/role_master"}>
                                            <i className="la la-folder"></i><span>Role Master</span>
                                            <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                        </Link>
                                    </li>

                                    <li className=" ">
                                        <Link to={"/employee_master"}>
                                            <i className="la la-folder"></i><span>Employee Master</span>
                                            <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                        </Link>
                                    </li>

                                    <li className=" ">
                                        <Link to={"/authority_master"}>
                                            <i className="la la-folder"></i><span>Authority Master</span>
                                            <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}

                            {/* <li className=" ">
                                        <Link to={"/settings"}>
                                        <i className="la la-cog"></i><span>Settings</span>
                                        <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                        </Link>
                                    </li> */}
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
export default SidebarRoleThreeView;