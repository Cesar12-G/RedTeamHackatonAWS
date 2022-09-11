/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export const LandingPage = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-teal-300 xl:inline">MICASA</span>{' '}
                <span className="block text-rose-500 xl:inline">¡Explora el mercado inmobiliario como nunca antes!</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Micasa es una aplicación que utiliza las más avanzadas tecnologías y técnicas de Análisis de Datos y Machine Learning para ayudarte a identificar áreas de oportunidad al momento de invertir en un patrimonio como casas, terrenos, bodegas, y entre otro tipo de propiedades.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Además, ejerce como intermediario para garantizar la seguridad en tu compra, ofrece asesoría legal y la vinculación con instituciones financieras.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="map"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Mapa Interactivo
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-1/3 lg:w-full"
          src="https://www.altonivel.com.mx/wp-content/uploads/2021/12/agente-inmobiliario.jpg"
          alt=""
        />
      </div>
      <div className="container mx-auto items-center text-base w-full">
        <article class="max-w-2xl mx-auto bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 relative mb-12 rounded-3xl transform -rotate-6 translate-y-14 lg:p-4 font-body">
            <div class="bg-white border h-full transform rotate-6 lg:p-16 px-6 py-4 shadow-lg lg:rounded-3xl">
              <div className="text-rose-500 text-4xl font-medium mb-4">Olvídate de:</div>
              <ul className="text-gray-900 text-xl mb-8">
                <li>❌ Inmobiliarias tradicionales</li>
                <li>❌ Altas comisiones</li>
              </ul>
              <div className='text-teal-300 text-4xl font-medium mb-4'>MICASA busca:</div>
                <ul className="text-gray-900 text-xl mb-8">
                  <li>✅ Ser un intermediario transparente y confiable</li>
                  <li>✅ Ayudar a las personas a encontrar las mejores opciones</li>
                </ul>
              <div className='text-teal-300 text-4xl font-medium mb-4'>MICASA ofrece:</div>
                <ul className="text-gray-900 text-xl">
                  <li>✅ Asesoría legal</li>
                  <li>✅ Verificación de vendedores/compradores</li>
                  <li>✅ Asesoría y vinculación con instituciones financieras</li>
                </ul>
            </div>
        </article>
      </div>
      <div className="container mx-auto items-center text-base w-full mt-40">
        <div className="rounded-md bg-indigo-900 mx-20 my-10 p-10">
          <div className="text-rose-500 text-4xl font-medium mb-6">Una nueva alternativa para decidir en dónde comprar</div>
          <p className="text-gray-100 text-xl">Para los compradores de inmobiliarios, <span className="text-teal-300 text-3xl">MICASA</span> es una alternativa para calcular la plusvalía de una propiedad, con base a distintos factores como la ubicación, infraestructura urbana, servicios públicos y privados, movilidad urbana, tendencias, mantenimiento y preservación de la vivienda.</p>
        </div>
        <div className="rounded-md bg-indigo-900 mx-20 mb-10 p-10">
          <div className="text-rose-500 text-4xl font-medium mb-6">Invirtiendo inteligentemente</div>
          <p className="text-gray-100 text-xl">Con <span className="text-teal-300 text-3xl">MICASA</span> puedes comprar tasas de crédito de diferentes instituciones financieras y conocer los requisitos para aplicar.</p>
        </div>
        <div className="rounded-md bg-indigo-900 mx-20 mb-10 p-10">
          <div className="text-rose-500 text-4xl font-medium mb-6">Conoce la mejor zona para rentar</div>
          <p className="text-gray-100 text-xl"><span className="text-teal-300 text-3xl">MICASA</span> te brinda información acerca del promedio de gastos (agua💧, luz💡, gas⛽) en la zona de tu elección.</p>
        </div>
      </div>
    </div>
  )
}