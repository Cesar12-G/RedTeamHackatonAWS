/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const products = [
    {
        id: 1,
        name: 'Residencia en El Campanario Club de Golf',
        price: '$17,500,000',
        quantity: '729.0 m²',
        imageSrc: 'https://cdn.21online.lat/mexico/cache/awsTest1/rc/V5H8nEtl/uploads/379/propiedades/364872/5f0cad277e6ea.jpg',
        imageAlt: 'Residencia ubicada en uno de los fraccionamientos más exclusivos de Querétaro: El Campanario Residencial & Club de Golf.',
        rooms: 5,
        bathrooms: 6
    },
    {
        id: 1,
        name: 'Residencia en El Campanario Club de Golf',
        price: '$17,500,000',
        quantity: '729.0 m²',
        imageSrc: 'https://cdn.21online.lat/mexico/cache/awsTest1/rc/V5H8nEtl/uploads/379/propiedades/364872/5f0cad277e6ea.jpg',
        imageAlt: 'Residencia ubicada en uno de los fraccionamientos más exclusivos de Querétaro: El Campanario Residencial & Club de Golf.',
        rooms: 5,
        bathrooms: 6
    },
    {
        id: 1,
        name: 'Residencia en El Campanario Club de Golf',
        price: '$17,500,000',
        quantity: '729.0 m²',
        imageSrc: 'https://cdn.21online.lat/mexico/cache/awsTest1/rc/V5H8nEtl/uploads/379/propiedades/364872/5f0cad277e6ea.jpg',
        imageAlt: 'Residencia ubicada en uno de los fraccionamientos más exclusivos de Querétaro: El Campanario Residencial & Club de Golf.',
        rooms: 5,
        bathrooms: 6
    }
]

export const PropetiesSidebar = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className="flex h-full flex-col overflow-y-scroll bg-white">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="mt-8">
                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <a href={product.href}>{product.name}</a>
                                                    <p>{product.price}</p>
                                                </h3>
                                            </div>
                                            <p className="text-gray-500">Area {product.quantity}</p>
                                            <p className="text-gray-500">Recamaras: {product.rooms} Baños: {product.bathrooms}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    className="font-medium text-rose-500 hover:text-indigo-500"
                                                >
                                                    Mas Informacion
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}