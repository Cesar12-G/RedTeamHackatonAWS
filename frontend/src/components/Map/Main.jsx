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
import { Map } from './Map'
import { PropetiesSidebar } from './PropetiesSidebar'
import { FiltersSidebar } from './FiltersSidebar'

export const Main = () => {
  return (
    <div className="bg-white">
      <div className="parent md:h-screen md:grid md:grid-cols-12 p-5">
        <section className="sidebar md:col-span-2">
          <FiltersSidebar />
        </section>
        <main className="main md:col-span-7">
          <Map />
        </main>
        <section className="sidebar md:col-span-3">
          <PropetiesSidebar />
        </section>
      </div>
    </div>
  )
}