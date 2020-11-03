import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Home from './user/pages/Auth.js'
import Users from './user/pages/Users.js'
import Books from './books/pages/UserBooks.js'
import Login from './user/pages/Auth.js'


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const routes = [
  { path: '/home', name: 'Home', Component: Home },
  { path: '/users', name: 'Users', Component: Users },
  { path: '/books', name: 'Books', Component: Books },
  { path: '/auth', name: 'Login', Component: Login },
]

function Example() {
  return (
    <Router>
      <>
        <Navbar bg="light">
          <Nav className="mx-auto">
            {routes.map(route => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName="active"
                exact
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
        <Container className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
      </>
    </Router>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Example />, rootElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
