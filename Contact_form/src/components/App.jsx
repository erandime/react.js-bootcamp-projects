import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  function handleOnChange(event) {
    const { name, value } = event.target;

    setContact(function (getPreviousValues) {
      return { ...getPreviousValues, [name]: value };
    });
  }

  function handleOnSubmit(event) {
    setIsVisible(true);
    event.preventDefault();
  }

  return (
    <div className="container">
      <div
        className="card"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <h1>
          Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
      </div>
      <form>
        <input
          name="fName"
          value={contact.fName}
          placeholder="First Name"
          onChange={handleOnChange}
        />
        <input
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
          onChange={handleOnChange}
        />
        <input
          name="email"
          value={contact.email}
          placeholder="Email"
          onChange={handleOnChange}
        />
        <button onClick={handleOnSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
