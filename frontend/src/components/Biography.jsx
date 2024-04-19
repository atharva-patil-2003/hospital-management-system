import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p> Our Mission</p>
          <p>

            At CareConnect is to empower healthcare providers and patients alike by bridging the gap between technology and healthcare delivery. We strive to streamline processes, improve communication, and ultimately enhance patient care outcomes.
          </p>
          <p>Our Vision</p>
          <p>

            We envision a future where healthcare is seamlessly integrated with technology, making it more accessible, affordable, and personalized for everyone. Through continuous innovation and collaboration, we aim to be at the forefront of this transformation.

          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
