import React from 'react';
// import Map from '../Location/Location';
import Location from '../Location/Location';

const Contact = () => {
    return (
        <div>
            <section id="contact-page" className="pt-2 pb-10 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="contact-from mt-30">
                                <div className="section-title">
                                    <h5>আমাদের সাথে যোগাযোগ</h5>
                                    <h3>যেকোনো প্রয়োজনে, আপনাদের পাশে fixx </h3>
                                </div>
                                <div className="main-form pt-45">
                                    <form id="contact-form" action="#" method="post" data-toggle="validator">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="singel-form form-group">
                                                    <input name="name" type="text" placeholder="আপনার নাম" data-error="Name is required." required="required" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="singel-form form-group">
                                                    <input name="email" type="email" placeholder="ইমেইল" data-error="Valid email is required." required="required" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="singel-form form-group">
                                                    <input name="subject" type="text" placeholder="বিষয়" data-error="Subject is required." required="required" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="singel-form form-group">
                                                    <input name="phone" type="text" placeholder="মোবাইল নাম্বার" data-error="Phone is required." required="required" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="singel-form form-group">
                                                    <textarea name="messege" placeholder="বিস্তারিত" data-error="Please,leave us a message." required="required"></textarea>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <p className="form-message"></p>
                                            <div className="col-md-12">
                                                <div className="singel-form">
                                                    <button type="submit" className="main-btn">পাঠান</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-address mt-30">
                                <ul>
                                    <li>
                                        <div className="singel-address">
                                            <div className="icon">
                                                <i className="fa fa-home"></i>
                                            </div>
                                            <div className="cont">
                                                <p>143 ঠিকানা, ঠিকানা ঠিকানা ঠিকানা</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="singel-address">
                                            <div className="icon">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="cont">
                                                <p>০১২৩৪৫৬৭৮৯</p>
                                                <p>০১২৩৪৫৬৭৮৯</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="singel-address">
                                            <div className="icon">
                                                <i className="fa fa-envelope-o"></i>
                                            </div>
                                            <div className="cont">
                                                <p>info@yourmail.com</p>
                                                <p>info@yourmail.com</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="map mt-30">
                                {/* <div id="contact-map"></div> */}
                                <Location></Location>
                                {/* <Map zoomLevel={17}></Map> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;