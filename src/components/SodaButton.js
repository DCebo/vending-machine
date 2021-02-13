import React from 'react'
import '../css/SodaButton.css';
import soda from '../images/blue.png'


function SodaButton(props) {
    return (
            <button className="soda_button">
                <div className="soda_name">
                    SODA
                    {/* INSERT NAME FROM BACKEND */}
                </div>

                <img className="soda_img" 
                    src={soda}
                    alt="" 
                />

                <div className="soda_price">
                    PRICE
                    {/* INSERT PRICE FROM BACKEND */}
                </div> 
            </button>       
    );
}

export default SodaButton;