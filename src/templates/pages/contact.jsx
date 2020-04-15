import React ,{ Component } from 'react';
import Form from '../../components/form'


class Contact extends Component {
    render() {
        return (
            <section className="light-section d-flex align-content-center flex-wrap min-vh-100 row">
                    <div className="container">
                        <div className="row">
                            <div className="lead text-center w-100">
                                <h1 className="display-4 text-center w-100 font-weight-bold mb-5">Kontakt</h1>
                                <p><a href="mailto:laagri.rattahooldus@gmail.com?Subject=Rattahooldus%20lehelt" target="_top"> laagri.rattahooldus@gmail.com </a></p>
                                <p><a href="tel:+37256861763">56 86 17 63</a></p>
                                <p>Veskitammi 15, Laagri</p>
                            </div>
                            <Form formMessage="Kui tekkis küsimusi siis kirjutage meile!" formOrigin="Kontakt"></Form>
                        </div>
                    </div>
                </section>
        );
    }
}

export default Contact;