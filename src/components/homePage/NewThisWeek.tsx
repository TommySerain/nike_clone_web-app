import React from 'react'
import Image from 'next/image'
import ProductList from '../items/ProductList'

function NewThisWeek() {
    return (
        <section className='w-full flex flex-col p-12 space-y-5'>
            <h2 className='text-2xl'>{`Nouveau cette semaine`}</h2>
            <ProductList/>
        </section>
    )
}

export default NewThisWeek
