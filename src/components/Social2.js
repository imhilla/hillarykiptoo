import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Social2(props) {
  const linkedin = 'https://www.linkedin.com/in/hillarykiptoo/';
  const twitter = 'https://twitter.com/hillarykiptoo_';
  const github = 'https://github.com/imhilla';

  return (
    <div className="social2">
      <div className="socialc">
        <div className="socialch">
          <a href={linkedin}><FaLinkedin style={{ color: `${props.reverseColor.reverse}` }} /></a>
          <p style={{ color: `${props.reverseColor.reverse}` }}>LinkedIn</p>
        </div>
        <div className="socialtwitter">
          <a href={twitter}><FaTwitter style={{ color: `${props.reverseColor.reverse}` }} /></a>
          <p style={{ color: `${props.reverseColor.reverse}` }}>Twitter</p>
        </div>
        <div className="socialch">
          <a href={github}><FaGithub style={{ color: `${props.reverseColor.reverse}` }} /></a>
          <p style={{ color: `${props.reverseColor.reverse}` }}>Github</p>
        </div>
      </div>
    </div>
  )
}