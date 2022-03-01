import React from 'react';


const SingleCourse = (props) => {

    const { Title, Author, imgCourse, imgTeacher } = props.coure;
    return (
        <div className="col-lg-4">
            <div className="singel-course">
                <div className="thum">
                    <div className="image">
                        <img src={imgCourse} alt="Course" />
                    </div>
                    <div className="price">
                        <span>TK 100</span>
                    </div>
                </div>
                <div className="cont">
                    {/* <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul> */}
                    {/* <span>(20 Reviws)</span> */}
                    <a href="courses-singel.html"><h4>{Title}</h4></a>
                    <div className="course-teacher">
                        <div className="thum">
                            <a href="#!"><img src={imgTeacher} alt="teacher" /></a>
                        </div>
                        <div className="name">
                            <a href="#!"><h6>{Author}</h6></a>
                        </div>
                        {/* <div className="admin">
                            <ul>
                                <li><a href="#!"><i className="fa fa-user"></i><span>31</span></a></li>
                                <li><a href="#!"><i className="fa fa-heart"></i><span>10</span></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;