import React, { Component } from 'react';
import wheelImg from '../../assets/img/bikepic.jpeg';
import { Helmet } from 'react-helmet';


class About extends Component {
    render() {
        return (
            <section className="light-section d-flex align-content-center flex-wrap min-vh-100">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Jalgratta poe meeskond</title>
                    <link rel="canonical" href="https://kauplusrattapood.ee/about" />
                    <meta name="description" content="Jalgrattapoe tiim koosneb kogenud ratturitest" />
                </Helmet>
                <div className="container">
                    <div className="row">
                        <div className="lead w-100">
                            <h1 className="display-4 text-center w-100 font-weight-bold mb-5">Meist</h1>

                            <h2 className="display-5 text-center w-100 font-weight-bold mb-5">Jalgrattapoe tiim koosneb kogenud ratturitest</h2>
                            <div className="img-wrap rounded mr-4 float-left"><img src={wheelImg} className="img-fluid" alt="jalgratas"></img></div>
                            <p>Rattafännide ja igapäevaste ratturitena oleme läbi aastate pidanud kogema seda kui palju aega ja tähelepanu velod vajavad. Meie mehaanik on suure osa oma elust elanud jalgrattakultuuri pealinnas Kopenhaagenis. Ta vuntsis üles ja ehitas neid seal lugematul hulgal. Võib öelda, et rattad on tema suurim kirg elus. Tagasi Eestisse naastes otsustas ta avada oma rattapoe. </p>
                            <p>Meie mehaanik on Laagri rattapoe süda. Tema kogemuste pagasi tõttu suudame kiirelt kaardistada sinu ratta vajadused ja anda talle tagasi tema elu parima vormi. </p>
                            <p className="mb-5">Hoolitseme su ratta eest, et su ratas saaks sinu eest hoolitseda.</p>

                            <h2 className="display-5 text-center w-100 font-weight-bold mb-5">Oleme mobiilsed ja kontaktivabad</h2>
                            <p>Avame varsti füüsilise töökoja Laagris.</p>
                            <p className="mb-5">
                                Üleandmine võib olla ka täiesti kontaktivaba. Näiteks: lepime kellaaja kokku ja jäta oma ratas maja ette või värava taha. Peale rattahooldust lepime aja kokku ja toome hooldatud jalgratta kokku lepitud kohta tagasi.
                            </p>
                            <p className="mb-5 mt-5">.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;