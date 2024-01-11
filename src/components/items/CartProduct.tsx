import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props{
    imageUrl:string
    name:string
    description:string
    price:number
}

function CartProduct({imageUrl='', name='', description='', price=0} :Props) {
    return (
        <li className='w-[400px] '>

            
                <Link href={`/products/oneProduct`} className='w-full flex flex-col'>
                
            
                <div className='w-full h-[400px] relative'>
                    {imageUrl && imageUrl.length > 0 ?
                    <Image src={`/images/${imageUrl}`} alt='' fill className='object-cover'/>
                    :
                    <span>{`Pas d'image`}</span>
                    }
                </div>
                <div className='flex flex-col space-y-2'>
                    <h3 className='capitalize text-base font-medium'>{name}</h3>
                    <p className=' text-base text-[#707072] font-medium'>{description}</p>
                    <p className=' text-base text-[#707072] font-medium'>{`${price} €`}</p>
                </div>
            </Link>
        </li>
    )
}

export default CartProduct
