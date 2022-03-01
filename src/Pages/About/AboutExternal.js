import React from 'react';

import NavBar from '../Shared/Navigation/NavBar';
import Footer from '../Shared/footer/Footer';
import Banner from '../Shared/Banner/Banner';
// import Preloader from '../Shared/Preloader/Preloader';

const AboutExternal = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            {/* <Preloader></Preloader> */}
            {/* <!--====== ABOUT PART START ======--> */}

            <section id="about-page" className="pt-70 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title mt-50">
                                <h5>About us</h5>
                                <h2>Welcome to Edubin sinthia kabir</h2>
                            </div>
                            <div className="about-cont">
                                <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris. <br /> auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-image mt-50">
                                <img src="images/about/about-2.jpg" alt="About" />
                            </div>
                        </div>
                    </div>
                    <div className="about-items pt-60">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="about-singel-items mt-30">
                                    <span>01</span>
                                    <h4>Why Choose us</h4>
                                    <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit sollicitudirem quibibendum auci</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="about-singel-items mt-30">
                                    <span>02</span>
                                    <h4>Our Mission</h4>
                                    <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit sollicitudirem quibibendum auci</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="about-singel-items mt-30">
                                    <span>03</span>
                                    <h4>Our vission</h4>
                                    <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit sollicitudirem quibibendum auci</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== ABOUT PART ENDS ======-->

            <!--====== COUNTER PART START ======--> */}

            <div id="counter-part" className="bg_cover pt-65 pb-110" data-overlay="8" style={{ backgroundImage: 'url(images/bg-2.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-counter text-center mt-40">
                                <span><span className="counter">30,000</span>+</span>
                                <p>Students enrolled</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-counter text-center mt-40">
                                <span><span className="counter">41,000</span>+</span>
                                <p>Courses Uploaded</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-counter text-center mt-40">
                                <span><span className="counter">11,000</span>+</span>
                                <p>People certifie</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-counter text-center mt-40">
                                <span><span className="counter">39,000</span>+</span>
                                <p>Global Teachers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--====== COUNTER PART ENDS ======-->

            <!--====== TEACHERS PART START ======--> */}

            <section id="teachers-part" className="pt-65 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title mt-50 pb-35">
                                <h5>Featured Teachers</h5>
                                <h2>Meet Our teachers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img src="images/teachers/t-1.jpg" alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <a href="teachers-singel.html"><h6>Mark alen</h6></a>
                                    <span>Vice chencelor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img src="images/teachers/t-2.jpg" alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <a href="teachers-singel.html"><h6>Mark alen</h6></a>
                                    <span>Vice chencelor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img src="images/teachers/t-3.jpg" alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <a href="teachers-singel.html"><h6>Mark alen</h6></a>
                                    <span>Vice chencelor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img src="images/teachers/t-4.jpg" alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <a href="teachers-singel.html"><h6>Mark alen</h6></a>
                                    <span>Vice chencelor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img src="images/teachers/t-5.jpg" alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <a href="teachers-singel.html"><h6>Mark alen</h6></a>
                                    <span>Vice chencelor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img src="images/teachers/t-6.jpg" alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <a href="teachers-singel.html"><h6>Mark alen</h6></a>
                                    <span>Vice chencelor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img src="images/teachers/t-7.jpg" alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <a href="teachers-singel.html"><h6>Mark alen</h6></a>
                                    <span>Vice chencelor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img src="images/teachers/t-8.jpg" alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <a href="teachers-singel.html"><h6>Mark alen</h6></a>
                                    <span>Vice chencelor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== TEACHERS PART ENDS ======-->

            <!--====== TEASTIMONIAL PART START ======--> */}

            <section id="testimonial" className="bg_cover pt-115 pb-120" data-overlay="8" style={{ backgroundImage: 'url(images/bg-2.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title pb-40">
                                <h5>Testimonial</h5>
                                <h2>What they say</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row testimonial-slied mt-40">
                        <div className="col-lg-6">
                            <div className="singel-testimonial">
                                <div className="testimonial-thum">
                                    <img src="images/testimonial/t-1.jpg" alt="Testimonial" />
                                    <div className="quote">
                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                                <div className="testimonial-cont">
                                    <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                                    <h6>Rubina Helen</h6>
                                    <span>Bsc, Engineering</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="singel-testimonial">
                                <div className="testimonial-thum">
                                    <img src="images/testimonial/t-2.jpg" alt="Testimonial" />
                                    <div className="quote">
                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                                <div className="testimonial-cont">
                                    <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                                    <h6>Rubina Helen</h6>
                                    <span>Bsc, Engineering</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="singel-testimonial">
                                <div className="testimonial-thum">
                                    <img src="images/testimonial/t-3.jpg" alt="Testimonial" />
                                    <div className="quote">
                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                                <div className="testimonial-cont">
                                    <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                                    <h6>Rubina Helen</h6>
                                    <span>Bsc, Engineering</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== TEASTIMONIAL PART ENDS ======-->

            <!--====== PATNAR LOGO PART START ======--> */}

            <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
                <div className="container">
                    <div className="row patnar-slied">
                        <div className="col-lg-12">
                            <div className="singel-patnar text-center mt-40">
                                <img src="images/patnar-logo/p-1.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="singel-patnar text-center mt-40">
                                <img src="images/patnar-logo/p-2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="singel-patnar text-center mt-40">
                                <img src="images/patnar-logo/p-3.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="singel-patnar text-center mt-40">
                                <img src="images/patnar-logo/p-4.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="singel-patnar text-center mt-40">
                                <img src="images/patnar-logo/p-2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="singel-patnar text-center mt-40">
                                <img src="images/patnar-logo/p-3.png" alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--====== PATNAR LOGO PART ENDS ======--> */}

            <Footer></Footer>
        </div>
    );
};

export default AboutExternal;