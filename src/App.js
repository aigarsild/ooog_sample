import React ,{ Component } from 'react';
import Header from './templates/pages/header/header';

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="container-fluid">
                <Header></Header>
            </section>
        );
    }
}

export default Portfolio;