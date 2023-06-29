import { Helmet } from 'react-helmet';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
// import { DashboardAPI } from '../api/dashboardApi';
import { Link } from 'react-router-dom';
import './ViewAllUsers.css';
import { SupportAPI } from '../api/Support';
import Notiflix from 'notiflix';
import {
    BsFillBarChartFill,
    BsFillFileBreakFill,
    BsFillPersonCheckFill,
    BsFillPersonLinesFill,
    BsFillPenFill,
    BsFillPersonFill,
} from 'react-icons/bs';

import { MdOutlineCases } from 'react-icons/md';

function DashboardPage() {
    const [user, setUser] = useState();
    const [activeUser, setactiveUser] = useState();
    const [pan, setPan] = useState();
    const [pending, setPending] = useState();
    const [pending_withdrawal, setPending_withdrawal] = useState();
    const [verifiedWitdrawal, setVerifiedWithdrawal] = useState();
    const [totaAmountWithDrawal, setAmountWithDrawal] = useState();
    const [totalMatches, setTotalMatches] = useState();
    const [launchMatches, setLaunchMatches] = useState();
    const [completeMatches, setCompleteMatches] = useState();
    const [winnerDeclare, setWinnerDeclare] = useState();
    const [totalTeams, setTotalTeams] = useState();
    const [totalPlayers, setTotalPlayers] = useState();
    const [globalContest, setGlobalContest] = useState();
    const [amountReceived, setAmountReceived] = useState();
    const [totalBankVerified, setTotalBankVerified] = useState();
    const [error, setError] = useState(true);
    const role = localStorage.getItem('role');


    // Dashboard Case Summary
    const [allTicket, setAllTicket] = useState('');
    const [openTicket, setOpenTicket] = useState('');
    const [inProgress, setInProgress] = useState('');
    const [escalatedToDev, setEscalatedToDev] = useState('');
    const [closedTicket, setClosedTicket] = useState('');
    const [name,setName]=useState(localStorage.getItem('name'));


    useEffect(() => {
        // const script = document.createElement('script');
        // script.src = 'assets/js/app.js';
        // script.async = true;
        // document.body.appendChild(script);
        dashboardInfo();
    }, []);

    useEffect(() => {
        allCasesSummary();
    }, []);

    function save(data) {
        setUser(data.totalUser);
        setactiveUser(data.activeUser);
        setPan(data.panVerify);
        setPending(data.pendingWithdrawalRequest);
        setPending_withdrawal(data.pendingWithdrawalAmount);
        setVerifiedWithdrawal(data.verifiedWithdrawlRequest);
        setAmountWithDrawal(data.totalWithdrawalAmount);
        setTotalMatches(data.totalMatch);
        setLaunchMatches(data.launched);
        setCompleteMatches(data.matchesCompleted);
        setWinnerDeclare(data.pendingWinnerdeclare);
        setTotalTeams(data.totalteam);
        setTotalPlayers(data.totalPlayers);
        setGlobalContest(data.totalcontest);
        setAmountReceived(data.totalAmountReceived);
        setTotalBankVerified(data.totalUsersBankVerified);
        // console.log(data)
    }
    const dashboardInfo = () => {
        
    };

    const allCasesSummary = () => {
        SupportAPI.getAllCaseStatusDashboard().then((data) => {
            console.log(data.data);
            if (data.status_code) {
                Notiflix.Notify.success('Successfully');
                setAllTicket(data.data.total);
                setOpenTicket(data.data.open);
                setClosedTicket(data.data.closed);
                setEscalatedToDev(data.data.escalatedToDev);
                setInProgress(data.data.inProgress);

            } else {
                // Notiflix.Notify.failure('Something Went Wrong');
            }
        });
    };



    return (
        <div className='dashboard_home'>
            <div className=''>
                <Helmet>
                    <script src='assets/js/chart-custom.js' />
                    {/* <script src="assets/js/app.js" /> */}
                </Helmet>

                <div className='content-page rtl-page'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12 mb-3'>
                                <div className='d-flex align-items-center justify-content-between welcome-content'>
                                    <div className='navbar-breadcrumb dashboard_div'>
                                        <h4 className='mb-0 dashboard_welcome'>
                                            Welcome, Lakshya <span className='wave'>👋</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>


                            <div className='col-lg-12'>
                                <div>
                                    <div className='row'>
                                        {/* { role!='4' && <div className='col-md-4 '>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card'>
                                                <Link to='/view_all_users'>
                                                    <div className='card-body'>
                                                        <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                            <h3 className='text-danger'>991</h3>
                                                            <div className='bg-danger icon iq-icon-box-2 mr-2 rounded rtl-ml-2  rtl-mr-0'>
                                                                <BsFillFileBreakFill />
                                                            </div>
                                                        </div>
                                                        <h4>Total</h4>
                                                        <div className='mt-1'>
                                                            <p className='mb-0'>Images Uploaded</p>
                                                        </div>
                                                        <div className='iq-progress-bar mt-3'>
                                                            <span
                                                                className='bg-danger'
                                                                data-percent='55'
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>} */}
                                        {role!='4' && <div className='col-md-4'>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card'>
                                                <div className='card-body'>
                                                    <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                        <h3 className='text-primary'>
                                                            1
                                                        </h3>
                                                        <div className='bg-primary icon iq-icon-box-2 mr-2 rounded rtl-mr-0  rtl-ml-2'>
                                                            <BsFillPersonCheckFill />
                                                        </div>
                                                    </div>
                                                    <h4>Active User</h4>
                                                    <div className='mt-1'>
                                                        <p className='mb-0'>
                                                            <var>{activeUser}</var>
                                                        </p>
                                                    </div>
                                                    <div className='iq-progress-bar mt-3'>
                                                        <span
                                                            className='bg-primary'
                                                            data-percent='67'
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}

                                        { role!='4' && <div className='col-md-4 '>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card'>
                                                <Link to='/view_all_users'>
                                                    <div className='card-body'>
                                                        <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                            <h3 className='text-danger'>12</h3>
                                                            <div className='bg-danger icon iq-icon-box-2 mr-2 rounded rtl-ml-2  rtl-mr-0'>
                                                                <BsFillFileBreakFill />
                                                            </div>
                                                        </div>
                                                        <h4>Total</h4>
                                                        <div className='mt-1'>
                                                            <p className='mb-0'>PDF Uploaded</p>
                                                        </div>
                                                        <div className='iq-progress-bar mt-3'>
                                                            <span
                                                                className='bg-danger'
                                                                data-percent='55'
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>}


                                        {/* <div className="col-lg-12 mt-4">
                                            <div className="card">
                                                <div className="card-header border-none">
                                                    <div className="header-title">
                                                        <h4 className="card-title"> Total Files</h4>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div id="layout-1-chart-02"></div>
                                                    <div className="row mt-4">
                                                        <div className="col-md-6 mb-md-0 mb-3 text-center">
                                                            <div className="progress progress-round mx-auto primary conversation-bar"
                                                                data-percent="76">
                                                                <span className="progress-left">
                                                                    <span className="progress-bar"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar"></span>
                                                                </span>
                                                                <div className="progress-value text-primary">190</div>
                                                            </div>
                                                            <div className="progress-value mt-4">
                                                                <h4>PDF</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 text-center">
                                                            <div className="progress progress-round goal-progress mx-auto orange conversation-bar"
                                                                data-percent="82">
                                                                <span className="progress-left">
                                                                    <span className="progress-bar"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar"></span>
                                                                </span>
                                                                <div className="progress-value text-orange">33</div>
                                                            </div>
                                                            <div className="progress-value mt-4">
                                                                <h4>Images Uploaded</h4>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
 
                                       
                                        {/* { role!='4' && <div className='col-md-4'>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card'>
                                                <div className='card-body'>
                                                    <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                        <h3 className='text-info'>
                                                            199
                                                        </h3>
                                                        <div className='bg-info icon iq-icon-box-2 mr-2 rounded rtl-ml-2 rtl-mr-0'>
                                                            <BsFillPersonFill />
                                                        </div>
                                                    </div>
                                                    <h4>Pending</h4>
                                                    <div className='mt-1'>
                                                        <p className='mb-0'>Withdrawal Amount</p>
                                                    </div>
                                                    <div className='iq-progress-bar mt-3'>
                                                        <span
                                                            className='bg-info'
                                                            data-percent='15'
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>} */}

                                        {/* { role!='4' && <div className='col-md-4'>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card '>
                                                <div className='card-body'>
                                                    <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                        <h3 className='text-danger'>
                                                            2234
                                                        </h3>
                                                        <div className='bg-danger icon iq-icon-box-2 mr-2 rounded rtl-ml-2  rtl-mr-0'>
                                                            <BsFillBarChartFill />{' '}
                                                        </div>
                                                    </div>
                                                    <h4>Total</h4>
                                                    <div className='mt-1'>
                                                        <p className='mb-0'> Withdrawal Amount</p>
                                                    </div>
                                                    <div className='iq-progress-bar mt-3'>
                                                        <span
                                                            className='bg-danger'
                                                            data-percent='55'
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>} */}

                                        {/* { role!='4' && <div className='col-md-4'>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card'>
                                                <Link to='/upcoming_matches'>
                                                    <div className='card-body'>
                                                        <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                            <h3 className='text-primary'>
                                                                871
                                                            </h3>
                                                            <div className='bg-primary icon iq-icon-box-2 mr-2 rounded rtl-mr-0  rtl-ml-2'>
                                                                <BsFillBarChartFill />
                                                            </div>
                                                        </div>
                                                        <h4>Total</h4>
                                                        <div className='mt-1'>
                                                            <p className='mb-0'>No. of Added Images</p>
                                                        </div>
                                                        <div className='iq-progress-bar mt-3'>
                                                            <span
                                                                className='bg-primary'
                                                                data-percent='67'
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>} */}

                                        {/* { role!='4' && <div className='col-md-4'>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card '>
                                                <Link to='/all_matches'>
                                                    <div className='card-body'>
                                                        <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                            <h3 className='text-orange'>
                                                                99
                                                            </h3>
                                                            <div className='bg-orange icon iq-icon-box-2 mr-2 rounded rtl-ml-2 rtl-mr-0'>
                                                                <BsFillBarChartFill />
                                                            </div>
                                                        </div>
                                                        <h4>Total </h4>
                                                        <div className='mt-1'>
                                                            <p className='mb-0'>Data Added Recently</p>
                                                        </div>
                                                        <div className='iq-progress-bar mt-3'>
                                                            <span
                                                                className='bg-orange'
                                                                data-percent='55'
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>} */}

                                        {/* { role!='4' && <div className='col-md-4'>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card'>
                                                <div className='card-body'>
                                                    <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                        <h3 className='text-skyblue'>
                                                            787
                                                        </h3>
                                                        <div className='bg-skyblue icon iq-icon-box-2 mr-2 rounded rtl-ml-2 rtl-mr-0'>
                                                            <BsFillBarChartFill />
                                                        </div>
                                                    </div>
                                                    <h4>Total</h4>
                                                    <div className='mt-1'>
                                                        <p className='mb-0'>Completed Files</p>
                                                    </div>
                                                    <div className='iq-progress-bar mt-3'>
                                                        <span
                                                            className='bg-skyblue'
                                                            data-percent='33'
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>} */}

                                        {/* { role!='4' && <div className='col-md-4'>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card'>
                                                <div className='card-body'>
                                                    <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                        <h3 className='text-success'>
                                                            199
                                                        </h3>
                                                        <div className='bg-success icon iq-icon-box-2 mr-2 rounded rtl-mr-0 rtl-ml-2'>
                                                            <BsFillBarChartFill />
                                                        </div>
                                                    </div>
                                                    <h4>Pending </h4>
                                                    <div className='mt-1'>
                                                        <p className='mb-0'>Files Removed</p>
                                                    </div>
                                                    <div className='iq-progress-bar mt-3'>
                                                        <span
                                                            className='bg-success'
                                                            data-percent='33'
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>} */}

                                        {/* { role!='4' && <div className='col-md-4'>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card'>
                                                <Link to='/view_team'>
                                                    <div className='card-body'>
                                                        <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                            <h3 className='text-info'>
                                                                922
                                                            </h3>
                                                            <div className='bg-info icon iq-icon-box-2 mr-2 rounded rtl-ml-2 rtl-mr-0'>
                                                                <BsFillBarChartFill />
                                                            </div>
                                                        </div>
                                                        <h4>Total</h4>
                                                        <div className='mt-1'>
                                                            <p className='mb-0'>No. of IT files</p>
                                                        </div>
                                                        <div className='iq-progress-bar mt-3'>
                                                            <span
                                                                className='bg-info'
                                                                data-percent='15'
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>} */}

                                        {/* { role!='4' && <div className='col-md-4'>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card'>
                                                <div className='card-body'>
                                                    <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                        <h3 className='text-orange'>
                                                            119
                                                        </h3>
                                                        <div className='bg-orange icon iq-icon-box-2 mr-2 rounded rtl-ml-2 rtl-mr-0'>
                                                            <BsFillBarChartFill />
                                                        </div>
                                                    </div>
                                                    <h4>Total</h4>
                                                    <div className='mt-1'>
                                                        <p className='mb-0'>No. of Accounts Files</p>
                                                    </div>
                                                    <div className='iq-progress-bar mt-3'>
                                                        <span
                                                            className='bg-orange'
                                                            data-percent='15'
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>} */}

                                        {/* { role!='4' && <div className='col-md-4'>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card'>
                                                <div className='card-body'>
                                                    <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                        <h3 className='text-blue'>
                                                            3443
                                                        </h3>
                                                        <div className='bg-blue icon iq-icon-box-2 mr-2 rounded rtl-ml-2 rtl-mr-0'>
                                                            <BsFillBarChartFill />
                                                        </div>
                                                    </div>
                                                    <h4>List</h4>
                                                    <div className='mt-1'>
                                                        <p className='mb-0'>No. of Finance Files</p>
                                                    </div>
                                                    <div className='iq-progress-bar mt-3'>
                                                        <span
                                                            className='bg-blue'
                                                            data-percent='15'
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>} */}

                                        {/* {role!='4' && <div className='col-md-4'>
                                            <div className='card card-block card-stretch card-height rtl-mode dashboard_card'>
                                                <div className='card-body'>
                                                    <div className='top-block d-flex align-items-center justify-content-between mb-3'>
                                                        <h3 className='text-skyblue'>
                                                        ₹9,00,000
                                                        </h3>
                                                        <div className='bg-skyblue icon iq-icon-box-2 mr-2 rounded rtl-ml-2 rtl-mr-0'>
                                                            <BsFillBarChartFill />
                                                        </div>
                                                    </div>
                                                    <h4>Total</h4>
                                                    <div className='mt-1'>
                                                        <p className='mb-0'>Amount Received</p>
                                                    </div>
                                                    <div className='iq-progress-bar mt-3'>
                                                        <span
                                                            className='bg-skyblue'
                                                            data-percent='15'
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>} */}
                                        

                                        {/* <div className="col-lg-5">
                                            <div className="card card-block card-stretch card-height rtl-card">
                                                <div className="card-header border-none">
                                                    <div className="header-title">
                                                        <h4 className="card-title">Work Done by Department</h4>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="iq-details">
                                                        <h5 className="title">Accounts</h5>
                                                        <div className="iq-progress-bar bg-primary-light mt-2">
                                                            <span className="bg-primary iq-progress progress-1" data-percent="49">
                                                                <span className="progress-text-one bg-primary">49%</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="iq-details mt-4">
                                                        <h5 className="title">IT Department</h5>
                                                        <div className="iq-progress-bar bg-orange-light mt-2">
                                                            <span className="bg-orange iq-progress progress-1" data-percent="92">
                                                                <span className="progress-text-one bg-orange">92%</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="iq-details mt-4">
                                                        <h4 className="title">Finance Department</h4>
                                                        <div className="iq-progress-bar bg-skyblue-light mt-2">
                                                            <span className="bg-skyblue iq-progress progress-1" data-percent="39">
                                                                <span className="progress-text-one bg-skyblue">39%</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="iq-details mt-4">
                                                        <h5 className="title">HR Department</h5>
                                                        <div className="iq-progress-bar bg-info-light mt-2">
                                                            <span className="bg-info iq-progress progress-1" data-percent="69">
                                                                <span className="progress-text-one bg-info">69%</span>
                                                            </span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 mt-4">
                <div className="card">
                    <div className="card-header border-none">
                        <div className="header-title">
                            <h4 className="card-title"> Total Downloads</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <div id="layout-1-chart-02"></div>
                        <div className="row mt-4">
                            <div className="col-md-6 mb-md-0 mb-3 text-center">
                                <div className="progress progress-round mx-auto primary conversation-bar"
                                    data-percent="76">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value text-primary">76%</div>
                                </div>
                                <div className="progress-value mt-4">
                                    <h4>Users Joined</h4>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <div className="progress progress-round goal-progress mx-auto orange conversation-bar"
                                    data-percent="82">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value text-orange">92%</div>
                                </div>
                                <div className="progress-value mt-4">
                                    <h4>User Played</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                            {/* <div className="col-lg-8 mt-4">
                <div className="card card-block card-stretch card-height">
                    <div className="card-header border-none">
                        <div className="header-title">
                            <h4 className="card-title">70% of the users play Cricket on super4 fantasy gaming app
                            </h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <div id="layout-1-chart-03"></div>
                    </div>
                </div>
            </div> */}

                            {/* <div className="col-lg-5">
                <div className="card card-block card-stretch card-height rtl-card">
                    <div className="card-header border-none">
                        <div className="header-title">
                            <h4 className="card-title">Active User on Social Media</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="iq-details">
                            <h5 className="title">Facebook</h5>
                            <div className="iq-progress-bar bg-primary-light mt-2">
                                <span className="bg-primary iq-progress progress-1" data-percent="49">
                                    <span className="progress-text-one bg-primary">49%</span>
                                </span>
                            </div>
                        </div>
                        <div className="iq-details mt-4">
                            <h5 className="title">Twitter</h5>
                            <div className="iq-progress-bar bg-orange-light mt-2">
                                <span className="bg-orange iq-progress progress-1" data-percent="92">
                                    <span className="progress-text-one bg-orange">92%</span>
                                </span>
                            </div>
                        </div>
                        <div className="iq-details mt-4">
                            <h4 className="title">Linkedin</h4>
                            <div className="iq-progress-bar bg-skyblue-light mt-2">
                                <span className="bg-skyblue iq-progress progress-1" data-percent="39">
                                    <span className="progress-text-one bg-skyblue">39%</span>
                                </span>
                            </div>
                        </div>
                        <div className="iq-details mt-4">
                            <h5 className="title">Instagram</h5>
                            <div className="iq-progress-bar bg-info-light mt-2">
                                <span className="bg-info iq-progress progress-1" data-percent="69">
                                    <span className="progress-text-one bg-info">69%</span>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
                            {/* <div className="col-lg-7">
                <div className="card card-block card-stretch card-height">
                    <div className="card-header border-none">
                        <div className="header-title">
                            <h4 className="card-title">
                                Overview
                            </h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <div id="layout-1-chart-06"></div>
                    </div>
                </div>
            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashboardPage;
