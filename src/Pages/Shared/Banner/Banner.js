import React from 'react';

const Banner = () => {
    return (
        <div>
            <section id="page-banner" class="pt-105 pb-110 bg_cover" data-overlay="8" style={{ backgroundImage: 'url(images/page-banner-1.jpg)' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="page-banner-cont">
                                <h2>About Us</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#!">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;