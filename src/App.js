import { useSelector } from 'react-redux';
import Header from '../src/components/Header';
import Hi from '../src/components/Hi';
import Quotes from '../src/components/Quotes';
import Social from '../src/components/Social';
import Image from './components/Myimage';
import Best from './components/Best';

import './styles/header.css';
import './styles/hi.css';
import './styles/quotes.css';
import './styles/app.css';
import './styles/social.css';
import './styles/image.css';
import './styles/best.css';

function App() {
  const currentColor = useSelector(state => state.getMode);
  const reverseColor = useSelector(state => state.getMode);
  console.log(currentColor, reverseColor);
  return (
    <div className="App" style={{ backgroundColor: `${currentColor.color}` }}>
      <Header />
      <div className="appContainer">
        <Hi currentColor={currentColor} reverseColor={reverseColor} />
        <div className="quotesocial">
          <Quotes />
          <Social />
        </div>
      </div>
      <Image />
      <Best />
    </div>
  );
}

export default App;
