import './App.css';
import Container from './components/Container';
// import { useSelector } from 'react-redux';

const App = () => {
  // const itemSelector = useSelector(state => state.itemSelector)
  return (
    <div>
      <header><h1>My Playlist</h1></header>
      <Container />
    </div>
  );
}

export default App;
