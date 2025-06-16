import React, { useRef } from "react";
// import emailjs from 'emailjs-com';
import { animateScroll as scroll } from "react-scroll";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function Contact() {
  const form = useRef();
  // const [email_status, setEmailStatus] = React.useState('');
  const [name_val, setNameVal] = React.useState("");
  const [email_val, setEmailVal] = React.useState("");
  const [msg_val, setMsgVal] = React.useState("");

  const sendEmail = (e) => {
    // e.preventDefault();
  };

  return (
    <div id="contact">
      <h1 className="contact-heading">Let's Connect</h1>
      {/* <h1 className="email-status">{email_status}</h1> */}

      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input
          className="formField"
          required
          type="text"
          name="name"
          placeholder="Name"
          value={name_val}
          onChange={(e) => {
            const new_name = e.target.value;
            setNameVal(new_name);
          }}
        />
        <input
          className="formField"
          required
          type="email"
          name="email"
          placeholder="Email"
          value={email_val}
          onChange={(e) => {
            const new_email = e.target.value;
            setEmailVal(new_email);
          }}
        />
        <textarea
          className="formTextArea"
          required
          name="message"
          placeholder="Message"
          value={msg_val}
          onChange={(e) => {
            const new_msg = e.target.value;
            setMsgVal(new_msg);
          }}
        />

        <div className="formBtnDiv">
          <button className="formBtn" type="submit" value="send" disabled>
            Send
          </button>
        </div>
      </form>
      <span>
        <ArrowCircleUpIcon
          className="scrollTop"
          onClick={() => {
            scroll.scrollToTop();
          }}
        />
      </span>
    </div>
  );
}

export default Contact;
