import React, { Component } from 'react'
import illustration from '../assets/images/3661726.svg'
import '../assets/css/color.scss'
import '../assets/css/LandingPage.scss'
import Modal from '../components/Modal'
import { Link } from 'react-router-dom'
import AuthTab from '../components/AuthTab'

export class LandingPage extends Component {
  state = {
    isUserOpen: false,
    isAdminOpen: false,
    isLoginOpen: false,
    isSignupOpen: false
  }
  handleClose = (type) => {
    if (type === 'User') {
      this.setState({
        isUserOpen: false
      })
    }
    if (type === 'Admin') {
      this.setState({
        isAdminOpen: false
      })
    }
    if (type === 'Login') {
      this.setState({
        isLoginOpen: false
      })
    }
    if (type === 'Signup') {
      this.setState({
        isSignupOpen: false
      })
    }
  }
  handleOpen = (type) => {
    if (type === 'User') {
      this.setState({
        isUserOpen: true
      })
    }
    if (type === 'Admin') {
      this.setState({
        isAdminOpen: true
      })
    }
    if (type === 'Login') {
      this.setState({
        isLoginOpen: true
      })
    }
    if (type === 'Signup') {
      this.setState({
        isSignupOpen: true
      })
    }
  }
  render() {
    return (
      <>
        { this.state.isUserOpen && (<Modal closeModal={()=>this.handleClose('User')} >
          <AuthTab
            tab_one='Sign Up'
            tab_two='Login'
            tab_three='User'
             />
        </Modal>)}
        { this.state.isAdminOpen && (<Modal closeModal={()=>this.handleClose('Admin')} >
          <AuthTab
            tab_one='Sign Up'
            tab_two='Login'
            tab_three='Admin'
             />
        </Modal>)}
        { this.state.isLoginOpen && (<Modal closeModal={()=>this.handleClose('Login')} >
          <AuthTab
            tab_one='Developer'
            tab_two='Company'
            tab_three='Signin'
             />
        </Modal>)}
        { this.state.isSignupOpen && (<Modal closeModal={()=>this.handleClose('Signup')} >
          <AuthTab
            tab_one='Developer'
            tab_two='Company'
            tab_three='Register'
            />
        </Modal>)}
        <div className="container-fluid LandingPage" style={{ height: "15vh" }}>
          <div className="row d-flex justify-content-between align-items-center" style={{ height: "100%" }}>
            <div className="col-12 col-md-3 ml-5"><h5>Hackerrankz</h5></div>
            <div className="col-12 col-md-5">
              <button className="btn btn-hack m-2 px-5" onClick={()=>this.handleOpen('Login')}>Login</button>
              <button className="btn btn-outline-hack m-2 px-5" onClick={()=>this.handleOpen('Signup')}>Sign Up</button>
            </div>
          </div>
          <div className="row d-flex justify-content-end align-items-center  flex-wrap-reverse" style={{ minHeight: "70vh" }}>
            <div className="col-12 col-md-5">
              <h4>Matching developers with great companies</h4>
              <div className="row">
                <div className="col-12 col-md-6 my-3">
                  <Link style={{ color: "inherit", height: "100%" }} className="action d-flex flex-column justify-content-between"onClick={()=>this.handleOpen('Admin')}>
                    <div className="w-100">
                      <h5><strong>For Companies</strong></h5>
                    </div>
                    <div className="w-100">
                      <p>We are the market-leading technical interview platform to identify and hire developers in Link remote first world</p>
                    </div>
                    <div className="w-100">
                      <button className="btn btn-hack">Start Remote Hiring</button>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-md-6 my-3">
                  <Link style={{ color: "inherit", height: "100%" }} className="action d-flex flex-column justify-content-between" onClick={()=>this.handleOpen('User')}>
                    <div className="w-100">
                      <h5><strong>For Developers</strong></h5>
                    </div>
                    <div className="w-100">
                      <p>Join over 11 million developers, practice coding skills, prepare for interviws, and get hired.</p>
                    </div>
                    <div className="w-100">
                      <button className="btn btn-hack">Sing Up & Code</button>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
            <div className="col-12 col-md-6"><img src={illustration} alt="" className="img-fluid" /></div>
          </div>
        </div>
      </>
    )
  }
}

export default LandingPage
