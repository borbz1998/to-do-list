import './App.css';
import ToDoList from './components/ToDoList';
import DoneListContainer from './containers/DoneListContainer';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { getTodos } from './apis/todos';
import { initTodos } from './Actions';
import { connect } from 'react-redux';
import React, { } from 'react';
import { Menu } from 'antd';
import { UnorderedListOutlined,CheckSquareOutlined } from '@ant-design/icons';


class App extends React.Component {

  componentDidMount() {
    this.setState({
      loading: true
    })

    getTodos().then(response => {
      console.log(response.data);
      this.props.initTodos(response.data);
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
       
        <BrowserRouter>
          <Menu mode="horizontal" defaultSelectedKeys={['home']}>
            <Menu.Item key="home" icon={<UnorderedListOutlined />}> <Link to="/" className="link"> Home Page </Link></Menu.Item>
            <Menu.Item key="done" icon={<CheckSquareOutlined />}><Link to="/done" className="link"> Done List Page </Link> </Menu.Item>
          </Menu>
          <div id="homebg">
          <Switch>
            <Route exact path="/" component={ToDoList}></Route>
            <Route exact path="/done" component={DoneListContainer}></Route>
            <Route exact path="*" component={NotFound}></Route>
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initTodos: todos => dispatch(initTodos(todos))
})

export default connect(null, mapDispatchToProps)(App);
