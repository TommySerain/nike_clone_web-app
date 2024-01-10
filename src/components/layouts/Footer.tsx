import { MapPinIcon } from '@heroicons/react/16/solid'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='flex flex-col w-full bg-[#111111] flex-1 items-center p-10 space-y-5'>
            <div className='w-full row1 flex flex-1'>
                <div className='w-full cols flex flex-1 justify-between'>
                    <ul className='flex flex-col space-y-4 uppercase text-white font-bold text-xs'>
                        <Link className='hover:underline' href={`#`}>
                            <li>Cartes Cadeaux</li>
                        </Link>
                        <Link className='hover:underline' href={`#`}>
                            <li>trouver un magasin</li>
                        </Link>
                        <Link className='hover:underline' href={`#`}>
                            <li>Nike journal</li>
                        </Link>
                        <Link className='hover:underline' href={`#`}>
                            <li>Devenir membre</li>
                        </Link>
                        <Link className='hover:underline' href={`#`}>
                            <li>Réduction pour étudiants</li>
                        </Link>
                        <Link className='hover:underline' href={`#`}>
                            <li>commentaires</li>
                        </Link>
                        <Link className='hover:underline' href={`#`}>
                            <li>codes promo</li>
                        </Link>
                    </ul>
                    <ul className='flex flex-col space-y-4 text-[#7e7e7e] font-bold text-xs'>
                        <Link className='uppercase text-white hover:underline' href={`#`}>
                            <li>Aide</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Statut de commande</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Expédition et livraison</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Retours</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Modes de paiement</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Nous contacter </li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Aide - Codes promo Nike</li>
                        </Link>
                    </ul>
                    <ul className='flex flex-col space-y-4 text-[#7e7e7e] font-bold text-xs'>
                        <Link className='uppercase text-white hover:underline' href={`#`}>
                            <li>À PROPOS DE NIKE</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Actualités</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Carrières</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Investisseurs</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Développement durable</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Mission</li>
                        </Link>
                    </ul>
                    <ul className='flex flex-col space-y-4 text-[#7e7e7e] font-bold text-xs'>
                        <Link className='uppercase text-white hover:underline' href={`#`}>
                            <li>REJOINS-NOUS</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Nike App</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Nike Run Club</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>Nike Training Club</li>
                        </Link>
                        <Link className='hover:text-white' href={`#`}>
                            <li>SNKRS</li>
                        </Link>
                    </ul>
                </div>
                <div className='logos text-[#7e7e7e] flex space-x-5 ps-52 items-start'>
                    <div className='hover:text-white'>
                        <ArrowRightCircleIcon className='h-7'/>
                    </div>
                    <div className='hover:text-white'>
                        <ArrowRightCircleIcon className='h-7'/>
                    </div>
                    <div className='hover:text-white'>
                        <ArrowRightCircleIcon className='h-7'/>
                    </div>
                    <div className='hover:text-white'>
                        <ArrowRightCircleIcon className='h-7'/>
                    </div>
                </div>
            </div>
            <div className='row2 flex w-full justify-between'>
                <div className="col1 flex items-end space-x-3">
                    <MapPinIcon className='text-white h-5'/>
                    <p className='text-xs text-white font-medium'>France</p>
                    <p className='text-xs text-[#7e7e7e]'>© 2023 Nike, Inc. Tous droits réservés</p>
                </div>
                <div className="col2 flex flex-col space-y-5">
                    <ul className='flex justify-end  text-[#7e7e7e] space-x-10 text-xs'>
                        <li className='hover:text-white'>Guides</li>
                        <li className='hover:text-white'>{`Conditions d'utilisation`}</li>
                        <li className='hover:text-white'>Conditions générales de vente</li>
                        <li className='hover:text-white'>Mentions légales</li>
                    </ul>
                    <ul className='flex justify-end  text-[#7e7e7e] space-x-10 text-xs'>
                        <li className='hover:text-white'>Politique en matière de confidentialité et de cookies</li>
                        <li className='hover:text-white'>Paramètres des cookies</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
