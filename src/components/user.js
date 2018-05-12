import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-mdl'
import {addUser, getUser} from '../api';

class User extends Component {
    state = {
      username: null,
      password: null,

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
         const username = this.state.username
         const password = this.state.password
         const { history } = this.props;

         addUser ({username,password})
         .then(() => history.push("/login") )
         .catch(err => {
         this.setState({
         error: err.message
         });


       });
     } 
        render() {
          return(
            <div>
              <h1>Sign Up Page</h1>
            <form onSubmit = {this.onSubmit.bind(this)}>
            <input type="text"
            value = {this.state.username} onChange = {this.onNameChange.bind(this)}/>
            <input type="text"
               value = {this.state.password}
               onChange ={this.onPasswordChange.bind(this)}/>
            <input type="submit"/>
            </form>
            <Button> <Link to="/login">Login</Link>
            </Button>

            </div>




    )
  }
}

export default User;
