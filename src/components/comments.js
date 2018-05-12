import React, { Component } from 'react';

import {addComment, getComments} from '../api';


class Comments extends Component {

  constructor(){
    super()
    this.state = {
      name:"",
      comment:"",
      comments:[]
    }
  }

  componentDidMount() {
  this.refreshComments()
 }

  refreshComments() {
    getComments ()
    .then (comments => this.setState ({comments}))
    .catch (console.log)

  }


 onNameChange (e){
   const name = e.target.value

   this.setState ({name})
 }

 onCommentChange (e){
   const comment = e.target.value
  this.setState ({comment})
 }

 onSubmit (e) {
   e.preventDefault ()
   const user = this.state.name
   const comment = this.state.comment


   addComment ({user,comment})
   .then (() => this.refreshComments())
   .catch(console.log)

 }
  render() {
    return(
      <div>
      
      <form onSubmit = {this.onSubmit.bind(this)}>
      <input type="text"
      value = {this.state.name} onChange = {this.onNameChange.bind(this)}/>
      <input type="text"
       value = {this.state.comment}
       onChange ={this.onCommentChange.bind(this)}/>
      <input type="submit"/>
      </form>
      <div>
      {JSON. stringify(this.state.comments)}
      </div>
      </div>



    )
  }

}

export default Comments;
