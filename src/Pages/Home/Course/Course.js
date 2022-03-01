import React from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import c1 from '../../images/course/cu-1.jpg';
import t1 from '../../images/course/teacher/t-1.jpg';
const coures = [
    {
        Title: 'বইয়ের নাম',
        Author: 'লেখকের নাম',
        imgCourse: c1,
        imgTeacher: t1,
    },
    {
        Title: 'বইয়ের নাম',
        Author: 'লেখকের নাম',
        imgCourse: c1,
        imgTeacher: t1,
    },
    {
        Title: 'বইয়ের নাম',
        Author: 'লেখকের নাম',
        imgCourse: c1,
        imgTeacher: t1,
    },
    {
        Title: 'বইয়ের নাম',
        Author: 'লেখকের নাম',
        imgCourse: c1,
        imgTeacher: t1,
    },
    {
        Title: 'বইয়ের নাম',
        Author: 'লেখকের নাম',
        imgCourse: c1,
        imgTeacher: t1,
    }

]


const Course = () => {
    return (
        <div>
            {/* <!--====== COURSE PART START ======--> */}

            <section id="course-part" className="pt-115 pb-120 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title pb-45">
                                <h5>আমাদের কোর্স</h5>
                                <h2>কোর্স গুলি </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row course-slied mt-30">
                        {
                            coures.map(coure => <SingleCourse
                                key={coure.Title}
                                coure={coure}>
                            </SingleCourse>)
                        }
                    </div>
                </div>
            </section>

            {/* <!--====== COURSE PART ENDS ======--> */}
        </div>
    );
};

export default Course;