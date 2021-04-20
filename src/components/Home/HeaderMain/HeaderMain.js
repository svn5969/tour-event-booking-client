import React from 'react';
import Slider from '../Slider/Slider';

// import feature from '../../Image/feature.png'
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section className="container head">
            <div className="row d-flex">
             
                <div className="col-md-6 mt-5 pt-5">
                    <h1>Moments you won’t forget</h1>
                    <p>Congratulations,  you’re getting Experienced! This is a time for joy, so definitely take it all in – pop some champagne, get all blessed out on your soon-to-be boo for life.</p>
                    <div class="svg">
                        <a class="button" href="/">
                            <svg>
                                <rect height="40" width="130" fill="transparent" />
                            </svg>
                            <span>Book Event</span>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* <img style={{ width: '100%' }} src={feature} alt="" /> */}
                   <Slider></Slider>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;