import React ,{ Component } from 'react';
import Form from '../../components/formComponent'
import { Helmet } from 'react-helmet';


class Contact extends Component {
    render() {
        return (
            <section className="light-section d-flex align-content-center flex-wrap min-vh-100 row">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Jalgratta hooldus ja parandus kontakt</title>
                    <link rel="canonical" href="https://kauplusrattapood.ee/contact" />
                    <meta name="description" content="Lepime aja kokku ja tuleme teie rattale järgi" />
                </Helmet>
                    <div className="container">
                        <div className="row">
                            <div className="lead text-center w-100">
                                <h1 className="display-4 text-center w-100 font-weight-bold mb-5">Kontakt</h1>
                                <p><a href="mailto:laagri.rattahooldus@gmail.com?Subject=Rattahooldus%20lehelt" target="_top"> laagri.rattahooldus@gmail.com </a></p>
                                <p><a href="tel:+37256861763">56 86 17 63</a></p>
                                <p>Veskitammi 15, Laagri</p>
                                <p className="font-weight-bold">Oleme tegevuses:</p>
                                <p>E-R  10 - 19</p>
                                <p>L    10 - 17 </p>
                                <p>P    Suletud</p>
                            </div>
                            <Form tel="true" formMessage="Kui tekkis küsimusi siis kirjutage meile!" formOrigin="Kontakt"></Form>
                        </div>
                    </div>
                </section>
        );
    }
}

export default Contact;