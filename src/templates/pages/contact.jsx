import React ,{ Component } from 'react';


class Contact extends Component {
    render() {
        return (
            <section className="light-section d-flex align-content-center flex-wrap min-vh-100 row">
                    <div className="container">
                        <div className="row">
                        <div className="lead text-center w-100">
                          <h1 className="display-4 text-center w-100 font-weight-bold mb-5">Kontakt.</h1>
                         <p>email: <a href="mailto:laagri.rattahooldus@gmail.com?Subject=Rattahooldus%20lehelt" target="_top"> laagri.rattahooldus@gmail.com </a></p>
                         <p>telefon: <a href="tel:+37256861763">56 86 17 63</a></p>
                         <p>veskitammi 15, Laagri</p>
                        </div>
                        </div>
                        </div>
                </section>
        );
    }
}

export default Contact;