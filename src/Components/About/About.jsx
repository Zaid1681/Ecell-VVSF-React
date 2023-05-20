import React from "react";
import "./About.css";
import whatEcell from "../../assets/about/e_cell.png";
import whatVvsf from "../../assets/Vectors/2.png";
import VVSF_WORD from "../../assets/vvsf_word.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className=" text-center section-padding">
        <h1 className="main-title-font" style={{ color: "#fff" }}>
          About Us
        </h1>
        <hr
          className="m-auto line-padding"
          style={{ backgroundColor: "#ECF7FF" }}
        />
      </div>
      <div className="aboutContents">
        {/* <AboutContent header="What is Ecell ?" content="It is a student-run and faculty-led group that works to develop the skills of aspiring engineers. It began in 2015 and now has an impressive 100+ students from different V.C.E.T. branches participating. Students participate in a wide range of activities to develop their entrepreneurial mindset,  business modelling skills and many more through various types of seminars, workshops, presentations, and prototype development of concepts." />
                <ReverseAboutContent header="What is VVSF ?"content="It is a one-stop solution for budding entrepreneurs. Here we gather the best startups, founders, investors, and mentors. A two-day event will feature a variety of events, including talks, pitches, exhibitions, and more. We want to foster an entrepreneurial culture throughout the entire district. This is a fantastic chance for individuals to establish a network for greatly expanding their enterprises. " /> */}
        <div className="aboutContainer content-padding">
          <div
            className="aboutImg"
            data-aos="zoom"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              className="aboutImage"
              src="https://i.ytimg.com/vi/L9Shn7_w0BE/maxresdefault.jpg"
              alt=""
            />
          </div>

          <div
            className="aboutContent"
            data-aos="zoom"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="aboutContentData">
              <h1 className="text-title">What is E-Cell ?</h1>
              <p className="text-subtitle text-center">
                It is a student-run and faculty-led group that works to develop
                the skills of aspiring engineers. It began in 2015 and now has
                an impressive 100+ students from different V.C.E.T. branches
                participating. Students participate in a wide range of
                activities to develop their entrepreneurial mindset, business
                modelling skills and many more through various types of
                seminars, workshops, presentations, and prototype development of
                concepts.
              </p>
            </div>
          </div>
        </div>

        {/* reverse content */}
        <div className="aboutContainer-reverse content-padding">
          <div
            className="aboutImg"
            data-aos="zoom"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img className="aboutRImage" src={VVSF_WORD} alt="" />
          </div>
          <div
            className="aboutContent "
            data-aos="zoom"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="aboutContentData">
              <h1 className="text-title ">What is VVSF ?</h1>
              <p className="text-subtitle-reverse text-center">
                It is a one-stop solution for budding entrepreneurs. Here we
                gather the best startups, founders, investors, and mentors. A
                two-day event will feature a variety of events, including talks,
                pitches, exhibitions, and more. We want to foster an
                entrepreneurial culture throughout the entire district. This is
                a fantastic chance for individuals to establish a network for
                greatly expanding their enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
