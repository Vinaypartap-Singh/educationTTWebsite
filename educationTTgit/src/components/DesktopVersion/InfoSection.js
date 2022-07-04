import React from "react";

const InfoSection = () => {

    let learningBenefit = [
        {
            benTitle:"Schedule Learning",
            benContent:"Image result for what is schedule learning These four schedules of reinforcement are sometimes referred to as FR, VR, FI, and VI—which stands for fixed-ratio, variable-ratio,"
        }, {
            benTitle:"Expert Instructions",
            benContent:" By definition, an expert is someone who – by reason of his/her education, training, skill or experience – has specialist knowledge of a particular field or discipline beyond that of a layman."
        }, {
            benTitle:"Scholarship",
            benContent:"Students do not have to repay grants or scholarships, which are considered gift aid. Grants are typically awarded by the federal government, states or colleges and are usually based on financial need."
        }, {
            benTitle:"Recorded Sessions",
            benContent:"Image result for what is recorded session Microphones capture sound as it travels through the air, turn it into electrical energy, and then amplify, modify, enhance and record."
        }, {
            benTitle:"Practical Learning",
            benContent:"Practical Learning is achieved through doing things and is based on real-life undertakings and tasks. If we take cooking as an example, instead of learning about cooking through books and blogs, "
        }
    ]


  return (
    <div>
      <div class="info_section_main">
        <div class="heading_side">
          <h1>
            Why Choose <br />
          </h1>
          <button class="info_learning_btn">E-learning</button>
        </div>

        {learningBenefit.map((data)=>{
            return <div class="feature_Card">
            <h1 class="feature_title">{data.benTitle}</h1>
            <p class="feature_desc">
              "{data.benContent}"
            </p>
          </div>
        })}

        
      </div>
    </div>
  );
};

export default InfoSection;
