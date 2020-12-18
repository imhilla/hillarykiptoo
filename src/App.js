import { useSelector, useDispatch } from 'react-redux';
import { getMode } from './actions/index';
import Header from './Header';
import './styles/header.css';
function App() {
  const currentColor = useSelector(state => state.getMode);
  console.log(currentColor)
  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;
