import React ,{ Component } from 'react';


class About extends Component {
    render() {
        return (
            <section className="light-section d-flex align-content-center flex-wrap min-vh-100 row">
                    <div className="container">
                        <div className="row">
                        <div className="lead text-center w-100">
                          <h1 className="display-4 text-center w-100 font-weight-bold mb-5">Meist.</h1>
                            <p>Oleme grupp rattahuvilisi, kes on tegelnud ratastega väga pikka aega, nii sõitmise, kui ka ehitamisega.</p>
                            <p>Otsustasime avada rattahoolduse/poe Laagris, kuna ka ise elame siin ja teame, et paljud sõidavad siin ratastega, aga rattapoodi kuskil väga lähedal ei ole.</p>
                        </div>
                        </div>
                        </div>
                </section>
        );
    }
}

export default About;