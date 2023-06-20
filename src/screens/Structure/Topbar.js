import { Link } from 'react-router-dom';
import '../ViewAllUsers.css';
import { DiCoda } from 'react-icons/di';

function TopbarView() {
    return (
        <div className='iq-top-navbar'>
            <div className='iq-navbar-custom'>
                <nav className='navbar navbar-expand-lg navbar-light p-0'>
                    <div className='iq-navbar-logo d-flex align-items-center justify-content-between'>
                        <i className='ri-menu-line wrapper-menu'></i>
                        <Link to={'/'} className='header-logo'></Link>
                    </div>
                    {/* <div className="iq-search-bar device-search">
                    <form action="#" className="searchbox">
                        <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                        <input type="text" className="text search-input" placeholder="Search here..." />
                    </form>
                </div> */}
                    <div className='d-flex align-items-center'>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-toggle='collapse'
                            data-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-label='Toggle navigation'
                        >
                            <i className='ri-menu-3-line'></i>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav ml-auto navbar-list align-items-center'>
                                <li className='nav-item nav-icon dropdown'>
                                    <a
                                        href='#'
                                        className='search-toggle dropdown-toggle'
                                        id='dropdownMenuButton2'
                                        data-toggle='dropdown'
                                        aria-haspopup='true'
                                        aria-expanded='false'
                                    >
                                        <span className='bg-primary'></span>
                                    </a>
                                    <div
                                        className='iq-sub-dropdown dropdown-menu'
                                        aria-labelledby='dropdownMenuButton2'
                                    >
                                        <div className='card shadow-none m-0'>
                                            <div className='card-body p-0 '>
                                                <div className='cust-title p-3'>
                                                    <h5 className='mb-0'>All Messages</h5>
                                                </div>
                                                {/* <div className="p-3">
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded-small"
                                                                src="assets/images/user/01.jpg" alt="01" />
                                                        </div>
                                                        <div className="media-body ml-3 rtl-mr-3 rtl-ml-0">
                                                            <h6 className="mb-0">Barry Emma Watson <small
                                                                className="badge badge-success float-right rtl-mr-1">New</small>
                                                            </h6>
                                                            <small className="float-left font-size-12">12:00 PM</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded-small"
                                                                src="assets/images/user/02.jpg" alt="02" />
                                                        </div>
                                                        <div className="media-body ml-3 rtl-ml-0 rtl-mr-3">
                                                            <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                            <small className="float-left font-size-12">20 Apr</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded-small"
                                                                src="assets/images/user/03.jpg" alt="03" />
                                                        </div>
                                                        <div className="media-body ml-3 rtl-mr-3 rtl-ml-0">
                                                            <h6 className="mb-0 ">Why do we use it? <small
                                                                className="badge badge-success float-right rtl-mr-1">New</small>
                                                            </h6>
                                                            <small className="float-left font-size-12">1:24 PM</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded-small"
                                                                src="assets/images/user/04.jpg" alt="04" />
                                                        </div>
                                                        <div className="media-body ml-3 rtl-ml-0 rtl-mr-3">
                                                            <h6 className="mb-0">Variations Passages <small
                                                                className="badge badge-success float-right rtl-mr-1">New</small>
                                                            </h6>
                                                            <small className="float-left font-size-12">5:45 PM</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded-small"
                                                                src="assets/images/user/05.jpg" alt="05" />
                                                        </div>
                                                        <div className="media-body ml-3 rtl-mr-3 rtl-ml-0">
                                                            <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                            <small className="float-left font-size-12">1 day ago</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div> */}
                                                {/* <Link to={"/notification_history"} className="right-ic btn btn-primary btn-block position-relative p-2"
                                                 role="button">
                                                <div className="dd-icon"><i className="las la-arrow-right mr-0"></i></div>
                                                View All
                                            </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='nav-item nav-icon dropdown'>
                                    <div
                                        className='iq-sub-dropdown dropdown-menu'
                                        aria-labelledby='dropdownMenuButton'
                                    >
                                        <div className='card shadow-none m-0'>
                                            <div className='card-body p-0 '>
                                                <div className='cust-title p-3'>
                                                    <h5 className='mb-0'>All Notifications</h5>
                                                </div>
                                                {/* <div className="p-3">
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded-small"
                                                                src="assets/images/user/01.jpg" alt="01" />
                                                        </div>
                                                        <div className="media-body ml-3 rtl-ml-0 rtl-mr-3">
                                                            <h6 className="mb-0">Emma Watson Barry <small
                                                                className="badge badge-success float-right rtl-mr-1">New</small>
                                                            </h6>
                                                            <p className="mb-0">95 MB</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded-small"
                                                                src="assets/images/user/02.jpg" alt="02" />
                                                        </div>
                                                        <div className="media-body ml-3 rtl-mr-3 rtl-ml-0">
                                                            <h6 className="mb-0 ">New customer is join</h6>
                                                            <p className="mb-0 ">Cyst Barry</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded-small"
                                                                src="assets/images/user/03.jpg" alt="03" />
                                                        </div>
                                                        <div className="media-body ml-3 rtl-ml-0 rtl-mr-3">
                                                            <h6 className="mb-0 ">Two customer is left</h6>
                                                            <p className="mb-0">Cyst Barry</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded-small"
                                                                src="assets/images/user/04.jpg" alt="04" />
                                                        </div>
                                                        <div className="media-body ml-3 rtl-mr-3 rtl-ml-0">
                                                            <h6 className="mb-0 ">New Mail from Fenny <small
                                                                className="badge badge-success float-right">New</small>
                                                            </h6>
                                                            <p className="mb-0">Cyst Barry</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div> */}
                                                {/* <Link to={"/notification_history"} className="right-ic btn btn-primary btn-block position-relative p-2"
                                                role="button">
                                                <div className="dd-icon"><i className="las la-arrow-right mr-0"></i></div>
                                                View All
                                            </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className='caption-content topnav_div'>
                                    <a href='#' className='iq-user-toggle topnav_div'>
                                        <div className='topnav_div_flex'>
                                            <DiCoda className='topnav_icon' />
                                            <h4 className='topnav_h1'>Profile</h4>
                                        </div>
                                    </a>
                                    <div className='iq-user-dropdown'>
                                        <div className='card'>
                                            <div className='card-header d-flex justify-content-between align-items-center mb-0'>
                                                <div className='header-title'>
                                                    <h4 className='card-title mb-0'>Profile</h4>
                                                </div>
                                                <div className='close-data text-right badge badge-primary cursor-pointer'>
                                                    <i className='ri-close-fill'></i>
                                                </div>
                                            </div>
                                            <div className='data-scrollbar' data-scroll='2'>
                                                <div className='card-body'>
                                                    <div className='profile-header'>
                                                        <div className='cover-container '>
                                                            <div className='media align-items-center mb-4'>
                                                                <div className='media-body profile-detail ml-3 rtl-mr-3 rtl-ml-0'>
                                                                    <h3>Super 4 Admin Dashboard</h3>
                                                                    {/* <div className="d-flex flex-wrap">
                                                                        <a
                                                                            href="/login"
                                                                            className="topnav_logout">Log Out</a>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-md-6  col-6 pr-0'>
                                                                <div className='profile-details text-center'>
                                                                    <a
                                                                        href='#'
                                                                        className='iq-sub-card bg-primary-light rounded-small p-2'
                                                                    >
                                                                        <div className='rounded iq-card-icon-small'>
                                                                            <i className='ri-file-user-line'></i>
                                                                        </div>
                                                                        <h6 className='mb-0 '>
                                                                            My Profile
                                                                        </h6>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-6  col-md-6 col-6'>
                                                                <div className='profile-details text-center'>
                                                                    <a
                                                                        href='#'
                                                                        className='iq-sub-card bg-danger-light rounded-small p-2'
                                                                    >
                                                                        <div className='rounded iq-card-icon-small'>
                                                                            <i className='ri-profile-line'></i>
                                                                        </div>
                                                                        <h6 className='mb-0 '>
                                                                            Edit Profile
                                                                        </h6>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-6 col-md-6  col-6 pr-0'>
                                                                <div className='profile-details text-center'>
                                                                    <a
                                                                        href='#'
                                                                        className='iq-sub-card bg-success-light rounded-small p-2'
                                                                    >
                                                                        <div className='rounded iq-card-icon-small'>
                                                                            <i className='ri-account-box-line'></i>
                                                                        </div>
                                                                        <h6 className='mb-0 '>
                                                                            Account
                                                                        </h6>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-6 col-md-6  col-6'>
                                                                <div className='profile-details text-center'>
                                                                    <a
                                                                        href='#'
                                                                        className='iq-sub-card bg-info-light rounded-small p-2'
                                                                    >
                                                                        <div className='rounded iq-card-icon-small'>
                                                                            <i className='ri-lock-line'></i>
                                                                        </div>
                                                                        <h6 className='mb-0 '>
                                                                            Settings
                                                                        </h6>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex flex-wrap'>
                                                                <a
                                                                    href='/login'
                                                                    className='topnav_logout'
                                                                >
                                                                    Log Out
                                                                </a>
                                                            </div>
                                                        </div>
                                                        {/* <div className="personal-details">
                                                        <h5 className="card-title mb-3 mt-3">Personal Details</h5>
                                                        <div className="row align-items-center mb-2">
                                                            <div className="col-sm-6">
                                                                <h6>Birthday</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="mb-0">3rd March</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center mb-2">
                                                            <div className="col-sm-6">
                                                                <h6>Address</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="mb-0">Landon</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center mb-2">
                                                            <div className="col-sm-6">
                                                                <h6>Phone</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="mb-0">(010)987 543 201</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center mb-2">
                                                            <div className="col-sm-6">
                                                                <h6>Email</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="mb-0">Barry@example.com</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center mb-2">
                                                            <div className="col-sm-6">
                                                                <h6>Twitter</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="mb-0">Barry</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center mb-2">
                                                            <div className="col-sm-6">
                                                                <h6>Facebook</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="mb-0">Barry_Tech</p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    </div>
                                                    <div className='p-3'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default TopbarView;
