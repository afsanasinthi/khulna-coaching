import React from 'react';
import NavBar from '../Shared/Navigation/NavBar';
import Footer from '../Shared/footer/Footer';
import Apply from '../Home/Apply/Apply';
// import { BrowserRouter } from 'react-router-dom';
// import Home from '../Home/Home/Home';
import {HashLink as Link} from "react-router-hash-link";
import { Container, Row, Col } from 'react-bootstrap';

const Quiz = () => {
    return (

        <div>
            <NavBar></NavBar>
            <Container>
            <h1>অনলাইন টেস্ট ড্যাশবোর্ড</h1>
            <Link to ='#apply' smooth>Exam rules</Link>
            <div className='border'>
                <h3>set-1</h3>
                <Row className='gap-1'>
                    <Col className='btn btn-info' sm>sm=8</Col>
                    <Col className='btn btn-info' sm>sm=4</Col>
                    <Col className='btn btn-info' sm>sm=4</Col>
                    <Col className='btn btn-info' sm>sm=4</Col>
                </Row>
                <Row className='gap-1'>
                    <Col className='btn btn-info' sm>sm=true</Col>
                    <Col className='btn btn-info' sm>sm=true</Col>
                    <Col className='btn btn-info' sm>sm=true</Col>
                    <Col className='btn btn-info' sm>sm=true</Col>
                </Row>
            </div>            
            <Apply></Apply>
            </Container>
            <Footer></Footer>
        </div>

    );
};

export default Quiz;