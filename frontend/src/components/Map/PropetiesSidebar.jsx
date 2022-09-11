/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import useApi from '../hooks/useApi'

export const PropetiesSidebar = () => {

    const api = useApi()

    useEffect(()=> {
        const resp = api.getProperties()
    },[])

    return (
        <div className="flex h-full flex-col overflow-y-scroll bg-white">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="mt-8">
                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {api.properties.map((property) => (
                                <li key={property.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            // src={property.imageSrc}
                                            // alt={property.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3 className="text-sm">
                                                    <a href="">{property.name}</a>
                                                    {/* <p>{property.price}</p> */}
                                                </h3>
                                            </div>
                                            <p className="text-gray-500 text-sm">{property.street} {property.int_number}</p>
                                            <p className="text-gray-500 text-sm">{property.city} {property.state} {property.country}</p>
                                            <p className="text-gray-500 text-sm">Area: {property.area} m²</p>
                                            <p className="text-gray-500 text-sm">Recamaras: {property.rooms} Baños: {property.bathrooms}</p>
                                            <p className="text-gray-500 text-sm">{property.rsa}</p>
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