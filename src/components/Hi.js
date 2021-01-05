import { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import Typewriter from 'typewriter-effect';

export default function Hi(props) {
  const [position, setPosition] = useState('')
  console.log(props.currentColor)

  useEffect(() => {
    setTimeout(function(){ setPosition('left'); }, 3000);
    console.log(position)
  });

  return (
    <div className="hiContainer" style={{ backgroundColor: `${props.currentColor.color}` }}>
      <div className="emoji" style={{ color: `${props.reverseColor.reverse}` }}>Hello 👋</div>
      <div className="hiDescription" style={{ color: `${props.reverseColor.reverse}` }}>
        <FadeIn>
          <h1 className="text" style={{ backgroundPosition: `${position}` }}><span className="hiitalic">I'm </span> <span className="name">Hillary Kiptoo</span></h1>
          <h1 className="text2">
            Software developer specializing in bringing ideas, designs into real Human centered programs.
          </h1>
          <h2 className="makethings"
            style={{ color: `${props.reverseColor.reverse}` }}>
            Over the last two years, i gained meaningful experience in software developemnt
            while working with clients, teams, through mixed approaches, based on Design thinking
            Lean aproaches, Agile developemnts, Continues Intergration, MVP while also tryng to develop my skills.
          </h2>
          <h3 className="text3">
            During the pandemic i revamped my skills and fully became a profesional remote software developer.
            I am proefficient in
          </h3>
          <Typewriter
            className="typewriter"
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
        </FadeIn>
      </div>
    </div>
  )
}