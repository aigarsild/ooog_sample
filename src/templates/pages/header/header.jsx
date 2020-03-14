import React ,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../about';
import Home from '../home';
import Contact from '../contact';

class Header extends Component {

    render() {
        return (

            <Router>
                <header className="light-section row navbar-light sticky-top">
                    <div className="container">
                        <div className="row">|
                            <h2 className="col navbar-brand">OOOG.</h2>
                            <nav className="col">
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
            </Router>
        );
    }
}

export default Header;