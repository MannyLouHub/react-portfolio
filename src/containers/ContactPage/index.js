import React from "react";
import linkedin from "../../images/LinkedIn.jpg"
import github from "../../images/github.png"
import email from "../../images/mail.jpg"

function ContactPage() {
  return (
      <div className="pl-5 pt-5">
        <a className={'p-3'} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/emmanuel-louison-30650994/">
          <img alt="" src={linkedin} width="300" height="200" /></a>
        <a className={'p-3'} target="_blank" rel="noopener noreferrer" href="https://github.com/MannyLouHub">
          <img alt="" src={github} width="300" height="200" /></a>
        <a className={'p-3'} target="_blank" rel="noopener noreferrer" href="mailto:Manny.Louison@gmail.com">
          <img alt="" src={email} width="300" height="200" /></a>
      </div>
  );
}

export default ContactPage;