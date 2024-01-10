// import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
// import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import React from 'react'
import MainNav from './MainNav'
import Logo from './Logo'


function Header() {
    return (
        <header className='w-full px-12 py-4 flex justify-between items-center'>
            <div className='w-60'>
                <Logo/>
            </div>
            <MainNav/>
            <div>
                <div className='flex items-center space-x-2'>
                    <div className='flex w-60 bg-black/5 rounded-full space-x-4 py-2 pl-2 pr-8'>
                        {/* <div className='w-7 h-7 bg-black rounded-full'>
                        </div> */}
                        {/* <MagnifyingGlassIcon className="h-7"/> */}
                        <span className='text-black/20 font-bold'>
                            {`Rechercher`}
                        </span>
                    </div>
                    {/* <HeartIcon className="icon-btn"/>
                    <ShoppingBagIcon className="icon-btn"/> */}
                </div>
            </div>
        </header>
    )
}

export default Header
