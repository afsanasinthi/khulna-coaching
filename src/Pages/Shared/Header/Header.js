import React from 'react';
import Preloader from '../Preloader/Preloader';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* <!--====== SLIDER PART START ======--> */}
            {/* <Preloader></Preloader> */}
            <section id="slider-part" className="slider-active">
                <div className="single-slider bg_cover pt-150" style={{ backgroundImage: 'url(images/slider/s-1.jpg)' }} data-overlay="4">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-9">
                                <div className="slider-cont">
                                    <h1 data-animation="bounceInLeft" data-delay="1s">শিরোনাম কথা এক</h1>
                                    <p data-animation="fadeInUp" data-delay="1.3s">আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে একে বাংলা উইকিপিডিয়া।</p>
                                    <ul>
                                        <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#!">আরও পড়ুন</a></li>
                                        <li><Link data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" to="/login">সাইন ইন</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-slider bg_cover pt-150" style={{ backgroundImage: 'url(images/slider/s-2.jpg)' }} data-overlay="4">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-9">
                                <div className="slider-cont">
                                    <h1 data-animation="bounceInLeft" data-delay="1s">শিরোনাম কথা 2</h1>
                                    <p data-animation="fadeInUp" data-delay="1.3s">আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে একে বাংলা উইকিপিডিয়া।</p>
                                    <ul>
                                        <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#!">আরও পড়ুন</a></li>
                                        <li><Link data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" to="/login">সাইন ইন</Link></li>
                                        {/* <Link to="/login" className="main-btn">সাইন ইন</Link> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-slider bg_cover pt-150" style={{ backgroundImage: 'url(images/slider/s-3.jpg)' }} data-overlay="4">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-9">
                                <div className="slider-cont">
                                    <h1 data-animation="bounceInLeft" data-delay="1s">শিরোনাম কথা এক 3</h1>
                                    <p data-animation="fadeInUp" data-delay="1.3s">আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে একে বাংলা উইকিপিডিয়া।</p>
                                    <ul>
                                        <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#!">আরও পড়ুন</a></li>
                                        <li><Link data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" to="/login">সাইন ইন</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== SLIDER PART ENDS ======--> */}
        </div>
    );
};

export default Header;