import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [sentMessage, setSentMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }
    if (userName || email || message) {
      setSentMessage("Message sent!");
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful submission.
    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
    setSentMessage("");
  };

  return (
    <section id="reach-out" className="contact">
      {/* <div className="flex-row">
        <h1 className="section-title secondary-border">Contact</h1>
      </div> */}

      <div className="contact-info">

        {/* contact form section  */}

        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            {/* Name */}
            <label for="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            {/* Email */}
            <label for="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            {/* Message */}
            <label for="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />

            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        {sentMessage && (
          <div>
            <p className="send-text">
              {sentMessage}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

