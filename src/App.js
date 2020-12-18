import { useSelector } from 'react-redux';
import Header from './Header';
import './styles/header.css';
function App() {
  const currentColor = useSelector(state => state.getMode);
  const reverseColor = useSelector(state => state.getMode);
  console.log(currentColor, reverseColor);
  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;
