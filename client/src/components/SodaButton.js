import React from 'react'
import '../css/SodaButton.css';


function SodaButton({src, name, qty, cost}) {
    return (
            <button className="soda_button">
                <div className="soda_name">
                    {name}
                    {/* INSERT NAME FROM BACKEND */}
                </div>

                <div className="soda_price">
                    $ {cost}
                    {/* INSERT PRICE FROM BACKEND */}
                </div> 

                <img className="soda_img" 
                    src={src}
                    alt="" 
                />

                <div className="soda_stock">
                    QTY: {qty}
                </div>
            </button>       
    );
}

export default SodaButton;