import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compLogin } from '../../redux/actions/authActions'

class AdminLogin extends Component {
  state = {
    email: null,
    password: null
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.compLogin(this.state)
    e.target.reset()
  }
  render() {
    return (

      <div className="col-12" style={{ minHeight: "70vh" }}>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <div className="input-group my-4 bg-hacktone">
            <div className="input-group-prepend  ">
              <span className="input-group-text bg-transparent  fas fa-user"></span>
            </div>
            <input
              type="text"
              className="form-control border-left-0 bg-transparent"
              placeholder="Your Email"
              name="email"
              onChange={this.handleInput}
              required="required" />
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
              onChange={this.handleInput}
            />
          </div>
          <div className="input-group my-3 d-flex justify-content-between">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" ></input>
              <label className="form-check-label" for="flexCheckChecked">
                Remember password
                </label>
            </div>
            <Link to="/user/forgetpassword">Forget password</Link>
          </div>

          <div className="input-group my-4 d-flex justify-content-end">
            <input type="button" className="btn btn-hack" value="Login" />
          </div>
        </form>
      </div>

    )
  }
}



export default connect(null, { compLogin })(AdminLogin)
