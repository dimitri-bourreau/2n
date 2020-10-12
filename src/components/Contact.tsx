import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';

const ContactWrapper = style.section`
  margin: 30px auto;
  width: 80%;
  text-align: center;
  min-height: 80vh;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    margin-bottom: 50px;
  }

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
  }

  ul {
    background-color: #f7ecec;
    padding: 20px 0;
    border-radius: 10px;
  }

  @media all and (min-width: 576px) {
    width: 70%;
  }
  @media all and (min-width: 768px) {
    width: 60%;
  }
  @media all and (min-width: 992px) {
    width: 50%;
  }
  @media all and (min-width: 1200px) {
    width: 40%;
  }
`;

const ContactForm = style.form`
  width: 100%;
  margin: auto;

  label, label input, label textarea {
    display: block;
    margin: 10px auto;
  }

  label input, label textarea {
    border: 1px solid lightgrey;
  }

  label input {
    padding: 10px 20px;
    width: 80%;
  }

  label textarea {
    width: 90%;
    height: 200px;
  }

  button {
    background-color: #920292;
  }

  button:hover {
    background-color: #a53ea5;
  }
`;

const Contact: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <ContactWrapper>
      <h1>Contact</h1>

      <ContactForm>
        <label htmlFor="email">
          Email
          <input id="email" type="email" />
        </label>
        <label htmlFor="object">
          Objet
          <input id="object" type="text" />
        </label>
        <label htmlFor="message">
          Message
          <textarea id="message" />
        </label>

        <button type="button" className="btn">
          Envoyer
        </button>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;