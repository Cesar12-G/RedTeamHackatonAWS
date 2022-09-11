/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/24/outline'

const subCategories = [
  { name: 'Casas en venta', href: '#' },
  { name: 'Casas en renta', href: '#' },
  { name: 'Terrenos en venta', href: '#' },
  { name: 'Bodegas', href: '#' },
  //   { name: 'Laptop Sleeves', href: '#' },
]

const filters = [
  {
    id: 'state',
    name: 'Estado',
    options: [
      { value: '1', label: 'Chihuahua', checked: false },
      { value: '2', label: 'Nuevo Leon', checked: false },
      { value: '3', label: 'Guadalajara', checked: true },
      { value: '4', label: 'Ciudad de México', checked: false },
      { value: '5', label: 'Sinaloa', checked: false },
    ],
  },
  {
    id: 'rooms',
    name: 'Recamaras',
    options: [
      { value: '1', label: '2', checked: false },
      { value: '2', label: '3', checked: false },
      { value: '3', label: '4', checked: false },
      { value: '4', label: '5 +', checked: false },
    ],
  },
  {
    id: 'bathrooms',
    name: 'Baños',
    options: [
      { value: '1', label: '2', checked: false },
      { value: '2', label: '3', checked: false },
      { value: '3', label: '4', checked: false },
      { value: '4', label: '5 +', checked: false },
    ],
  }
]

export const FiltersSidebar = () => {
  return (
    <form className="hidden lg:block">

      <h3 className="sr-only">Categories</h3>
      <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
        {subCategories.map((category) => (
          <li key={category.name}>
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul>

      {filters.map((section) => (
        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">{section.name}</span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  )
}