import React from "react";
import { useState } from "react";

export const AddProperty = () => {
  const [property, setProperty] = useState({
    name:'',
    description:'',
    street:'',
    zip:'',
    city:'',
    state:'',
    country:'',
    rooms:'',
    bathrooms:'',
    area:'',
    available:'',
    verified:'',
    land:'',
    rsa:'',
    lat:'',
    lng:'',
    int_number:''
  })
  const type_options = [
    {value: '', text: '--Elige una opcion--'},
    {value: 'Casa', text: 'Casa'},
    {value: 'Departamento', text: 'Departamento'},
    {value: 'Tereno', text: 'Tereno'},
    {value: 'Bodega', text: 'Bodega'}
  ];
  const country_options = [
    {value: '', text: '--Elige una opcion--'},
    {value: 'Mexico', text: 'Mexico'},
    {value: 'Canada', text: 'Canada'},
    {value: 'Estados Unidos', text: 'Estados Unidos'}
  ];
  const state_options = [
    {value: '', text: '--Elige una opcion--'},
    {value: 'Puebla', text: 'Puebla'},
    {value: 'Veracruz', text: 'Veracruz'},
    {value: 'Monterrey', text: 'Monterrey'},
    {value: 'Nuevo Leon', text: 'Nuevo Leon'}
  ];

  // Docs
  // https://www.agirl.codes/how-to-build-forms-with-multiple-input-fields-using-react-hooks
  const handleChange = (event) => {
    setProperty({ ...property, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(property)
  }


  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Registra tu propiedad</h3>
                <p className="mt-1 text-sm text-gray-600">Micasa puede ayudarte a encontrar facilmente a un comprador verificado.</p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form onSubmit={handleSubmit}>
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Nombre Propiedad
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                          value={property.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                          Tipo de Propiedad
                        </label>
                        <select
                          id="type"
                          name="type"
                          autoComplete="type-name"
                          value={property.type}
                          onChange={property.type}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          {type_options.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.text}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-span-3">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Dirección
                        </label>
                        <input
                          type="text"
                          name="street"
                          id="street"
                          value={property.street}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          Codigo Postal
                        </label>
                        <input
                          type="text"
                          name="zip"
                          id="zip"
                          value={property.zip}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                        />
                      </div>


                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          País
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={property.country}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 md:text-md"
                        >
                          {country_options.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.text}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          Estado
                        </label>
                        <select
                          id="state"
                          name="state"
                          value={property.state}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          {/* <option>United States</option>
                          <option>Canada</option> */}
                          <option>Nuevo León</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          Ciudad
                        </label>
                        <select
                          id="city"
                          name="city"
                          autoComplete="city-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          {state_options.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.text}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">
                          Numero de Recamaras
                        </label>
                        <input
                          type="number"
                          name="rooms"
                          id="rooms"
                          value={property.rooms}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">
                          Numero de Baños
                        </label>
                        <input
                          type="number"
                          name="bathrooms"
                          id="bathrooms"
                          value={property.bathrooms}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                          Área de Terreno
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          name="area"
                          id="area"
                          value={property.area}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="lat" className="block text-sm font-medium text-gray-700">
                          Lat
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          name="lat"
                          id="lat"
                          value={property.lat}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                        />
                      </div>
                
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="lng" className="block text-sm font-medium text-gray-700">
                          Lng
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          name="lng"
                          id="lng"
                          value={property.lng}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                          Nombre Contacto
                        </label>
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                        />
                      </div>

                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <input
                      type="submit"
                      value="Registrar"
                      className="inline-flex justify-center rounded-md border border-transparent bg-rose-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </div>
    </div>
  )
}

