import React, { Component } from 'react';
import {User} from './user';
import {Link} from 'react-router-dom';
import {addUser, login} from '../api';
import {update} from '../services/withUser';


class Login extends Component {
    state = {
      username: null,
      password: null
    }



       onNameChange (e) {
         const username = e.target.value

         this.setState ({username})
       }

       onPasswordChange (e) {
         const password = e.target.value

         this.setState ({password})
       }


       onSubmit (e) {
         e.preventDefault ()
         const { username, password } = this.state;
         const { history } = this.props;

         login ({username,password})
         .then ((user) => {
           update(user);
           history.push('/');



         })
         .catch(err => {
         this.setState({
         error: err.message
      });
    })


       }
        render() {
          const err = this.state.error ?  <div> {this.state.error} </div> : null



          return(
            <div>
              <h1>Login Page</h1>
            <form onSubmit = {this.onSubmit.bind(this)}>
            <input type="text"
            value = {this.state.username} onChange = {this.onNameChange.bind(this)}/>
            <input type="text"
               value = {this.state.password}
               onChange ={this.onPasswordChange.bind(this)}/>
            <input type="submit"/>
            </form>
           {err}
            </div>



    )
  }
}

export default Login;
