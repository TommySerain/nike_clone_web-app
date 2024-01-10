import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomePageBanner() {
    return (
        <section className='w-full h-[550px] relative'> {/*On ajoute relative car la balise image de next est en absolute donc avec relative on oblige l'image a ne prendre que la plce de la section */}
            <Image src={`/Images/nike-just-do-it.jpg`} alt='' fill className='object-contain'/>
            <div className='absolute top-0 left-0 w-full h-full text-white p-14 flex flex-col justify-end space-y-14'>
                <div className='flex flex-col space-y-8'>
                    <h2 className='font-medium capitalize'>{`Nike Style By`}</h2>
                    <h1 className='text-7xl font-extrabold uppercase'>{`Nike v2k run`}</h1>
                </div>
                <div className='flex flex-col space-y-8 items-start'>
                <p>{`Découvre ce modèle avec une vibe rétro`}</p>
                <Link className='bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-[#757575]' href={`/products`}>
                    {`Acheter`}
                </Link>
                    
                </div>
            </div>
        </section>
    )
}

export default HomePageBanner
