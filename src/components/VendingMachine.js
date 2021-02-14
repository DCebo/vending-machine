import React from 'react'
import Products from './Products'
import Payment from './Payment'
import '../css/VendingMachine.css'
import logo from '../images/itential-logo-r.svg'


function VendingMachine() {
    return (
        <div className="vending_machine">
            <div className="vending_machine_label">
                <img src={logo} alt=""/>
                <p>vending machine</p>
            </div>

            <div className="main">
                <Products />
                <Payment />
            </div>
        </div>
    )
}

export default VendingMachine
