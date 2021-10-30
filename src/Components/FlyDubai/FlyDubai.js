import React from 'react';
import {Link} from 'react-router-dom';
import './FlyDubai.css'
const FlyDubai=() => {
    //this part will added to placeorder for marketing new package
    return (
        <div className='dubai'>
            <h2 className='dubai-title' >Fly Dubai With Sea Kers</h2>

            <h3 className='dubai-subtitle' >Enjoy Our Luxary Tour in Dubai</h3>

            <h1 className='text-start m-4 dubai-head w-50' >Dubai  Atlantis Experience</h1>

            <p className='dubai-text m-4 w-50'>Enjoy a luxurious 4 night / 5-day visit to Dubai including a 1-night stay in the Atlantis Hotel. Experience the Lost Chambers Aquarium and the Aquaventure Water Park at the Atlantis. Also, Enjoy a unique Red Dunes Desert Safari experience followed by a sumptuous dinner and entertainment program. The tour also includes a Dubai City tour covering all the major attractions followed by a drop-off to Dubai Mall for the Fountain Show and a visit to the Burj Khalifa observatory located on the 124th Floor. Also, witness the fabulous illumination of The Dubai Marina while enjoying a lavish spread of Dinner on The Dhow Cruise.</p>

            <h2 className='dubai-cost w-50' >Package Cost: 250000 taka per person</h2>

            <Link to='/placeorder/617cf78ecd12f19838491380'>
                <button className="dubai-btn mt-5">Book Now</button>

            </Link>








        </div>
    );
};

export default FlyDubai;