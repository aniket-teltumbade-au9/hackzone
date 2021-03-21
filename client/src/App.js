import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GenerateProblemPage from './pages/Admin/GenerateProblemPage';
import LandingPage from './pages/LandingPage';
import SingleProblemPage from './pages/User/SingleProblemPage';
import ProblemsPage from './pages/User/ProblemsPage';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isAuthenticated, logout } from './redux/actions/authActions';
import AdminDashboard from './pages/Admin/AdminDashboard';
import UserDashboard from './pages/User/UserDashboard';
import Navbar from './components/Navbar';

class App extends Component {
  componentDidMount = () => {
    this.props.isAuthenticated()
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.authDetails.isAuth !== this.props.authDetails.isAuth) {
      this.props.isAuthenticated()
    }
  }
  Logout = () => {
    this.props.logout()
  }
  render() {
    return (
      this.props.authDetails ? (

        this.props.authDetails.isAuth === true ? (
          this.props.authDetails.role === 'developer' ? (
            <>
              <BrowserRouter>
                <Navbar userData={this.props.authDetails.userProfile} handleLogout={this.Logout} />
                <Switch>
                  <Route exact path='/challenge/single/:name' component={SingleProblemPage} />
                  <Route exact path='/challenge/add' component={GenerateProblemPage} />
                  <Route exact path='/challenge/list' component={ProblemsPage} />
                  <Route exact path='/' component={UserDashboard} />
                </Switch>
              </BrowserRouter>
            </>
          ) : (
            <BrowserRouter>
              <Switch>
                <Route exact path='/challenge/single/:name' component={SingleProblemPage} />
                <Route exact path='/challenge/add' component={GenerateProblemPage} />
                <Route exact path='/challenge/list' component={ProblemsPage} />
                <Route exact path='/' component={AdminDashboard} />
              </Switch>
            </BrowserRouter>
          )
        ) : (
          <BrowserRouter>
            <LandingPage />
          </BrowserRouter>
        )
      ) : "Loading"
    )
  }
}

const mapStateToProps = (storeState) => {
  console.log(storeState)
  return { authDetails: storeState.authState }
}

export default connect(mapStateToProps, { isAuthenticated, logout })(App)
