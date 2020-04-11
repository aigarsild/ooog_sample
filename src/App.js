import React ,{ Component } from 'react';
import Header from './templates/pages/header/header';
import Footer from './templates/pages/footer/footer';

class Portfolio extends Component {
    
    render() {
        return (
            <section className="container-fluid">
                <Header></Header>
                <Footer></Footer>
            </section>
        );
    }
}

export default Portfolio;