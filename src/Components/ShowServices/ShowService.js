import React, {useEffect} from 'react';
import Services from '../Services/Services';
import './ShowService.css'
const ShowService=() => {
     //changing title
    // This effect runs once, after the first render
    useEffect(() => {
        document.title="SEAKERS PACKAGES";
    }, []);
    return (
        <div>
<Services></Services>
        </div>
    );
};

export default ShowService;