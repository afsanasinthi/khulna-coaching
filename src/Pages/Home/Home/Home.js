import React from 'react';
import Header from '../../Shared/Header/Header';
import NavBar from '../../Shared/Navigation/NavBar';
import Footer from '../../Shared/footer/Footer';
import Category from '../Category/Category';
import About from '../About/About';
import Apply from '../Apply/Apply';
import Course from '../Course/Course';
import BookSrevices from '../BookServices/BookSrevices';
import Contact from '../Contact/Contact';
import Msg from '../Msg/Msg';





const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Category></Category>
            <About></About>
            <BookSrevices></BookSrevices>
            <Course></Course>
            <Contact></Contact>
            <Msg></Msg>
            <Footer></Footer>
        </div>
    );
};

export default Home;