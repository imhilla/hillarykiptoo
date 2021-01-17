import { useEffect, useState } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import FadeIn from 'react-fade-in';
import Typewriter from 'typewriter-effect';

export default function Hi(props) {
  const [position, setPosition] = useState('')
  console.log(props.currentColor)

  useEffect(() => {
    setTimeout(function () { setPosition('left'); }, 3000);
    console.log(position)
  });

  return (
    <div className="hiContainer" style={{ backgroundColor: `${props.currentColor.color}` }}>
      <div className="emoji" style={{ color: `${props.reverseColor.reverse}` }}>Hello <span className="wave">👋</span></div>
      <div className="hiDescription" style={{ color: `${props.reverseColor.reverse}` }}>
        <FadeIn>
          <h1 className="text" style={{ backgroundPosition: `${position}` }}><span className="hiitalic">I'm </span>
            <span className="name">Hillary Kiptoo</span></h1>
          <h1 className="text2">
            Software developer specializing in bringing ideas, designs into real Human centered programs.
          </h1>
          <h2 className="makethings"
            style={{ color: `${props.reverseColor.reverse}` }}>
            Over the last two years, I gained meaningful experience in software development
            while working with clients, teams, through mixed approaches, based on Design thinking Lean approaches,
            Agile development,
            Continues Integration, MVP while also trying to develop my skills.
          </h2>
          <h3 className="text3">
            During the pandemic, I revamped my skills and fully became a professional remote software developer.
            I am pro efficient in
          </h3>
          <Typewriter
            options={{
              strings: [
                'HTML ',
                'CSS',
                'JavaScript',
                'React and Redux',
                'React Native',
                'Ruby',
                'Ruby on Rails',
                'Data structures and Algorithms',
                'And more...',
                'Contact me 😊',
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="contactme">
            <a href="/"
              target="_blank"
              rel="noreferrer" style={{ color: `${props.reverseColor.reverse}` }}><FaAngleDoubleDown className="downbutton bounce" />Explore me</a>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}