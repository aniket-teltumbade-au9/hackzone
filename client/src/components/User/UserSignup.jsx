import React, { Component } from 'react'
import { connect } from 'react-redux'
import { devRegister } from '../../redux/actions/developerActions'

class UserSignup extends Component {
  state = {
    full_name: null,
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
    this.props.devRegister(this.state)
    e.target.reset()
  }
  render() {
    return (

      <div className="col-12" style={{ minHeight: "70vh" }}>
        <form className="form-group" onSubmit={this.handleSubmit} >
          <div className="input-group my-4 bg-hacktone">
            <div className="input-group-prepend  ">
              <span className="input-group-text bg-transparent  fas fa-user"></span>
            </div>
            <input
              type="text"
              name="full_name"
              className="form-control border-left-0 bg-transparent"
              placeholder="First & Last name"
              onChange={this.handleInput}
              required="required" />
          </div>
          <div className="input-group my-4 bg-hacktone">

            <div className="input-group-prepend">
              <span className="input-group-text bg-transparent  fas fa-envelope"></span>
            </div>
            <input
              type="email"
              name="email"
              className="form-control border-left-0 bg-transparent"
              placeholder="Email"
              onChange={this.handleInput}
              required="required" />
          </div>
          <div className="input-group my-4 bg-hacktone">

            <div className="input-group-prepend  ">
              <span className="input-group-text bg-transparent  fas fa-user-lock"></span>
            </div>
            <input
              type="password"
              name="password"
              className="form-control border-left-0 bg-transparent"
              placeholder="Your Password"
              onChange={this.handleInput}
              required="required" />
          </div>
          <div className="input-group my-4 d-flex justify-content-end">
            <input type="submit" className="btn btn-hack" value="Create An Account" />
          </div>
        </form>
      </div>

    )
  }
}

const mapStateToProps = (storeState) => {
  return { registerMsg: storeState.developerState.userRegister }
}


export default connect(mapStateToProps, { devRegister })(UserSignup)
