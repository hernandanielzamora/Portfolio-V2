/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/ContactForm.scss';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xdovglwp');
  if (state.succeeded) {
    return (
      <>
        <h3 className="sucess-title">Thank you for your message. I will get back to you as soon as possible!</h3>
        <hr />
      </>
    );
  }

  return (
    <>
      <section id="contact">
        <h2 className="title contact-title">Lets Connect!</h2>
        <p className="paragraph contact-text">I am always interested in hearing about new projects, so if you woud like to chat please get in touch</p>
        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="email" className="sub-title" aria-label="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="sub-title" aria-label="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            cols="45"
            rows="5"
            placeholder="Hello Hernán. I would like to get in touch with you..."
            maxLength="500"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </section>
      <hr />
    </>
  );
};

export default ContactForm;
