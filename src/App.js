import './App.css';
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Instruction from './component/Instruction/Instruction'

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header/>
        <div className="pt-48 sm:pt-32"></div>
        <Switch>
          <Home path="/" exact />
          <Home path="/home"/>
          <Instruction path="/instruction"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
