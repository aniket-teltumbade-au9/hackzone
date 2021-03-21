import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compRegister } from '../../redux/actions/authActions'

class AdminSignup extends Component {
  state = {
    email: null,
    password: null,
    full_name: null,
    phone_number: null,
    company: null,
    company_size: null,
    country: null,
    role: null
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    this.props.compRegister(this.state)
    e.target.reset()
  }
  render() {
    return (
      <div className="col-12 overflow-auto" style={{ minHeight: "70vh", maxHeight: '80vh' }}>
        <form className="row" onSubmit={this.handleSubmit} >
          <div className="col-md-6 m-0">
            <div className="form-group  ">
              <label htmlFor="businessEmail">Business Email</label>
              <input
                type="email"
                id="businessEmail"
                className="form-control border-left-0 bg-hacktone"
                required="required"
                name="email"
                onChange={this.handleInput}
              />
            </div>
          </div>

          <div className="col-md-6 m-0">
            <div className="form-group  ">
              <label htmlFor="businessPassword">Password</label>
              <input
                type="password"
                className="form-control border-left-0 bg-hacktone"
                id="businessPassword"
                required="required"
                name="password"
                onChange={this.handleInput}
              />
            </div>
          </div>

          <div className="col-md-6 m-0">
            <div className="form-group  ">
              <label htmlFor="fullName">Full Name</label>
              <input type="text"
                className="form-control border-left-0 bg-hacktone"
                id="fullName"
                required="required"
                name="full_name"
                onChange={this.handleInput}
              />
            </div>
          </div>

          <div className="col-md-6 m-0">
            <div className="form-group  ">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control border-left-0 bg-hacktone"
                id="phone"
                required="required"
                name="phone_number"
                onChange={this.handleInput}
              />
            </div>
          </div>

          <div className="col-md-6 m-0">
            <div className="form-group  ">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                className="form-control border-left-0 bg-hacktone"
                id="company"
                name="company"
                onChange={this.handleInput}
                required="required" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group  ">
              <label htmlFor="companySize">Company Size</label>
              <select
                className="form-control bg-hacktone"
                id="companySize"
                name="company_size"
                onChange={this.handleInput}
              >
                <option>1-100</option>
                <option>101-200</option>
                <option>201-1000</option>
                <option>1001-2000</option>
                <option>2001-4000</option>
                <option>4000+</option>
              </select>
            </div>
          </div>

          <div className="col-md-6 m-0">
            <div className="form-group  ">
              <label htmlFor="country">Country</label>
              <select 
              className="form-control bg-hacktone" 
              id="country"
              onChange={this.handleInput}
              name="country"
              >
                <option>Afganistan</option>
                <option>Bangladesh</option>
                <option>India</option>
                <option>Nepal</option>
                <option>Pakistan</option>
                <option>Sri Lanka</option>
              </select>
            </div>
          </div>


          <div className="col-md-6">
            <div className="form-group  ">
              <label htmlFor="adminRole">Role In Hiring Process</label>
              <select 
              className="form-control bg-hacktone" 
              id="adminRole"
              name="role"
              onChange={this.handleInput}
              >
                <option>Recruiting Team</option>
                <option>Hiring Manager</option>
                <option>Developer</option>
                <option>Education</option>
              </select>
            </div>
          </div>
          <div className="form-group col-12  d-flex justify-content-end">
            <input type="submit" className="btn btn-hack" value="Create An Account" />
          </div>
        </form>
      </div>

    )
  }
}


export default connect(null, { compRegister })(AdminSignup)
