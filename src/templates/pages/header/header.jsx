import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ScrollToTop from '../../../components/ScrollToTop'

import About from '../about';
import Home from '../home';
import Contact from '../contact';
import Portfolio from '../portfolio';
import Success from '../success';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showNav: false
        }

    }

    handleClick(e) {
        this.setState({
            showNav: !this.state.showNav
        });

    }

    render() {
        return (

            <Router>
                <header className="row light-section navbar-light sticky-top">
                    <div className="container">
                        <div className="row">
                            <Link to="/" className="col navbar-brand pb-0 font-weight-bold">Kauplusrattapood</Link>
                            <div onClick={this.handleClick.bind(this)} className={this.state.showNav ? 'active hamburger' : 'hamburger'}>
                                <div className="hamburger-icon"></div>
                            </div>
                            
                                <nav className={this.state.showNav ? 'show-nav col' : 'col nav-wrap'}>
                                    <ul className="nav justify-content-end">
                                        <li className="nav-item">
                                            <Link onClick={this.handleClick.bind(this)}  className="nav-link" to="/">Pealeht</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link onClick={this.handleClick.bind(this)} className="nav-link" to="/about">Meist</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link onClick={this.handleClick.bind(this)} className="nav-link" to="/portfolio">Hinnakiri</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link onClick={this.handleClick.bind(this)} className="nav-link" to="/contact">Kontakt</Link>
                                        </li>
                                    </ul>
                                </nav>
                            
                        </div>
                    </div>
                </header>

                <ScrollToTop>
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
                    <Route path="/success">
                        <Success />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                </ScrollToTop>
            </Router>
        );
    }
}

export default Header;

