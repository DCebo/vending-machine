import React, {Component} from 'react'
import '../css/SodaButton.css';
import {total, message, coin_total} from '../scripts/vars'


function SodaButton({src, name, qty, cost, data}) {
    //! Function receiving obj sepcific to button 
    const calc = () => {
        console.log(data)
        console.log(data.cost)
        console.log(total)
        if (total === 0){
            var message = "INSERT MONEY";
        } else {
            console.log('purchased');
        }
    }

    return (
            <button className="soda_button" onClick={(e) => (
                calc({data})
            )}>
                <div className="soda_name">
                    {/* INSERT NAME FROM BACKEND */}
                    {name}
                </div>

                <div className="soda_price">
                    {/* INSERT PRICE FROM BACKEND */}
                    $ {cost}
                </div> 

                {/* INSERT SRC IMAGE FROM LOCAL */}
                <img className="soda_img" 
                    src={src}
                    alt="" 
                    />

                <div className="soda_stock">
                    {/* INSERT QUANTITY FROM BACKEND */}
                    QTY: {qty}
                </div>
            </button>       
    );
}

export default SodaButton;
export {message};
export {total};