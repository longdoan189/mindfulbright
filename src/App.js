import './App.css';
import { Router, Switch } from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Instruction from './component/Instruction/Instruction'
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Exercise from './component/ExerciseList/SingleExercise';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header/>
        <div className="pt-20 sm:pt-32"></div>
        <Switch>
          <Home path="/" exact />
          <Home path="/home"/>
          <About path="/about"/>
          <Contact path="/contact"/>
          <Exercise exact path="/instruction/:id"/>
          <Instruction path="/instruction"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
