import React from 'react';
import emailjs from 'emailjs-com';
// import apiKeys from '../apikeys';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      message: '',
      email: '',
      sent: false,
      buttonText: 'Send Message',
      USER_ID: 'user_vBpnQZmQuPMJVP3Jmd6tI',
      TEMPLATE_ID: 'template_mda622d',
    }

  }


  formSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('gmail', this.state.TEMPLATE_ID, e.target, this.state.USER_ID)
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
        <a name="CONTACT ME" href="/" style={{ color: `${this.props.reverseColor.reverse}`, fontWeight: 'bold', }}>CONTACT ME</a>
        {/* <p style={{ color: `${this.props.reverseColor.reverse}` }}>
          If you have an application you are interested in developing, a feature that you need to be built, or a project that needs coding, I'd love to help you with it.
      </p> */}
        <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
          <div class="field">
            <label class="label" htmlFor="message-name" style={{ color: `${this.props.reverseColor.reverse}` }}>Your Name</label>
            <div class="control">
              <input onChange={e => this.setState({ name: e.target.value })} name="name" class="input" type="text" placeholder="Your Name" value={this.state.name} />
            </div>
          </div>

          <div class="field">
            <label class="label" htmlFor="message-email" style={{ color: `${this.props.reverseColor.reverse}` }}>Your Email</label>
            <div class="control">
              <input onChange={(e) => this.setState({ email: e.target.value })} name="email" class="input" type="email" placeholder="your@email.com" required value={this.state.email} />
            </div>
          </div>

          <div class="field">
            <label class="label" htmlFor="message-input" style={{ color: `${this.props.reverseColor.reverse}` }}>Your Message</label>
            <div class="control">
              <textarea onChange={e => this.setState({ message: e.target.value })} name="message" class="textarea" type="text" placeholder="Please write your message here" value={this.state.message} required />
            </div>
          </div>

          <div>
            <button type="submit" className="button is-link" style={{ backgroundColor: `${this.props.reverseColor.reverse}`, color: `${this.props.currentColor.color}` }}>{this.state.buttonText}</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Contact;

