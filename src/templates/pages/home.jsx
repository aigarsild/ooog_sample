import React ,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Portfolio from './portfolio';
import Contact from './contact';


class Home extends Component {

    render() {
        return (
            <Router>
            <section>
                <section className="d-flex align-content-center flex-wrap min-vh-100">
                    <h1 className="display-4 text-center w-100 font-weight-bold">Agile web development.</h1>
                    <p className="lead text-center w-100">Solutions based on research and tests that are validated by the end user.</p>
                    <div className="w-100 text-center">
                        
                           <Link to="/contact" className="btn btn-dark font-weight-bold m-4 pt-3 pb-3 pl-5 pr-5">get in touch</Link>
                             <Link to="/portfolio" className="btn btn-dark font-weight-bold m-4 pt-3 pb-3 pl-5 pr-5">see portfolio</Link>
                        
                           <Switch>
                              <Route path="/portfolio">
                                  <Portfolio />
                              </Route>

                              <Route path="/contact">
                                  <Contact />
                              </Route>
                           </Switch>
                    </div>
                </section>
                
                <section className="light-section d-flex align-content-center flex-wrap min-vh-100 row">
                    <div className="container">
                        <div className="row">
                    <div className="col mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://cdn.dribbble.com/users/660812/screenshots/3979501/fffff.jpg" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h2 className="card-title font-weight-bold">Design</h2>
                                    <div className="card-text font-weight-light">
                                        <ul className="list-unstyled">
                                           <li>Design research</li>
                                           <li>UI / UX</li>
                                           <li>Interaction design</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://cdn.dribbble.com/users/660812/screenshots/4938805/group_3.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title font-weight-bold">Development</h2>
                                <div className="card-text font-weight-light">
                                    <ul className="list-unstyled">
                                       <li>Clean and fast code</li>
                                       <li>Prototyping and testing</li>
                                       <li>Custom web solutions and consulting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="d-flex align-content-center flex-wrap min-vh-100">
                    <p className="display-4 font-weight-bold text-center w-100">From an idea to a working solution.</p>
                </section>

                <section className="d-flex align-content-center flex-wrap min-vh-100">
                    <div className="container">
                        <div className="row">
                        <h2 className="display-4 font-weight-bold text-center w-100">Our experience.</h2>
                    <p className="lead text-center w-70">
                        We are an international web solutions specialists, headquartered in Tallinn, with clients across all over Europe.
                        Our mission is to build best web experiences for our client business gains
                    </p>
                    <div className="w-100 text-center">
                        
                    <Link to="/contact" className="btn btn-dark font-weight-bold m-4 pt-3 pb-3 pl-5 pr-5">get in touch</Link>
                           <Link to="/portfolio" className="btn btn-dark font-weight-bold m-4 pt-3 pb-3 pl-5 pr-5">see portfolio</Link>
                    </div>
                        </div>
                    </div>
                </section>
            </section>
            </Router>
        );
    }
}

export default Home;