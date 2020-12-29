import { useSelector } from 'react-redux';
import Header from '../src/components/Header';
import { Animated } from "react-animated-css";
import Hi from '../src/components/Hi';
import Quotes from '../src/components/Quotes';
import Social from '../src/components/Social';
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
      <Header />
      <div className="appContainer">
        <div className="hiphoto">
          <Hi currentColor={currentColor} reverseColor={reverseColor} />
          <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
            <div>
              <Photo currentColor={currentColor} reverseColor={reverseColor} />
            </div>
          </Animated>
        </div>
        <div className="quotesocial">
          <Quotes currentColor={currentColor} reverseColor={reverseColor} />
          <Social currentColor={currentColor} reverseColor={reverseColor} />
        </div>
      </div>
      {/* <Image /> */}
      <Best />
      <div className="cvskills">
        <Skills />
        <Cv />
      </div>
      <Contact />
      <Social2 />
      <div className="copyright">Coded with ❤️ by @Hillary</div>
    </div>
  );
}

export default App;
