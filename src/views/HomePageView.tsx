// import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
// import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import AboutNav from '../components/layouts/AboutNav'
import Header from '../components/layouts/Header'
import HomePageBanner from '../components/homePage/HomePageBanner'
import Layout from '../components/layouts/Layout'


function HomePageView() {
    return (
        <Layout>
            <HomePageBanner/>
        </Layout>
    )
}
{/*<div className='w-full bg-black/5 flex flex-col items-center py-2'>
<span className='text-lg'>
{`Livraison et retours gratuits`}
</span>
<span className='text-sm'>
{`Membres : livraison et retours gratuits sous 30 jours. `}
<Link href={`#`}>
    <span className='font-medium underline'>
        {`En savoir plus Rejoignez-nous`}
    </span>
</Link>
</span>
</div> */}
export default HomePageView
