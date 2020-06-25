import React from 'react';
import axios from 'axios';

class SampleLogin extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    debugger;
    axios.post('https://bwexpat-journal.herokuapp.com/api/auth/login', this.state.credentials)
      .then(res => {
        window.localStorage.setItem('token', res.data.token);
          this.props.history.push('/posts');  


      })
      .catch(err => console.log(err));

  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default SampleLogin;