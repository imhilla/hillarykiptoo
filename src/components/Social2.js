import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Social2() {
  const linkedin = 'https://www.linkedin.com/in/hillarykiptoo/';
  const twitter = 'https://twitter.com/hillarykiptoo_';
  const github = 'https://github.com/imhilla';

  return (
    <div className="social2">
      <div className="socialc">
        <div className="socialch">
          <a href={linkedin}><FaLinkedin /></a>
          <p>LinkedIn</p>
        </div>
        <div className="socialch">
          <a href={twitter}><FaTwitter /></a>
          <p>Twitter</p>
        </div>
        <div className="socialch">
          <a href={github}><FaGithub /></a>
          <p>Github</p>
        </div>
      </div>
    </div>
  )
}