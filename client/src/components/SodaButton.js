import React, {Component} from 'react'
import '../css/SodaButton.css';
import total from '../scripts/vars'


function SodaButton({src, name, qty, cost}) {

    const calc = () => {
        if (total === 0){
            var message = "INSERT MONEY";
        } else {
            console.log('purchased');
        }
    }

    return (
            <button className="soda_button" onClick={(e) => (
                calc()
            )}>
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