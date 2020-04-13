import React ,{ Component } from 'react';

import lihthooldusImg from '../../assets/img/bike.png';
import taishooldusImg from '../../assets/img/bike2.png';
import toodImg from '../../assets/img/tools.png';


class Home extends Component {

    render() {
        return (
        
            <section>
                <section className="d-flex align-content-center flex-wrap min-vh-100">
                    <h1 className="display-4 text-center w-100 font-weight-bold mb-4">Lepi aeg kokku ja me tuleme hooldame/parandame teie ratta.</h1>
                    <div className="lead text-center w-100">
                        Aja saate kokkuleppida kirjutades
                        <a href="mailto:laagri.rattahooldus@gmail.com?Subject=Rattahooldus%20lehelt" target="_top"> laagri.rattahooldus@gmail.com </a> 
                        või helistades <a href="tel:+37256861763">56 86 17 63</a> 
                        <p className="lead text-center w-100">Oleme varsti avamas füüsilist poodi Laagri keskuses.</p>
                    </div>
                    
                    <div className="w-100 text-center">
                        <a href="#hinnakiri" className="btn btn-dark font-weight-bold m-4 pt-3 pb-3 pl-5 pr-5">vaata hinnakirja</a>
                    </div>
                </section>
                
                <section className="light-section d-flex align-content-center flex-wrap min-vh-100 row">
                    <div className="container" id="hinnakiri">
                    <h1 className="display-4 text-center w-100 font-weight-bold mb-5">Hinnakiri.</h1>
                        <div className="row">
                        <div className="col mb-4">
                        <div className="card border-0 shadow">
                            <img src={lihthooldusImg} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h2 className="card-title font-weight-bold">Lihthooldus 35€</h2>
                                    <div className="card-text font-weight-light">
                                        <ul className="list-unstyled">
                                            <span className="font-weight-bold mb-2">Lihthooldus sisaldab:</span>
                                           <li className="mb-2">käikude, koonuste, pidurite, kaelakausside reguleerimine</li>
                                           <li className="mb-2">jooksude rihtimine</li>
                                           <li className="mb-2">hüdraulilistel piduritel vajadusel õli lisamine</li>
                                           <li className="mb-2">keti õlitamine</li>
                                           <li className="mb-2">kummide pumpamine</li>
                                           <li className="mb-2">lihtsamate osade vahetamine (kett, piduriklotsid, tross jne)</li>
                                           <li className="mb-2">edasise hoolduse soovitused</li>
                                           <li className="mb-2">lihthoolduse teostame kohapeal</li>
                                           <li className="mb-2">hind ei sisalda varuosi</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card border-0 shadow">
                            <img src={taishooldusImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title font-weight-bold">Täishooldus 65€</h2>
                                <div className="card-text font-weight-light">
                                    <ul className="list-unstyled">
                                    <span className="font-weight-bold mb-2">Täishoolduse korral lisandub lihthooldusele:</span>
                                       <li className="mb-2">rummude, kaelakausside ja keskjooksu puhastamine/määrimine</li>
                                       <li className="mb-2">kõikide vahetamist vajavate osade vahetus</li>
                                       <li className="mb-2">hind ei sisalda varuosi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col mb-4">
                        <div className="card border-0 shadow">
                            <img src={toodImg} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h2 className="card-title font-weight-bold">Ülejäänud tööd</h2>
                                    <div className="card-text font-weight-light">
                                        <ul className="list-unstyled">
                                           <li className="mb-2">Rattapesu 15 - 25€</li>
                                           <li className="mb-2">Ekspress hooldus 95€</li>
                                           <li className="mb-2">Töökoja töötund 35€</li>
                                           <li className="mb-2">Väiksemad tööd nagu sisekummi vahetus jms lisandub väljasõidu hind 10€</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                        </div>
                    </div>
                </section>

                <section className="d-flex align-content-center flex-wrap min-vh-100">
                    <div className="container">
                        <div className="row">
                        <h2 className="display-5 font-weight-bold text-center w-100">Taastame ka ise rattaid müügiks. Varsti saab ka vaatama tulla. Lisainfo saamiseks kirjutage
                        <a className="font-weight-bold" href="mailto:laagri.rattahooldus@gmail.com?Subject=Rattahooldus%20lehelt" target="_top"> laagri.rattahooldus@gmail.com </a> 
                        või helistage <a className="font-weight-bold" href="tel:+37256861763">56 86 17 63</a>
                    </h2>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Home;