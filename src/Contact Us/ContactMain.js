import React, { useRef } from "react";

import classes from "./ContactMain.module.css";

function ContactMain(props) {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const contactRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const querry = {
      name: nameRef.current.value,
      emailId: emailRef.current.value,
      contactNo: contactRef.current.value,
    };

    props.onAddQuerry(querry);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Name</label>
        <input type="text" id="title" ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Email Id</label>
        <textarea rows="5" id="opening-text" ref={emailRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Contact Number</label>
        <input type="text" id="date" ref={contactRef} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ContactMain;
