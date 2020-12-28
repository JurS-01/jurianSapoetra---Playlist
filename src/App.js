import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from './components/Container';
import Header from './components/Header';
import PopUp from './components/PopUp';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <nav>
          <ul className="nav-list">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
          </ul>
        </nav>
        <Route exact path="/"><Container /></Route>
        <Route path="/about"><PopUp /></Route>
      </Router>
    </div>
  );
}

export default App;





// <Switch>
//   <Route exact path="/"><Container /></Route>
//   <Route path="/about"><PopUp /></Route>
// </Switch>