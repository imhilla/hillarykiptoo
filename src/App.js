import { useSelector } from 'react-redux';
import Header from '../src/components/Header';
import { Animated } from "react-animated-css";
import Hi from '../src/components/Hi';
import Quotes from '../src/components/Quotes';
import Social from '../src/components/Social';
import { StickyContainer, Sticky } from 'react-sticky';
import Image from './components/Myimage';
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
  // console.log(currentColor, reverseColor);
  return (
    <div className="App" style={{ backgroundColor: `${currentColor.color}` }}>

      {/* <StickyContainer> */}
      <Header className="header" id="myHeader" />
      {/* </StickyContainer> */}

      <div className="appContainer">
        <div className="hiphoto">
          <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
            <Photo currentColor={currentColor} reverseColor={reverseColor} />
          </Animated>
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <Hi currentColor={currentColor} reverseColor={reverseColor} />
          </Animated>
        </div>
        <div className="quotesocial">
          <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
            <Quotes currentColor={currentColor} reverseColor={reverseColor} />
          </Animated>
          <Social currentColor={currentColor} reverseColor={reverseColor} />
        </div>
      </div>
      {/* <Image /> */}
      <Best currentColor={currentColor} reverseColor={reverseColor} />
      <div className="cvskills">
        <Skills currentColor={currentColor} reverseColor={reverseColor} />
        <Cv currentColor={currentColor} reverseColor={reverseColor} />
      </div>
      <Contact />
      <Social2 />
      <div className="copyright">Coded with ❤️ by @Hillary</div>
    </div>
  );
}

export default App;
