import './App.css';
import ToDoList from './components/ToDoList';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <BrowserRouter>
          <ul>
            <li><Link to="/"  className="color"> Home Page </Link></li>
            <li><Link to="/done" className="color"> Done List Page </Link></li>
          </ul>
          <Route exact path="/" component={ToDoList}></Route>
        </BrowserRouter>
        </header>
    </div>
  );
}

export default App;
