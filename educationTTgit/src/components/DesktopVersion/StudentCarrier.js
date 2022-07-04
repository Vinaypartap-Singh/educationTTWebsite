import React from "react";

const StudentCarrier = () => {
  return (
    <div>
      <div className="student_carrier_section">
        <div className="student_image">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            className="image_stu"
          />
        </div>
        <div className="student_info_section">
          <h1 className="main_heaing_stu">What our <span style={{color:"#b06464"}}>Students</span> Saying</h1>
          <h5 className="stu_feedback">
            Finally, positive feedback that encourages students to access their
            prior understanding and knowledge is vital in moving learned
            knowledge to Recognizing the student's effort even though they
            missed the concept of an assignment. Pointing out exactly where the
            problem is in a student's work, while encouraging them to not give
            up.
          </h5>
          <h6 className="student_name">Varun Kailsy</h6>
          <p className="student_role">Web Developer / Student</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCarrier;
