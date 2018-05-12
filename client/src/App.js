import React, { Component, Fragment } from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Route, Link, Switch } from 'react-router-dom';
import home from './components/home.js';
import teas from './components/teas.js';
import comments from './components/comments.js';
import user from './components/user.js';




class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="demo-big-content">
      <Layout>
        <Header title="Zinedtea" scroll>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/teas">Teas</Link>
                <Link to="/user">User</Link>
            </Navigation>
        </Header>
          <Drawer title="Login">
              <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/teas">Teas</Link>
                <Link to="/user">User</Link>
              </Navigation>
          </Drawer>
          <Content>
            <Switch>
              <Route  exact path='/' component={home} />
              <Route  path='/home' component={home} />
              <Route path='/teas' component={teas} />
              <Route path='/comments' component={comments} />
              <Route path='/user' component={user} />
            </Switch>

          </Content>
      </Layout>
  </div>

</Fragment>
    );
  }
}

export default App;
