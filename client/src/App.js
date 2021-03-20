import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GenerateProblemPage from './pages/Admin/GenerateProblemPage';
import LandingPage from './pages/LandingPage';
import SingleProblemPage from './pages/User/SingleProblemPage';
import ProblemsPage from './pages/User/ProblemsPage';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* {localStorage.getItem('userToken')?} */}
        <Route exact path='/challenge/single/:name' component={SingleProblemPage} />
        <Route exact path='/challenge/add' component={GenerateProblemPage} />
        <Route exact path='/challenge/list' component={ProblemsPage} />
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
