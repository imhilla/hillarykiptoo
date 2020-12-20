import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Social() {
  const linkedin = 'https://www.linkedin.com/in/hillarykiptoo/';
  const twitter = 'https://twitter.com/hillarykiptoo_';
  const github = 'https://github.com/imhilla';
  return (
    <div className="icons">
      <a href={linkedin}><FaLinkedin /></a>
      <a href={twitter}><FaTwitter /></a>
      <a href={github}><FaGithub /></a>
    </div>
  )
}