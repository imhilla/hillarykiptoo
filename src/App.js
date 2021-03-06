import { useSelector } from 'react-redux';
import Header from '../src/components/Header';
import { Animated } from "react-animated-css";
import { FaHeart } from "react-icons/fa";
import Hi from '../src/components/Hi';
// import Quotes from '../src/components/Quotes';
// import Social from '../src/components/Social';
import Best from './components/Best';
import Cv from './components/Cv';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Social2 from './components/Social2'
import Photo from './components/Photo'

import './styles/header.css';
import './styles/hi.css';
import './styles/quotes.css';
import './styles/app.css';
import './styles/social.css';
import './styles/image.css';
import './styles/best.css';
import './styles/cv.css';
import './styles/skills.css';
import './styles/contacts.css';
import './styles/social2.css';
import './styles/photo.css';

function App() {
  const currentColor = useSelector(state => state.getMode);
  const reverseColor = useSelector(state => state.getMode);
  return (
    <div className="App" style={{ backgroundColor: `${currentColor.color}` }}>
      <Header className="header" id="myHeader" />
      <div className="appContainer">
        <div className="hiphoto">
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <Hi currentColor={currentColor} reverseColor={reverseColor} />
          </Animated>
          <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
            <Photo currentColor={currentColor} reverseColor={reverseColor} />
          </Animated>
          {/* <Social currentColor={currentColor} reverseColor={reverseColor} /> */}
        </div>
        {/* <div className="quotesocial">
          <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
            <Quotes currentColor={currentColor} reverseColor={reverseColor} />
          </Animated>
        </div> */}
      </div>
      <Best currentColor={currentColor} reverseColor={reverseColor} />
      <div className="cvskills">
        <Skills currentColor={currentColor} reverseColor={reverseColor} />
        <Cv currentColor={currentColor} reverseColor={reverseColor} />
      </div>
      <Contact currentColor={currentColor} reverseColor={reverseColor} />
      <Social2 currentColor={currentColor} reverseColor={reverseColor} />
      <div className="copyright" style={{ color: `${reverseColor.reverse}` }}>Coded with <FaHeart /> by @Hillary</div>
    </div>
  );
}

export default App;
