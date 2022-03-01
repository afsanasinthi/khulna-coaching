import React from 'react';

const BookService = (props) => {
    const { Name, Author, img, price } = props.bookservice;
    return (


        <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
                <div className="image">
                    <img src={img} alt="Publication" />
                    <div className="add-cart">
                        <ul>
                            <li><a href="#!"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="cont">
                    <div className="name">
                        <a href="shop-singel.html"><h6>{Name} </h6></a>
                        <span>{Author}</span>
                    </div>
                    <div className="button text-right">
                        <a href="#!" className="main-btn">কিনুন ({price} TK)</a>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default BookService;