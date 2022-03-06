import React from 'react';
import { Link } from 'react-router-dom';
const navBar = () => {
    return (

        <div>

            <div id="header-part">

                <div className="header-top d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="header-contact text-lg-left text-center">
                                    <ul>
                                        <li><img src="images/all-icon/map.png" alt="icon" /><span>127/5 ঠিকানা, ঠিকানা</span></li>
                                        <li><img src="images/all-icon/email.png" alt="icon" /><span>info@yourmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="header-opening-time text-lg-right text-center">
                                    <p className="fw-bold">Khulna Defence Coaching | Come . Learn . Conquer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-logo-support pt-15 pb-15">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-2 col-md-2">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="images/logo1-01-01.png" width={100} alt="Logo" />
                                    </Link>

                                </div>

                            </div>
                            <div className="col-lg-5 col-md-5">
                                <p className='text-left textLogo mobile-display'>Khulna Defence Coaching</p>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <div className="support-button float-right d-none d-md-block">
                                    <div className="support float-left">
                                        <div className="icon">
                                            <img src="images/all-icon/support.png" alt="icon" />
                                        </div>
                                        <div className="cont">
                                            <p>সাহায্য দরকার? আমাদের কল করুন</p>
                                            <span>321 325 5678</span>
                                        </div>
                                    </div>
                                    {/* <div className="button float-left">
                                        <Link to="/login" className="main-btn">সাইন ইন</Link>
                                    </div> */}
                                    <div className="button float-left">
                                        <Link to="/registration" className="main-btn">নিবন্ধন </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-sm-9 col-8">
                                <nav className="navbar navbar-expand-lg">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>

                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item">
                                                <Link className="active" to="/">মূল পাতা</Link>
                                                {/* <ul className="sub-menu">
                                                    <li><Link className="active" to ="/">Home 01</Link></li>
                                                    <li><Link to ="index-3">Home 02</Link></li>
                                                    <li><Link to ="index-4">Home 03</Link></li>
                                                </ul> */}
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/about">
                                                    আমাদের সম্পর্কে</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="courses">কোর্স গুলি</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/gallery">গ্যালারি</Link>

                                            </li>
                                            <li className="nav-item">
                                                <Link to="/books">আমাদের বইসমূহ
                                                </Link>

                                            </li>
                                            <li className="nav-item">
                                                <Link to="/quiz">অনলাইন টেস্ট
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/contact">যোগাযোগ</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

                            <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                                <div className="right-icon text-right">
                                    <ul>
                                        <li><Link to="#!" id="search"><i className="fa fa-search"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-box">
                <div className="serach-form">
                    <div className="closebtn">
                        <span></span>
                        <span></span>
                    </div>
                    <form action="#">
                        <input type="text" placeholder="Search by keyword" />
                        <button><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default navBar;