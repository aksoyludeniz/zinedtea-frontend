import React, { Component } from 'react';
import {logout} from '../api';
import {update} from '../services/withUser';


class Logout extends Component {

 componentDidMount () {
  const { history } = this.props;
   logout ()
   .then (() => {
     update (null)
     history.push('/');
   })
 }
     render() {
        return <div/>
  }
}

export default Logout;
