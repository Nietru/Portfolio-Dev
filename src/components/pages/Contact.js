import React, { useState } from "react";
import "../../App.css";

// Here we import a helper function that will check if the email is valid
import validateEmail from "react";

// import { Tooltip } from "react-bootstrap";

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setErrorMessage("Must enter a valid Name, Email, and Message!");
    }

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Name is not entered OR Email is invalid!");
      return;
    }
    // clears the inputs after submit
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <h2>Contact:</h2>
      <form className="row form contact" onSubmit={handleFormSubmit}>
        <div className="row ui-form">
          {/* {errorMessage ? <label>Name cannot be empty!</label> : ""} */}
          <input
            className="field col-5 mt-3"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Your name"
          />
          <input
            className="field col-5 mt-3"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            className="field col-11 mt-3"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Your Message Here!"
          />
          <button type="submit" className="submit-form col-1 mt-3">
            Submit
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
