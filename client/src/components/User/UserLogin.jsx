import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UserLogin extends Component {
  render() {
    return (
      
      <div className="col-12" style={{ minHeight:"70vh"}}>
        
        <form className="form-group" >
          <div className="input-group my-4 bg-hacktone">
            <div className="input-group-prepend  ">
              <span className="input-group-text bg-transparent  fas fa-user"></span>
            </div>
            <input type="text" className="form-control border-left-0 bg-transparent" placeholder="First & Last name" required="required" />
          </div>

          <div className="input-group my-4 bg-hacktone">
            <div className="input-group-prepend  ">
              <span className="input-group-text bg-transparent  fas fa-user-lock"></span>
            </div>
            <input type="password" className="form-control border-left-0 bg-transparent" placeholder="Your Password" required="required" />
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
