import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (

        <div id="category-part">
            <div className="container">
                <div className="category pt-30 pb-50 shadow">
                    <div className="row  d-flex align-items-center">
                        <div className="col-lg-4">
                            <div className="category-text pt-10 text-left">
                                <h2>সেনা, নৌ, বিমান বাহিনীতে অফিসার পদে আবেদনের জন্য </h2>
                            </div>
                        </div>
                        <div className="container col-lg-6 col-md-8 col-sm-8 col-8">

                            <div className="row mt-10 gap-3">
                                <Link to="/" className="col-sm-6 green yellow-bg p-3 rounded-3 btn fw-bold category-btn">আবেদন নির্দেশিকা</Link>
                                <Link to="/" className="col-sm-5 green yellow-bg p-3 rounded-3 btn fw-bold category-btn">আবেদন যোগ্যতা</Link>
                            </div>
                            <div className="row mt-10 gap-2">
                                <Link to="/" className="col-sm-3 green yellow-bg p-3 rounded-3 btn fw-bold category-btn">পরীক্ষা পদ্ধতি</Link>
                                <Link to="/" className="col-sm-5 green yellow-bg p-3 rounded-3 btn fw-bold category-btn">বহুল জিজ্ঞাসিত প্রশ্নের উত্তর</Link>
                                <Link to="/" className="col-sm-3 green yellow-bg p-3 rounded-3 btn fw-bold category-btn">টেস্ট</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Category;