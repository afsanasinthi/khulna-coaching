import React from 'react';
// import { Link } from 'react-router-dom';


const Notices = (props) => {
    const { Ttile, Description, Date, links } = props.notice;
    return (
        <div className='about-notice'>
            <ul>
                <li>
                    <div className="singel-event border-bottom">
                        <a href={links} target="_blank"><h4>{Ttile}</h4></a>
                        <span><i className="fa fa-calendar"></i> {Date}</span>
                        {/* <span>{Description}</span> */}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Notices;