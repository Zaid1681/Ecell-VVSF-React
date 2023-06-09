import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <div className=" text-center section-padding">
        <h1 className="main-title-font text-center" style={{ color: "#fff" }}>
          Contact Us
        </h1>
        
        <p style={{ color: "#ffff" }}>
          For Colaboration or any queries contact us or rewach us
        </p>
        <hr
          className="m-auto line-padding"
          style={{ backgroundColor: "#ECF7FF" }}
        />
      </div>{" "}
      <div className="contactContent section-padding">
        <div className="contact-row">
          <div
            className="colCard"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="logo">
              <FaPhoneAlt />
            </div>
            <h4>Team E-Cell</h4>
            <p className="card-text">
              {" "}
              <b>Vidit </b> <i> +91 8805787962</i>
            </p>
            <p className="card-text">
              {" "}
              <b>Atul </b> <i> +91 8805787962</i>
            </p>
            <p className="card-text">
              {" "}
              <b>Nidhi </b> <i> +91 8805787962</i>
            </p>
            <p className="card-text">
              {" "}
              <b>Kaustubh</b> <i> +91 8805787962</i>
            </p>
          </div>
          <div
            className="colCard"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="logo">
              <FaMapMarkerAlt />
            </div>
            <h4>Address</h4>
            <p className="card-text">
              Vidyavardhini College of Engineering and Technology, K.T. Marg,
              Vasai Road, Vasai-Virar, Maharashtra 401202
            </p>
          </div>
          <div
            className="colCard"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="logo">
              <FaEnvelope />
            </div>
            <h4>Email</h4>
            <p className="card-text">
              {" "}
              <b>ecell@vcet.edu.in</b>{" "}
            </p>
          </div>
        </div>
        <div className="map">
          <div className=" text-center section-padding">
            <h1
              className="main-title-font text-center"
              style={{ color: "#fff" }}
            >
              Reach Us
            </h1>

            <hr
              className="m-auto line-padding"
              style={{ backgroundColor: "#ECF7FF" }}
            />
          </div>{" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.6598743525196!2d72.82654491531592!3d19.3838746472589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b41bef%3A0xbd1a4ca919d6a613!2sVidyavardhini&#39;s%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1676316549934!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
