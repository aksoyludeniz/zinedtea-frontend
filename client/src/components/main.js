import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import Comments from './comments';
import Teas from './teas';
// import User from './users';
import Checkout from './checkout';
import Confirmation from './confirmation';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/comments" component={Comments} />
    <Route path="/confirmation" component={Confirmation} />
    <Route path="/teas" component={Teas} />
    {/* <Route path="/users" component={User} /> */}
  </Switch>
)

export default Main;
