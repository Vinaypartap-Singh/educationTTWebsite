import React from "react";
import { BsFillEyeFill } from "react-icons/bs";

import {BiCommentDetail} from "react-icons/bi"

const Courses = () => {

    let coursesData = [
        {
            name:"Web Development",
            price:500,
            review:49,
            comments:40,
            image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        }, {
            name:"Android Development",
            price:699,
            review:50,
            comments:45,
            image:"https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9pZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        }, {
            name:"ios Development",
            price:899,
            review:60,
            comments:55,
            image:"https://images.unsplash.com/photo-1634618774956-36f5b1618be7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        }, {
            name:"Graphic Designing",
            price:550,
            review:50,
            comments:40,
            image:"https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGRlc2lnbmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        }, {
            name:"WordPress",
            price:750,
            review:70,
            comments:66,
            image:"https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29yZHByZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        }, {
            name:"Business",
            price:799,
            review:86,
            comments:80,
            image:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        }
    ]

  return (
    <div>
      <div className="course_section">
        <div className="course_heading_section">
          <h1 className="heading_course">Latest Courses</h1>
        </div>

        <div className="feature_courses_section">

            {coursesData.map((data)=>{
                return <div className="course_card" onClick={()=>{
                    alert(`Thanks for looking ${data.name}. We will notify when the course arrive`)
                }}>
                <div className="card_image">
                  <img
                    src={data.image}
                    className="image_course"
                  />
                  <h4 className="course_name">{data.name}</h4>
                  <div className="course_view">
                    <div className="author_course">
                      <p className="course_review">
                        <BsFillEyeFill className="icon_course_view" />
                        {data.review}k
                      </p>
                      <p className="course_comments">
                        <BiCommentDetail className="icon_course_comment"/>{data.comments}
                      </p>
                    </div>
                    <p className="course_price">₹{data.price}</p>
                  </div>
                </div>
              </div>
            })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
