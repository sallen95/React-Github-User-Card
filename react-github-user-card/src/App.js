import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubUser: []
    }
  }

  fetchGitUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(resp => {
        console.log(resp);
        this.setState({
          githubUser:resp.data
        })
        console.log('LOOK AT THIS ONE', this.state)
      })
      .catch(err => {
        console.log('ERROR!!', err)
      })
  }


  componentDidMount() {
    this.fetchGitUser('sallen95')
  }

  render() {
    return(
      <div>
        <h1>github users</h1>
        <div className='usersContainer'>
          {
            this.state.githubUser.map(object => (
              <p key={object.id}>{object.name}</p>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
