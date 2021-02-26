import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="mb-5 navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/">Ticket Master</a>
            <ul className="ml-auto navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-primary" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="/users/login">  Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="/users/register">  Register</a>
              </li>
            </ul>
        </nav>

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/users/register" component={Register} />
          <Route path="/users/login" component={Login}  />
        </Switch>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
