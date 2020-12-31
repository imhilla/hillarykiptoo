import FadeIn from 'react-fade-in';
import Typewriter from 'typewriter-effect';

export default function Hi(props) {
  console.log(props.currentColor)
  return (
    <div className="hiContainer" style={{ backgroundColor: `${props.currentColor.color}` }}>
      <div className="emoji" style={{ color: `${props.reverseColor.reverse}` }}>Hi 👋</div>
      <div className="hiDescription" style={{ color: `${props.reverseColor.reverse}` }}>
        <FadeIn>
          <h1 className="text">I'm Hillary a Fullstack developer</h1>
          <h1 className="text">I want to <span className="makethings"
            style={{ color: `${props.reverseColor.reverse}` }}>make things</span> that <span className="difference">make difference</span> </h1>
          <Typewriter
            options={{
              strings: [
                'I can help you build a product feature.',
                'In',
                'HTML ',
                'CSS',
                'JavaScript',
                'React and Redux',
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