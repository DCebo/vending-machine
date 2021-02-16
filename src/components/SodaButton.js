import React from 'react'
import '../css/SodaButton.css';

function SodaButton({image}) {
    return (
            <button className="soda_button">
                <div className="soda_name">
                    SODA
                    {/* INSERT NAME FROM BACKEND */}
                </div>

                <div className="soda_price">
                    $
                    {/* INSERT PRICE FROM BACKEND */}
                </div> 

                <img className="soda_img" 
                    src={image}
                    alt="" 
                />

                <div className="soda_stock">
                    QTY:
                </div>
            </button>       
    );
}

export default SodaButton;