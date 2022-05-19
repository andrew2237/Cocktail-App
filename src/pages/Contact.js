import React from "react";
import Banner from "../assets/b9.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="sideLeft"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="sideRight">
        <h3> Contact Us</h3>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button className="contactSubmit" type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
