import React from 'react';
import BookService from '../BookService/BookService';
import p1 from '../../images/publication/p-1.jpg';
import p2 from '../../images/publication/p-2.jpg';
import p3 from '../../images/publication/p-3.jpg';
import p4 from '../../images/publication/p-4.jpg';

const bookservices = [
    {
        Name: 'বইয়ের নাম',
        Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ipsa?',
        Author: 'লেখকের নাম',
        img: p1,
        price: 100
    },
    {
        Name: 'বইয়ের নাম1',
        Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ipsa?',
        Author: 'লেখকের নাম',
        img: p2,
        price: 150
    },
    {
        Name: 'বইয়ের নাম2',
        Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ipsa?',
        Author: 'লেখকের নাম',
        img: p3,
        price: 160
    },
    {
        Name: 'বইয়ের নাম3',
        Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ipsa?',
        Author: 'লেখকের নাম',
        img: p4,
        price: 180
    }
]

const BookSrevices = () => {
    return (

        <div id="publication-part" className="pt-80 pb-50 gray-bg">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 col-md-8 col-sm-7">
                        <div className="section-title pb-60">
                            <h5>প্রকাশনা</h5>
                            <h2>শেখার জন্য বই</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-5">
                        <div className="products-btn text-right pb-60">
                            <a href="#!" className="main-btn">সব পণ্য</a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        bookservices.map(bookservice => <BookService
                            key={bookservice.Name}
                            bookservice={bookservice}>
                        </BookService>)
                    }
                </div>
            </div>
        </div>


    );
};

export default BookSrevices;