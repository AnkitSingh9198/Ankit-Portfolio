import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export default function Conatact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_11di45g", "template_6n5o9ch", form.current, 
         "60dbigde-OaM001vV"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc"></span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
     
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            placeholder="Your E-mail"
            className="email"
            name="your_email"
          />
          <textarea name="message" id="" className="msg" rows="5"/>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
          
          <a href="www.linkedin.com/in/ankit-singh-32371a167"><img src="../images/In.png" alt="" className="link" /></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en"><img src="../images/insta.jpg" alt="" className="link" /></a>
            <a href="https://github.com/"><img src="../images/github-logo.webp" alt="" className="link" /></a>
            <a href="https://web.whatsapp.com/"> <img src="./images/whatspp.jpg" alt="" className="link" /></a>
          </div>
        </form>
      </div>
      <h6>© 2024 Portfolio, Inc. All rights reserved</h6>
    </section>
  );
}
