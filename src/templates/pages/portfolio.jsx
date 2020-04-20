import React ,{ Component } from 'react';

import Prices from '../../components/pricesComponent'

class Portfolio extends Component {
    render() {
        return (
            <section className="prices-section light-section d-flex align-content-center flex-wrap min-vh-100 row">
                <div className="container">
                    <Prices></Prices>
                </div>
            </section>
        );
    }
}

export default Portfolio;