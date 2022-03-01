import React from 'react';

const footer = () => {
    return (
        <div>
            {/* <!--====== FOOTER PART START ======--> */}

            <footer id="footer-part">
                <div className="footer-top pt-40 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-about mt-40">
                                    <div className="logo">
                                        <a href="#!"><img className='img-fluid' width={150} src="images/logo1-01-01.png" alt="Logo" /></a>
                                    </div>
                                    <p>আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে একে বাংলা উইকিপিডিয়া</p>
                                    <ul className="mt-20">
                                        <li><a href="https://www.facebook.com/kdc2018.official/"><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCN4CsaDQnEPZZ7XBYv8aHdw"><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-link support mt-40">
                                    <div className="footer-title pb-25">
                                        <h6>সাইটম্যাপ</h6>
                                    </div>
                                    <ul>
                                        <li><a href="/"><i className="fa fa-angle-right"></i>মূল পাতা</a></li>
                                        <li><a href="/aboutexternal"><i className="fa fa-angle-right"></i>আমাদের সম্পর্কে</a></li>
                                        <li><a href="/quiz"><i className="fa fa-angle-right"></i>গ্যালারি</a></li>
                                        <li><a href="/"><i className="fa fa-angle-right"></i>বইসমূহ</a></li>
                                        <li><a href="events.html"><i className="fa fa-angle-right"></i>যোগাযোগ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-link support mt-40">
                                    <div className="footer-title pb-25">
                                        <h6>সাহায্য</h6>
                                    </div>
                                    <ul>
                                        <li><a href="#!"><i className="fa fa-angle-right"></i>প্রশ্নের উত্তর</a></li>
                                        <li><a href="#!"><i className="fa fa-angle-right"></i>গোপনীয়তা</a></li>
                                        <li><a href="#!"><i className="fa fa-angle-right"></i>নীতি</a></li>
                                        <li><a href="#!"><i className="fa fa-angle-right"></i>সাহায্য</a></li>
                                        <li><a href="#!"><i className="fa fa-angle-right"></i>ডকুমেন্টেশন</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-address mt-40">
                                    <div className="footer-title pb-25">
                                        <h6>যোগাযোগ করুন</h6>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-home"></i>
                                            </div>
                                            <div className="cont">
                                                <p>২৯/১, শেরে-বাংলা রোড (ময়লাপোতা মোড়, শাপলা ক্লিনিকের পাশে), খুলনা।</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="cont">
                                                <p>+3 123 456 789</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-envelope-o"></i>
                                            </div>
                                            <div className="cont">
                                                <p>info@yourmail.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright pt-10 pb-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="copyright text-md-left text-center pt-15">
                                    <p>Developed by ZEN IT @ 2022</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="copyright text-md-right text-center pt-15">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!--====== FOOTER PART ENDS ======-->

            <!--====== BACK TO TP PART START ======--> */}

            <a href="#!" className="back-to-top"><i className="fa fa-angle-up"></i></a>

            {/* <!--====== BACK TO TP PART ENDS ======--> */}
        </div>
    );
};

export default footer;