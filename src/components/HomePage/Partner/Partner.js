import React from 'react';
import { Rotate } from 'react-reveal';
import partner1 from "./../../../images/partner1.jpg";
import partner2 from "./../../../images/partner2.jpg";
import partner3 from "./../../../images/partner3.jpg";
import partner4 from "./../../../images/partner4.jpg";

const Partner = () => {
    return (
        <div className='container mt-5 mb-3'>
            <h2 className='text-center mb-4'>Our Partner</h2>
            <div className="row">
                <div className="col-md-12">
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <Rotate bottom left>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={partner1} class="card-img-top" alt="..." />

                                </div>
                            </div>
                        </Rotate>

                        <Rotate bottom right>
                        <div class="col">
                            <div class="card h-100">
                                <img src={partner2} class="card-img-top" alt="..." />

                            </div>
                        </div>
                        </Rotate>
                        <Rotate>
                        <div class="col">
                            <div class="card h-100">
                                <img src={partner3} class="card-img-top" alt="..." />

                            </div>
                        </div>
                        </Rotate>
                        <Rotate>
                        <div class="col">
                            <div class="card h-100">
                                <img src={partner4} class="card-img-top" alt="..." />

                            </div>
                        </div>
                        </Rotate>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Partner;