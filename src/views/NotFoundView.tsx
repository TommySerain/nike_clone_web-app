import React from 'react'
import Layout from '../components/layouts/Layout'
import Image from 'next/image'

function NotFoundView() {
    return (
        <Layout>
            <section className=' w-full flex justify-center items-center'>
                <div className='h-[400px] flex  flex-col justify-center items-center w-[600px] relative'>
                    <Image src={`/images/nike.png`} fill alt='' className='object-contain'/>
                    <h1 className='text-red-800 text-7xl font-extrabold z-10'>404</h1>
                    <h2 className='text-red-800 text-6xl font-extrabold z-10 text-center'>Just dont go here</h2>
                </div>
            </section>
        </Layout>
    )
}

export default NotFoundView
