import { useSelector } from 'react-redux';
import Header from '../src/components/Header';
import Hi from '../src/components/Hi';
import Quotes from '../src/components/Quotes';
import Social from '../src/components/Social';

import './styles/header.css';
import './styles/hi.css';
import './styles/quotes.css';
import './styles/app.css';

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
    </div>
  );
}

export default App;
