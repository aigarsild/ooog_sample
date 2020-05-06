import React ,{ Component } from 'react';
import Prices from '../../components/pricesComponent'
import { Helmet } from 'react-helmet';

class Portfolio extends Component {
    render() {
        return (
            <section className="prices-section light-section d-flex align-content-center flex-wrap min-vh-100 row">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Jalgratta hooldus ja parandus teenused hinnakiri</title>
                    <link rel="canonical" href="https://kauplusrattapood.ee/hinnakiri" />
                    <meta name="description" content="Jalgratta hooldustööde hinnakiri" />
                </Helmet>
                <div className="container">
                    <Prices></Prices>
                </div>
            </section>
        );
    }
}

export default Portfolio;