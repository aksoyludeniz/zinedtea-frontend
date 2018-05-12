import React, { Component, Fragment } from 'react';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Route, Link, Switch } from 'react-router-dom';
import home from './components/home.js';
import teas from './components/teas.js';
import comments from './components/comments.js';
import signup from './components/user.js';
import checkout from
'./components/checkout.js';
import login from './components/login.js'
import logout from './components/logout.js'

import { Footer, FooterSection, FooterLinkList } from 'react-mdl';
import 'react-mdl/extra/material.css';
import './App.css';
import { withUser, update } from './services/withUser';
import {getUser} from './api';


class App extends Component {
  componentDidMount() {

     getUser()
       .then(user => {
         update(user);
       })
       .catch(err => {
        update(null);
      });
   }
  render() {
    const { user } = this.props;
    const authLink = user ? <Link to="/logout"> Logout </Link>
    :<Link to="/user">User</Link>
    return (
      <Fragment>
      <div className="demo-big-content">
      <Layout fixedHeader>
        <Header className="header-color" title="Zinedtea" scroll>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/teas">Teas</Link>
                {authLink}
            </Navigation>
        </Header>

          <Content>
            <Switch>
              <Route  exact path='/' component={home} />
              <Route  path='/home' component={home} />
              <Route path='/teas' component={teas} />
              <Route path='/comments' component={comments} />
              <Route path='/user' component={signup} />
              <Route path='/checkout'
              component={checkout}/>
              <Route path='/login'
              component={login}/>
              <Route path='/logout'
              component={logout}/>
            </Switch>
          </Content>
      </Layout>
  </div>
  <Footer className="bottom-bar"  size="mini">
      <FooterSection type="left" logo="Deniz & Jamal">
          <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
          </FooterLinkList>
      </FooterSection>
  </Footer>
</Fragment>
    );
  }
}


export default withUser(App);
