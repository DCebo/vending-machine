import React from 'react'
import Products from './Products'
import '../css/VendingMachine.css'
import logo from '../images/itential-logo-r.svg'


function VendingMachine() {
    return (
        <div className="machine">
            <div className="vending_machine_label">
                <img src={logo} alt=""/>
                <p>vending machine</p>
            </div>

            <div className="main">
                <Products />
            </div>
        </div>
    )
}

export default VendingMachine
