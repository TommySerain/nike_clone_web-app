import React from 'react'
import CartProduct from './CartProduct'

function ProductList() {
    return (
        <ul className='flex space-x-4'>
            <CartProduct imageUrl='chaussure1.png' name='chaussure 1' description='super chaussure' price={50}/>
            <CartProduct imageUrl='chaussure2.png' name='chaussure 2' description='super chaussure' price={50}/>
            <CartProduct imageUrl='chaussure3.png' name='chaussure 3' description='super chaussure' price={50}/>
            <CartProduct imageUrl='chaussure4.png' name='chaussure 4' description='super chaussure' price={50}/>
        </ul>
    )
}

export default ProductList
