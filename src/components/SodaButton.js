import React, {Component} from 'react'
import '../css/SodaButton.css';
import soda from '../images/blue.png'


function SodaButton(props) {
    return (
            <button className="soda_button">
                <img className="soda_img" 
                    src={soda}
                    alt="" 
                />
                
                <div className="soda_name">

                </div>

                <div className="soda_price">
                    
                </div> 
            </button>       
    );
}

export default SodaButton;