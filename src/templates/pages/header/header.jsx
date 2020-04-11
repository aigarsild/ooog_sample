import React ,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../about';
import Home from '../home';
import Contact from '../contact';
import Portfolio from '../portfolio';

class Header extends Component {

    render() {
        return (

            <Router>
                <header className="row light-section navbar-light sticky-top">
                    <div className="container">
                        <div className="row">
                            <p className="col navbar-brand pb-0 font-weight-bold">OOOG.</p>
                            <nav className="col nav-wrap">
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">about</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/portfolio">how we work</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio />
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

