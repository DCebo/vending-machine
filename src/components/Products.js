import React from 'react'
import SodaButton from './SodaButton'
import ProductReturn from './ProductReturn'
import '../css/Products.css'

function Products() {
    return (
        <div className="product_container">
                <div className="soda_rows">
                    <div className="soda_row">
                        <SodaButton />
                        <SodaButton />
                        <SodaButton />
                        <SodaButton />
                        <SodaButton />
                    </div>
                </div>

                <div className="product_return">
                    <ProductReturn />
                </div>
            </div>
    )
}

export default Products
