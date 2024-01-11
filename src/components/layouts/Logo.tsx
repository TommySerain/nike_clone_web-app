import Link from 'next/link'
import React from 'react'

function Logo() {
    return (
        <Link href={`/`}>
            <div className='w-10 h-10 bg-black rounded-full'></div>
        </Link>
    )
}

export default Logo
