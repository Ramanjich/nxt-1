import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {userInput: '', passInput: '', showError: false}

  onSubmitSucces = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userInput, passInput} = this.state
    const userDetails = {userInput, passInput}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSucces()
    } else {
      this.setState({userInput: '', passInput: '', showError: true})
    }
  }

  onUsernameChange = event => {
    this.setState({userInput: event.target.value})
  }

  onPassChange = event => {
    this.setState({passInput: event.target.value})
  }

  render() {
    const {userInput, passInput, showError} = this.state

    return (
      <div className="login-form-container">
        <div className="login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            alt="website login"
            className="login-image"
          />
        </div>
        <div className="form-container">
          <form onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />

            <div className="username-container">
              <label htmlFor="username" className="label-text">
                USERNAME
              </label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="user-input-ele"
                value={userInput}
                onChange={this.onUsernameChange}
              />
            </div>
            <div className="password-container">
              <label htmlFor="password" className="label-text">
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="pass-input-ele"
                value={passInput}
                onChange={this.onPassChange}
              />
            </div>
            <div className="login-btn-con">
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
            {showError ? (
              <p className="error-para">*Username and Password did not match</p>
            ) : null}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
