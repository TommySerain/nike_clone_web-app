import React from 'react'
import Layout from '../components/layouts/Layout'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/16/solid'

function ProductView() {
    let sizes = ['EU 38.5', 'EU 39', 'EU 40', 'EU 40.5', 'EU 41', 'EU 42', 'EU 42.5', 'EU 43', 'EU 44', 'EU 44.5', 'EU 45', 'EU 45.5', 'EU 46', 'EU 47', 'EU 47.5', 'EU 48.5', 'EU 49.5' ]
    return (
        <Layout>
            <section className="flex w-full space-x-5 p-5">
                <div className=" flex w-44 flex-col space-y-5">
                    <div className="bg-black w-full h-20"></div>
                    <div className="bg-black w-full h-20"></div>
                    <div className="bg-black w-full h-20"></div>
                    <div className="bg-black w-full h-20"></div>
                </div>
                <div className="w-full h-[400px] relative">
                    <Image src={'/images/chaussure1.png'} alt='' fill className='object-cover'/>
                    <div className='p-2 absolute top-5 left-5 flex bg-white rounded-full'>
                        <StarIcon className='h-7'/>
                        <p>{`Bien notés`}</p>
                    </div>
                </div>
                <div className='w-full px-40 flex flex-col space-y-5'>
                    <div className='flex flex-col'>
                        <h1>{`nom`}</h1>
                        <h2>{`description`}</h2>
                    </div>
                    <p>{`prix`}</p>
                    <div className='flex space-x-5'>
                        <div className="bg-black w-14 h-14"></div>
                        <div className="bg-black w-14 h-14"></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex justify-between">
                            <p>{`Sélectionner la taille`}</p>
                            <p>{`Guide des tailles`}</p>
                        </div>
                        <div className='flex flex-wrap'>
                            
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ProductView
