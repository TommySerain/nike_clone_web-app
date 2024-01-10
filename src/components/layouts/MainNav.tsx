import Link from 'next/link'
import React from 'react'

function MainNav() {
    return (
        <nav>
            <ul className='flex space-x-3 items-center'>
                <li className='font-medium hover:underline underline-offset-[20px]'>
                    <Link href={`#`}>
                        <span>
                            {`Nouveautés`}
                        </span>
                    </Link>
                </li>
                <li className='font-medium hover:underline underline-offset-[20px]'>
                    <Link href={`#`}>
                        <span>
                            {`Homme`}
                        </span>
                    </Link>
                </li>
                <li className='font-medium hover:underline underline-offset-[20px]'>
                    <Link href={`#`}>
                        <span>
                            {`Femme`}
                        </span>
                    </Link>
                </li>
                <li className='font-medium hover:underline underline-offset-[20px]'>
                    <Link href={`#`}>
                        <span>
                            {`Enfant`}
                        </span>
                    </Link>
                </li>
                <li className='font-medium hover:underline underline-offset-[20px] '>
                    <Link href={`#`}>
                        <span>
                            {`Offres`}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
  )
}

export default MainNav
