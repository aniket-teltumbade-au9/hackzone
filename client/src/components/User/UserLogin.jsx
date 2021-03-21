import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { devLogin } from '../../redux/actions/authActions'

class UserLogin extends Component {
  state = {
    email: null,
    password: null
  }
  handleLoginInput = (e) => {
    e.persist()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleLoginSubmit = (e) => {
    e.preventDefault()
    this.props.devLogin(this.state)
    e.target.reset()
  }
  render() {
    return (

      <div className="col-12" style={{ minHeight: "70vh" }}>

        <form className="form-group" id="user-login" onSubmit={this.handleLoginSubmit} >
          <div className="input-group my-4 bg-hacktone">
            <div className="input-group-prepend  ">
              <span className="input-group-text bg-transparent  fas fa-user"></span>
            </div>
            <input
              type="text"
              className="form-control border-left-0 bg-transparent"
              placeholder="Your Email"
              required="required"
              name="email"
              onChange={this.handleLoginInput}
            />
          </div>

          <div className="input-group my-4 bg-hacktone">
            <div className="input-group-prepend  ">
              <span className="input-group-text bg-transparent  fas fa-user-lock"></span>
            </div>
            <input
              type="password"
              className="form-control border-left-0 bg-transparent"
              placeholder="Your Password"
              required="required"
              name="password"
              onChange={this.handleLoginInput}
            />
          </div>
          <div className="input-group my-3 d-flex justify-content-between">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Remember password
                </label>
            </div>
            <Link to="/user/forgetpassword">Forget password</Link>
          </div>

          <div className="input-group my-4 d-flex justify-content-end">
            <input type="submit" className="btn btn-hack" value="Login" />
          </div>
        </form>
      </div>

    )
  }
}



export default connect(null, {devLogin})(UserLogin)
