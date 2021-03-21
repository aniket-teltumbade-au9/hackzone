import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GenerateProblemPage from './pages/Admin/GenerateProblemPage';
import LandingPage from './pages/LandingPage';
import SingleProblemPage from './pages/User/SingleProblemPage';
import ProblemsPage from './pages/User/ProblemsPage';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isAuthenticated } from './redux/actions/authActions';

class App extends Component {
  componentDidMount = () => {
    this.props.isAuthenticated()
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/challenge/single/:name' component={SingleProblemPage} />
          <Route exact path='/challenge/add' component={GenerateProblemPage} />
          <Route exact path='/challenge/list' component={ProblemsPage} />
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (storeState) => {
  console.log(storeState)
  return {}
}

export default connect(mapStateToProps, { isAuthenticated })(App)
