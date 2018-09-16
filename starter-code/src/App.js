import React, { Component } from 'react';
import UserForm from "./components/UserForm"
import axios from "axios"


import './App.css';

//https://api.github.com/users/john

class App extends Component {
  state={
    repos:null
  }
  getUser = (e) => {
    e.preventDefault();
    const user=e.target.elements.username.value
    if(user){
      axios.get(`https://api.github.com/users/${user}`)
    .then((res)=>{
      // console.log(res)
      const repos=res.data.public_repos;
      this.setState({
       repos
      })
      // console.log(repos)
    })
    }else return

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>HTTP Call in React</h1>
        </header>
        <div>
        <UserForm getUser={this.getUser}/>
        {this.state.repos ? <p>Number of repos:{this.state.repos}</p>:
        <p>Please enter a username! </p>}

        </div>
      </div>
    );
  }
}

export default App;
