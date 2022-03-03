import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Testimonial.css';
import testimonial1 from '../../../images/testinomial1.jpg';
import testimonial2 from '../../../images/testinomial2.jpg';
import testimonial3 from '../../../images/testinomial3.jpg';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Testimonial = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className='text-center'>
                    <h3>Our Testimonial</h3>
                    <p>best review , better responce</p>
                </div>
               <div className='row row-cols-1'>
                    <Carousel responsive={responsive}>
                    <div className='col'>
                        <div class="card" style={{ width: '25rem' }}>
                            <img src={testimonial1} className="card-img" alt="..." />
                            <div class="card-body">
                                <p style={{ color: '#9A9A9A' }} class="card-text text-center mb-5">Some quick example text to build on the card title and make up the bulk of the card's content.its amaizing work . i support it. a lot of service here. i satisfied all service</p>

                                <div className='text-center'>
                                    <h6>Ruby Spark</h6>
                                    <small style={{ color: '#9A9A9A' }}>CEO</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card rounded" style={{ width: '25rem' }}>
                            <img src={testimonial2} className="card-img" alt="..." />
                            <div class="card-body">
                                <p style={{ color: '#9A9A9A' }} class="card-text text-center mb-5">Some quick example text to build on the card title and make up the bulk of the card's content.its amaizing work . i support it. a lot of service here. i satisfied all service</p>

                                <div className='text-center'>
                                    <h6>Ruby Spark</h6>
                                    <small style={{ color: '#9A9A9A' }}>CEO</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" style={{ width: '25rem' }}>
                            <img src={testimonial3} className="card-img" alt="..." />
                            <div class="card-body">
                                <p style={{ color: '#9A9A9A' }} class="card-text text-center mb-5">Some quick example text to build on the card title and make up the bulk of the card's content.its amaizing work . i support it. a lot of service here. i satisfied all service</p>

                                <div className='text-center'>
                                    <h6>Ruby Spark</h6>
                                    <small style={{ color: '#9A9A9A' }}>CEO</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" style={{ width: '25rem' }}>
                            <img src={testimonial1} className="card-img" alt="..." />
                            <div class="card-body">
                                <p style={{ color: '#9A9A9A' }} class="card-text text-center mb-5">Some quick example text to build on the card title and make up the bulk of the card's content.its amaizing work . i support it. a lot of service here. i satisfied all service</p>

                                <div className='text-center'>
                                    <h6>Ruby Spark</h6>
                                    <small style={{ color: '#9A9A9A' }}>CEO</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                        <div className='col'>
                            <div class="card" style={{ width: '25rem' }}>
                                <img src={testimonial2} className="card-img" alt="..." />
                                <div class="card-body">
                                    <p style={{ color: '#9A9A9A' }} class="card-text text-center mb-5">Some quick example text to build on the card title and make up the bulk of the card's content.its amaizing work . i support it. a lot of service here. i satisfied all service</p>

                                    <div className='text-center'>
                                        <h6>Ruby Spark</h6>
                                        <small style={{ color: '#9A9A9A' }}>CEO</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </Carousel>;
               </div>

            </div>
        </div>
    );
};

export default Testimonial;