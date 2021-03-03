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
      <div className="emoji" style={{ color: `${props.reverseColor.reverse}` }}>Hello <span className="wave">👋</span> your</div>
      <div className="hiDescription" style={{ color: `${props.reverseColor.reverse}` }}>
        <FadeIn>
          <div className="typeWriter">
            <Typewriter
              options={{
                strings: [
                  'JavaScript',
                  'React and Redux',
                  'Ruby on Rails',
                  'GraphQL',
                  'UX/UI Design',
                ],
                autoStart: true,
                loop: true,
              }}

            />
          </div>
          <h2 className="text2">Software developer.</h2>
        </FadeIn>
      </div>
      <div className="contactme">
        <a href="/"
          target="_blank"
          className="bouncebutton"
          rel="noreferrer">
          SEE MY WOK</a>
      </div>
    </div>
  )
}