import './App.css';
import ToDoList from './components/ToDoList';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import DoneListContainer from './containers/DoneListContainer';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <ul>
            <li><Link to="/" className="link"> Home Page </Link></li>
            <li><Link to="/done" className="link"> Done List Page </Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={ToDoList}></Route>
            <Route exact path="/done" component={DoneListContainer}></Route>
            <Route exact path="*" component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
