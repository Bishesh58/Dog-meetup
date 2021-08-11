import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__title">
        <h1>Get in touch!</h1>
        <p>Contact us for any query, help us to improve our service.</p>
      </div>
      <div className="contact__container">
        <div className="contact__form">
          <form>
            <input placeholder="First Name" type="fname" />

            <input placeholder="Last Name" type="lname" />
            <input placeholder="Email" type="email" />
            <input placeholder="Phone Number" type="phone" />
            <textarea
                placeholder="Write your message.."
                type="messageBox"
              ></textarea>

            <button type="submit" onClick="">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
