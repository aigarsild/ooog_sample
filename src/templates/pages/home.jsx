import React ,{ Component } from 'react';

class Home extends Component {

    render() {
        return (
            <section>
                <section className="d-flex align-content-center flex-wrap min-vh-100">
                    <h1 className="display-3 text-center w-100">Agile web development.</h1>
                    <p className="lead text-center w-100">Solutions based on research and tests that are validated by the end user.</p>
                    <div className="w-100 text-center">
                        <span className="btn btn-outline-primary m-3">Get in touch</span>
                        <span className="btn btn-outline-primary m-3">See portfolio</span>
                    </div>
                </section>

                <section>

                </section>

                <section className="light-section d-flex align-content-center flex-wrap min-vh-100 row">
                    <div className="col mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://cdn.dribbble.com/users/660812/screenshots/3979501/fffff.jpg" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h2 className="card-title">Design</h2>
                                    <p className="card-text font-weight-light"><ul className="list-unstyled">
                                        <li>Design research</li>
                                        <li>UI / UX</li>
                                        <li>Interaction design</li>
                                    </ul></p>
                                </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://cdn.dribbble.com/users/660812/screenshots/4938805/group_3.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title">Development</h2>
                                <p className="card-text font-weight-light"><ul className="list-unstyled">
                                    <li>Clean and fast code</li>
                                    <li>Prototyping and testing</li>
                                    <li>Custom web solutions and consulting</li>
                                </ul></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="d-flex align-content-center flex-wrap min-vh-100">
                    <p className="display-3 text-center w-100">From an idea to a working solution.</p>
                </section>

                <section className="d-flex align-content-center flex-wrap min-vh-100">
                    <p className="display-3 text-center w-100">Our experience.</p>
                    <p className="lead text-center w-100">
                        We are an international web solutions specialists, headquartered in Tallinn, with clients across all over Europe.
                        Our mission is to build best web experiences for our client business gains
                    </p>
                    <div className="w-100 text-center">
                        <span className="btn btn-outline-primary m-3">Get in touch</span>
                        <span className="btn btn-outline-primary m-3">See portfolio</span>
                    </div>
                </section>
            </section>
        );
    }
}

export default Home;