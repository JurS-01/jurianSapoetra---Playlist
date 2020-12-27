import './App.css';
import Container from './components/Container';
import Header from './components/Header';
// import { useSelector } from 'react-redux';

const App = () => {
  // const itemSelector = useSelector(state => state.itemSelector)
  return (
    <div>
      <Header />
      <Container />
    </div>
  );
}

export default App;
