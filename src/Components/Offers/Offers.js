import React from 'react';
import {Link} from 'react-router-dom';
import './Offers.css'
const Offers=() => {
    //for homepage part
    return (
        <div className='offer-container container py-3'>
            <h2 className='offer-title my-4'>OUR NOVEMBER OFFER</h2>
            <div className="row justify-content-center align-items-center mt-5">
                <div className="offer-img col-md-5">
                    <img className='img-fluid ' src="https://i.ibb.co/QH7Vcqr/sea.jpg" alt="sea" />
                </div>
                <div className="offer-text-part col-md-5">
                    <h2 className='offer-text'> Saint Martin & Cox's Bazar 4 days 5 nights super saver plan at only 5500 taka per person</h2>
                    <p>This is a great offer for sea lovers. So don't wait just grab the offer. Seats are limited. Offer includes all tickets, hotel costs, guide costs. Our expert tourist guide will be there for you always. </p>
                    <p>
                        You can book anytime in this month. Our travel group will go every thursday of this month. We have 4 different dates so you can pick anyone of them.
                    </p>
                    <p>
                        Travel group will stay 2 days in saint martin as well as two days in cox's bazar. So you will feel the sea perfectly.
                    </p>
                    <p>
                        St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip.
                    </p>
                    <p>
                        Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.
                    </p>
                    <Link to='/placeorder/617c3c0b94ec17985aed85b3'>
                    <button className='book-btn'>
                        Book Now
                    </button></Link>

                </div>
            </div>

        </div>
    );
};

export default Offers;