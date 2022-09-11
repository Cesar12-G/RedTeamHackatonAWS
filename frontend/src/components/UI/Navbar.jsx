import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const navigation = {
  categories: [
    {
      id: 'compra',
      name: 'Compra',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: '',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: '',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'Casas',
          name: 'Casas',
          items: [
            { name: 'Nuevas Casas', href: '#' },
          ],
        },
        {
          id: 'Departamentos',
          name: 'Departamentos',
          items: [
            { name: 'Departamentos CDMX', href: '#' },
          ],
        },
        {
          id: 'Terrenos',
          name: 'Terrenos',
          items: [
            { name: 'Terrenos en las mejores zonas', href: '#' }
          ],
        },
      ],
    },
    {
      id: 'renta',
      name: 'Renta',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: '',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: '',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'Casas',
          name: 'Casas',
          items: [
            { name: 'Nuevas Casas', href: '#' },
          ],
        },
        {
          id: 'Departamentos',
          name: 'Departamentos',
          items: [
            { name: 'Departamentos CDMX', href: '#' },
          ],
        },
        {
          id: 'Terrenos',
          name: 'Terrenos',
          items: [
            { name: 'Terrenos en las mejores zonas', href: '#' }
          ],
        },
      ],
    },
  ],
  pages: [
    // { name: 'Invierte', href: 'invest' },
    // { name: 'Creditos', href: 'credits' },
    { name: 'Registra tu propiedad', href: 'add-property' },
  ],
}

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const auth = useAuth()

  useEffect(()=> {
    async function getUserData() {
      if (localStorage.getItem('r_token')) {
        const resp = await auth.getUserData(auth.getTokens())
        if(resp.status){
          console.log(resp)
        }
      }
    };
    getUserData()
    setTimeout(() => {
      console.log(auth.user)      
    }, 6000);
  },[auth.isAuth])

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a href="login" className="-m-2 block p-2 font-medium text-gray-900">
                      Inicia Sesión
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="create-account" className="-m-2 block p-2 font-medium text-gray-900">
                      Crea una cuenta
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://img.freepik.com/free-vector/illustration-flag-mexico_53876-18169.jpg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">MXN</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-rose-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Crea tu cuenta y obten beneficios
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-12 w-auto"
                    src="https://i.postimg.cc/NftDPGnf/micasa-logo2.png"
                    alt=""
                  />   
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                          </div>
                                          {/* <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Busque ahora
                                          </p> */}
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  { auth.isAuth ?
                  (<>Hola nombre_de_usuario</>)
                  :
                  (<Link to="login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Inicia Sesion
                  </Link>)
                  }
                  
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link to="/create-account" className="text-sm font-medium text-gray-700 hover:text-gray-800">Crea una cuenta</Link>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://img.freepik.com/free-vector/illustration-flag-mexico_53876-18169.jpg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">MXN</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}