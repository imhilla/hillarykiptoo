import FadeIn from 'react-fade-in';
import Typewriter from 'typewriter-effect';
import { FaAngleDoubleDown } from 'react-icons/fa';

export default function Hi(props) {
  console.log(props.currentColor)
  return (
    <div className="hiContainer" style={{ backgroundColor: `${props.currentColor.color}` }}>
      <div className="emoji">🤓</div>
      <div className="hiDescription" style={{ color: `${props.reverseColor.reverse}` }}>
        <FadeIn>
          <h1 className="text">Hi, my name is Hillary.</h1>
          <h1 className="text">I am software developer.</h1>
          <Typewriter
            options={{
              strings: [
                'I can help you build a product feature.',
                'Over the past year',
                'I have gained skills in',
                'HTML ',
                'CSS',
                'JavaScript',
                'React and Redux',
                'TDD',
                'Data structures and Algorithms',
                'Contact me 😊',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </FadeIn>
      </div>
      <div className="contactme">
        <button className="button">Contact me</button>
        <a href="#" className="mywork button"><FaAngleDoubleDown className="downbutton bounce" />My work</a>
      </div>
    </div>
  )
}