import React from 'react';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';
import './Footer.css'
const Footer = () => {
    return (
        <div>
<footer class="footer-distributed">

    <div class="footer-left">

        <h3>Free <span>Run</span></h3>
    </div>

    <div class="footer-center">

        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>House 428(1st Floor), Road 30,
Mohakhali DOHS,</span>  Dhaka, Bangladesh</p>
        </div>

        <div>
            <i class="fa fa-phone"></i>
            <p>+88-01971-321446</p>
        </div>

        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">info@freerun.net</a></p>
        </div>

    </div>

    <div class="footer-right">

        <p class="footer-company-about">
            <span>About the company</span>
            Free Run is a travel agency to plan all kinds tours. We assist on planning home and abroad tours. We also serve ticketing and other necessary requirements for any tour. Free Run is the first choice of adventures people
        </p>

        <div class="footer-icons">

            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>

        </div>

    </div>
                <div className="copyright mt-3 text-center text-light">
                <small>&copy; 2021 By Arifur Rahman Razon</small>
            </div>

</footer>

        </div>
    );
};

export default Footer;