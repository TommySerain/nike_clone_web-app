import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import AboutNav from '../components/layouts/AboutNav'
import Header from '../components/layouts/Header'
import HomePageBanner from '../components/homePage/HomePageBanner'
import Layout from '../components/layouts/Layout'
import NewThisWeek from '../components/homePage/NewThisWeek'


function HomePageView() {
    return (
        <Layout>
            <HomePageBanner/>
            <NewThisWeek/>
        </Layout>
    )
}

export default HomePageView
