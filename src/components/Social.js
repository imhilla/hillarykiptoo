/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Animated } from "react-animated-css";

export default function Social(props) {
  const linkedin = 'https://www.linkedin.com/in/hillarykiptoo/';
  const twitter = 'https://twitter.com/hillarykiptoo_';
  const github = 'https://github.com/imhilla';
  return (
    <div>
      <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
        <div className="icons">
          <a href={linkedin} style={{ color: `${props.reverseColor.reverse}` }}><FaLinkedin /></a>
          <a href={twitter} style={{ color: `${props.reverseColor.reverse}` }}><FaTwitter /></a>
          <a href={github} style={{ color: `${props.reverseColor.reverse}` }}><FaGithub /></a>
        </div>
      </Animated>
      <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
        <div className="social-height" style={{ backgroundColor: `${props.reverseColor.reverse}` }} />
      </Animated>
      {/* <div className="contactme">
        <button className="button">Contact me</button>
        <a href="#" className="mywork button"><FaAngleDoubleDown className="downbutton bounce" />My work</a>
      </div> */}
    </div>
  )
}
