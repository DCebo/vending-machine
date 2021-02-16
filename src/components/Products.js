import React from 'react'
import SodaButton from './SodaButton'
import ProductReturn from './ProductReturn'
import '../css/Products.css'
import blue_soda from '../images/blue.png'
import red_soda from '../images/red.png'

function Products() {
    return (
        <div className="product_container">
                <div className="soda_rows">
                    <div className="soda_row">
                        {/* GET QUANTITY OF SODAS AVAILABLE THEN INSERT IMAGE */}
                        <SodaButton image={red_soda}/>
                        <SodaButton image={blue_soda}/>
                        <SodaButton image={red_soda}/>
                        <SodaButton image={blue_soda}/>
                    </div>
                </div>

                <div className="product_return">
                    <ProductReturn />
                </div>
            </div>
    )
}

export default Products
