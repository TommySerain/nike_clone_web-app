import Link from 'next/link'
import React from 'react'

function AboutNav() {
  return (
    <div className='w-full px-12 py-1 bg-black/5 flex justify-between items-center'> {/*le /5 pour 5% d'opacité on aurait pu mettre bg-opacity-5 */}
                <div className='flex space-x-3'>
                    <div className='w-7 h-7 bg-black rounded-full'>
                    </div>
                    <div className='w-7 h-7 bg-black rounded-full'>
                    </div>
                </div>
                <nav>
                    <ul className='flex space-x-3 divide-x-2 divide-black items-center'>
                        <li className='pl-3 text-xs font-medium'>
                            <Link href={`/`} className='nav-link'>
                                <span>
                                    {`Trouver un magasin`}
                                </span>
                            </Link>
                            
                        </li>
                        <li className='pl-3 text-xs font-medium'>
                            <Link href={`/`} className='nav-link'>
                                <span>
                                    {`Aide`}
                                </span>
                            </Link>
                        </li>
                        <li className='pl-3 text-xs font-medium'>
                            <Link href={`/`} className='nav-link'>
                                <span>
                                    {`Nous rejoindre`}
                                </span>
                            </Link>
                        </li>
                        <li className='pl-3 text-xs font-medium'>
                            <Link href={`/`} className='nav-link'>
                                <span>
                                    {`S'identifier`}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
  )
}

export default AboutNav


