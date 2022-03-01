import React from 'react';
// import aboutBg from '../../images/about/bg-1.png';
// import aboutBg2 from '../../images/about/bg-2.png';
import aboutBg2 from '../../images/about/bg-3.png';
import Notices from '../Noices/Notices';


const notices = [
    {
        Ttile: 'বাংলাদেশ নৌবাহিনী বেসামরিক চাকরির বিজ্ঞপ্তি 2022',
        Description: 'আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক যুগান্তকারী বাংলা?',
        Date: '24 ফেব্রুয়ারি, 2022',
        links: 'https://bdgovtjobs.com/category/defence-job/'
    },
    {
        Ttile: 'বাংলাদেশ নৌবাহিনী বেসামরিক চাকরির বিজ্ঞপ্তি 2022',
        Description: 'আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক যুগান্তকারী বাংলা?',
        Date: '24 ফেব্রুয়ারি, 2022',
        links: 'https://bdgovtjobs.com/category/defence-job/'
    },
    {
        Ttile: 'বাংলাদেশ নৌবাহিনী বেসামরিক চাকরির বিজ্ঞপ্তি 2022',
        Description: 'আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক যুগান্তকারী বাংলা?',
        Date: '24 ফেব্রুয়ারি, 2022',
        links: 'https://bdgovtjobs.com/category/defence-job/'
    }

]
const About = () => {
    return (
        <div>
            {/* <!--====== ABOUT PART START ======--> */}

            <section id="about-part" className="pt-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title mt-50">
                                <h5>আমাদের সম্পর্কে</h5>
                                <h2>
                                    খুলনা ডিফেন্স কোচিং এ স্বাগতম </h2>
                            </div>
                            <div className="about-cont">
                                <p>আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে একে বাংলা উইকিপিডিয়া, ওয়ার্ডপ্রেস বাংলা কোডেক্সসহ বিভিন্ন বাংলা অনলাইন পত্রিকা তৈরির কাজ করতে করতে বাংলার সাথে নিজেকে বেঁধে নিয়েছি আষ্টেপৃষ্ঠে। বিশেষ করে অনলাইন পত্রিকা তৈরি করতে ডিযাইন করার সময়, সেই ডিযাইনকে কোডে রূপান্তর করবার সময় বারবার অনুভব করেছি কিছু নমুনা লেখার। </p>
                                <a href="#!" className="main-btn mt-55">আরও জানুন</a>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-event mt-50">
                                <div className="event-title">
                                    <h3>নোটিশ</h3>
                                    <p className='green fw-bold'>গুরুত্বপূর্ন তারিখগুলো</p>
                                </div>

                                {
                                    notices.map(notice => <Notices
                                        key={notice.Ttile}
                                        notice={notice}>
                                    </Notices>)
                                }


                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-bg">
                    <img src={aboutBg2} alt="About" />
                </div>
            </section>

            {/* <!--====== ABOUT PART ENDS ======--> */}
        </div>
    );
};

export default About;