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

function SidebarRoleFiveView() {
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
                                <Link
                                    to='/view_series'
                                    className='collapsed'
                                    data-toggle='collapse'
                                >
                                    <BsFillCalendarPlusFill className='dashboard_icons' />
                                    <span>Series Manager</span>
                                    {/* <i className="las la-angle-right iq-arrow-right arrow-active"></i> */}
                                    {/* <i className="las la-angle-down iq-arrow-right arrow-hover"></i> */}
                                </Link>
                                {/* <ul id="app" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className=" ">
                                    <Link to="/create_series">
                                            <i className="lab la-rocketchat"></i><span>Create New Series</span>
                                        </Link>
                                    </li>
                                    <li className=" ">
                                        <Link to="/view_series">
                                            <i className="las la-check-double"></i><span>View All Series</span>
                                        </Link>
                                    </li>
                                </ul> */}
                            </li>
                            <li className=' '>
                                <Link
                                    to={'/view_team'}
                                    className='collapsed'
                                    data-toggle='collapse'
                                >
                                    <AiOutlineTeam className='dashboard_icons' />
                                    <span>Team Manager</span>
                                    {/* <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                    <i className="las la-angle-down iq-arrow-right arrow-hover"></i> */}
                                </Link>
                                {/* <ul id="widget" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className=" ">
                                        <Link to={"/view_team"}>
                                            <i className="lab la-rocketchat"></i><span>View All Team</span>
                                        </Link>
                                    </li>

                                </ul> */}
                            </li>
                            <li className=' '>
                                <Link
                                    to={'/view_player'}
                                    className='collapsed'
                                    data-toggle='collapse'
                                >
                                    <AiFillBuild className='dashboard_icons' />
                                    <span>Player Manager</span>
                                    {/* <i className="las la-angle-right iq-arrow-right arrow-active"></i> */}
                                    {/* <i className="las la-angle-down iq-arrow-right arrow-hover"></i> */}
                                </Link>
                                {/* <ul id="ui" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">

                                    <li className=" ">
                                        <Link to={"/view_player"}>
                                            <i className="las la-check-double"></i><span>View All Player</span>
                                        </Link>
                                    </li>
                                    <li className=" ">
                                        <Link to={"/players_substitute"}>
                                            <i className="las la-check-double"></i><span>Players Susbstitute</span>
                                        </Link>
                                    </li>
                                </ul> */}
                            </li>
                            <li className=' '>
                                <a
                                    href='#plugin'
                                    className='collapsed'
                                    data-toggle='collapse'
                                    aria-expanded='false'
                                >
                                    <AiFillBoxPlot className='dashboard_icons' />
                                    <span>Match Manager</span>
                                    <i className='las la-angle-right iq-arrow-right arrow-active'></i>
                                    <i className='las la-angle-down iq-arrow-right arrow-hover'></i>
                                </a>
                                <ul
                                    id='plugin'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/upcoming_matches'}>
                                            <FiGrid className='dashboard_icons' />
                                            <span>Upcoming All Matches</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/all_matches'}>
                                            <FiClipboard className='dashboard_icons' />
                                            <span>View All Matches</span>
                                        </Link>
                                    </li>
                                    {/* <li className=" ">
                                        <Link to={"/reschedule_match"}>
                                            <i className="las la-check-double"></i><span>Reschedule Match</span>
                                        </Link>
                                    </li> */}
                                    <li className=' '>
                                        <Link to={'/update_playing_xi'}>
                                            <FiShuffle className='dashboard_icons' />
                                            <span>Update Playing 11</span>
                                        </Link>
                                    </li>

                                    <li className=' '>
                                        <Link to={'/impactplayer'}>
                                            <FiCheckSquare className='dashboard_icons' />
                                            <span>Impact Player 11</span>
                                        </Link>
                                    </li>
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
                                    <span>Contest Manager</span>
                                    <i className='las la-angle-right iq-arrow-right arrow-active'></i>
                                    <i className='las la-angle-down iq-arrow-right arrow-hover'></i>
                                </a>
                                <ul
                                    id='slidetable'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/view_contest_category'}>
                                            <i className='lab la-rocketchat'></i>
                                            <span>Contest Categories</span>
                                        </Link>
                                    </li>
                                    {/* <li className=" ">
                                        <Link to={"/contest_wise_reports"}>
                                            <i className="lab la-rocketchat"></i><span>Contest Wise Report</span>
                                        </Link>
                                    </li> */}
                                    {/* <li className=" ">
                                        <Link to={"/assign_contest"}>
                                            <i className="lab la-rocketchat"></i><span>Assign Contest</span>
                                        </Link>
                                    </li> */}
                                    <li className=' '>
                                        <Link to={'/global_contests'}>
                                            <i className='las la-check-double'></i>
                                            <span>Global Contests</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/create_custom_contest'}>
                                            <i className='las la-check-double'></i>
                                            <span>Match wise Contests</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className=' '>
                                <a
                                    href='#form'
                                    className='collapsed'
                                    data-toggle='collapse'
                                    aria-expanded='false'
                                >
                                    <AiFillEdit className='dashboard_icons' />
                                    <span>Quiz Manager</span>
                                    <i className='las la-angle-right iq-arrow-right arrow-active'></i>
                                    <i className='las la-angle-down iq-arrow-right arrow-hover'></i>
                                </a>
                                <ul
                                    id='form'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/creat_quiz_category'}>
                                            <i className='lab la-rocketchat'></i>
                                            <span>Create Quiz Contest</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/view_quiz_contest_category'}>
                                            <i className='las la-check-double'></i>
                                            <span>View Quiz Contest</span>
                                        </Link>
                                    </li>
                                    {/* <li className=" ">
                                        <Link to={"/view_all_question"}>
                                            <i className="las la-check-double"></i><span>View All Questions</span>
                                        </Link>
                                    </li> */}
                                    <li className=' '>
                                        <Link to={'/view_all_quiz_contest'}>
                                            <i className='las la-check-double'></i>
                                            <span>View All Contests</span>
                                        </Link>
                                    </li>
                                </ul>
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
                                <a
                                    href='#gallery'
                                    className='collapsed'
                                    data-toggle='collapse'
                                    aria-expanded='false'
                                >
                                    <BsFillShieldLockFill className='dashboard_icons' />
                                    <span>Verification Manager</span>
                                    <i className='las la-angle-right iq-arrow-right arrow-active'></i>
                                    <i className='las la-angle-down iq-arrow-right arrow-hover'></i>
                                </a>
                                <ul
                                    id='gallery'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/verifypan'}>
                                            <i className='ri-bank-card-line'></i>
                                            <span>PAN Card</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/verifybankaccount'}>
                                            <i className='ri-bank-line'></i>
                                            <span>Bank Account</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/withdraw_amount'}>
                                            <i className='ri-arrow-left-right-line'></i>
                                            <span>Account Withdrawal</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/payment_history'}>
                                            <i className='ri-bank-card-line'></i>
                                            <span>Payment History</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/user_account_detail'}>
                                            <i className='ri-bank-line'></i>
                                            <span>User Account Detail</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className=' '>
                                <a
                                    href='#gstreport'
                                    className='collapsed'
                                    data-toggle='collapse'
                                    aria-expanded='false'
                                >
                                    <HiDocumentText className='dashboard_icons' />{' '}
                                    <span>Account Manager</span>
                                </a>
                                <ul
                                    id='gstreport'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/gst'}>
                                            <i className='ri-bank-card-line'></i>
                                            <span>GST Report</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/gst'}>
                                            <i className='ri-bank-line'></i>
                                            <span>TDS Report</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className=' '>
                                <Link
                                    to={'/cases'}
                                    className='collapsed'
                                    data-toggle='collapse'
                                >
                                    <MdOutlineCases className='dashboard_icons' />
                                    <span>Cases</span>
                                    {/* <i className="las la-angle-right iq-arrow-right arrow-active"></i> */}
                                    {/* <i className="las la-angle-down iq-arrow-right arrow-hover"></i> */}
                                </Link>

                            </li>



                            <li className=' '>
                                <Link
                                    to={'/match_result'}
                                    className='collapsed'
                                    data-toggle='collapse'
                                >
                                    <BsFillVinylFill className='dashboard_icons' />
                                    <span>Result Manager</span>
                                    {/* <i className="las la-angle-right iq-arrow-right arrow-active"></i> */}
                                    {/* <i className="las la-angle-down iq-arrow-right arrow-hover"></i> */}
                                </Link>
                                {/* <ul id="blog" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className=" ">
                                        <Link to={"/match_result"}>
                                            <i className="lab la-rocketchat"></i><span>Match Result</span>
                                        </Link>
                                    </li>

                                </ul> */}
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
                            <li className=' '>
                                <a
                                    href='#bonus'
                                    className='collapsed'
                                    data-toggle='collapse'
                                    aria-expanded='false'
                                >
                                    <AiFillRest className='dashboard_icons' />
                                    <span>Bonus Manager</span>
                                    <i className='las la-angle-right iq-arrow-right arrow-active'></i>
                                    <i className='las la-angle-down iq-arrow-right arrow-hover'></i>
                                </a>
                                <ul
                                    id='bonus'
                                    className='iq-submenu collapse'
                                    data-parent='#iq-sidebar-toggle'
                                >
                                    <li className=' '>
                                        <Link to={'/general'}>
                                            <i className='lab la-rocketchat'></i>
                                            <span>View All General Tabs</span>
                                        </Link>
                                    </li>
                                    <li className=' '>
                                        <Link to={'/points'}>
                                            <i className='lab la-rocketchat'></i>
                                            <span>Add Bonus</span>
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
export default SidebarRoleFiveView;
