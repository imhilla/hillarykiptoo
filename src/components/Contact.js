import React from 'react';
// import axios from 'axios';
import emailjs from 'emailjs-com';
import apiKeys from '../apikeys';

class Contact extends React.Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
  }

  formSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then(result => {
        alert('Message Sent, I\'ll get back to you shortly', result.text);
      },
        error => {
          alert('An error occured, Plese try again', error.text)
        })
  }

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
    })
  }

  render() {
    return (
      <div className="contactContainer">
        <h1>Contact me</h1>
        <p>
          If you have an application you are interested in developing,,
          a feature that you need built, or a project that need coding,
          i'd love to help you with it.
      </p>
        <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
          <div class="field">
            <label class="label" htmlFor="message-name">Your Name</label>
            <div class="control">
              <input onChange={e => this.setState({ name: e.target.value })} name="name" class="input" type="text" placeholder="Your Name" value={this.state.name} />
            </div>
          </div>

          <div class="field">
            <label class="label" htmlFor="message-email">Your Email</label>
            <div class="control">
              <input onChange={(e) => this.setState({ email: e.target.value })} name="email" class="input" type="email" placeholder="your@email.com" required value={this.state.email} />
            </div>
          </div>

          <div class="field">
            <label class="label" htmlFor="message-input">Your Message</label>
            <div class="control">
              <textarea onChange={e => this.setState({ message: e.target.value })} name="message" class="textarea" type="text" placeholder="Please write your message here" value={this.state.message} required />
            </div>
          </div>

          <div>
            <button type="submit" className="button is-link">{this.state.buttonText}</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Contact;

