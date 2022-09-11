/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:8000/api/property/";

class AddProperty extends React.Component {
  constructor() {
    super();
    this.state = { value: 'Hello World' };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();

    const data =  {
      "name": "Casa en renta",
      "description": "etc",
      "street": "Real de Gpe",
      "zip": 44444,
      "city": "CDMX",
      "state": "USA",
      "country": "California",
      "rooms": 2,
      "bathrooms": 1,
      "area": 3.14,
      "available": true,
      "verified": false,
      "land": false,
      "rsa": "yes"
    };

    axios.get(baseURL, data, {
      headers: {
        Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYyODMzNjU4LCJpYXQiOjE2NjI4MzMwNTgsImp0aSI6ImQzNDFkMzIxYzhjYTQ4ZDJiMDQ2NzhlMGUxMTdmMDlhIiwidXNlcl9pZCI6M30.AzqG-29PW-fdTyVUZEFHE5T3AqrQkaWjf12prHW8d2Q' //the token is a variable which holds the token
      }
    }).then((response) => {
      if ('properites' in response.data) {
          setPost(response.data.properites);
      }
  });
    return false
  }
  
  render () {
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
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Registra tu Propiedad</h3>
                  <p className="mt-1 text-sm text-gray-600">Micasa puede ayudarte a encontrar fácilmente a un comprador verificado.</p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
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
                            value={this.state.value}
                            onChange={this.handleChange}
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
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option>Casa</option>
                            <option>Departamento</option>
                            <option>Tereno</option>
                            <option>Bodega</option>
                          </select>
                        </div>
  
                        <div className="col-span-3">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Dirección
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                          />
                        </div>
  
                        <div className="col-span-6 sm:col-span-2">
                          <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                            Codigo Postal
                          </label>
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
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
                            autoComplete="country-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 md:text-md"
                          >
                            {/* <option>United States</option>
                            <option>Canada</option> */}
                            <option>Mexico</option>
                          </select>
                        </div>
  
                        <div className="col-span-6 sm:col-span-2">
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            Estado
                          </label>
                          <select
                            id="state"
                            name="state"
                            autoComplete="state-name"
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
                            {/* <option>United States</option>
                            <option>Canada</option> */}
                            <option>Monterrey</option>
                          </select>
                        </div>
  
                        <div className="col-span-6 sm:col-span-2">
                          <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">
                            Número de Recámaras
                          </label>
                          <input
                            type="number"
                            name="rooms"
                            id="rooms"
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                          />
                        </div>
  
                        <div className="col-span-6 sm:col-span-2">
                          <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">
                            Número de Baños
                          </label>
                          <input
                            type="number"
                            name="bathrooms"
                            id="bathrooms"
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-xl"
                          />
                        </div>
  
                        <div className="col-span-6 sm:col-span-2">
                          <label htmlFor="land" className="block text-sm font-medium text-gray-700">
                            Área del Terreno
                          </label>
                          <input
                            type="number"
                            step="0.01"
                            name="land"
                            id="land"
                            autoComplete="email"
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
                            autoComplete="email"
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
                            autoComplete="email"
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
                            Correo Electrónico
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
                      <button
                        className="inline-flex justify-center rounded-md border border-transparent bg-rose-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                        onClick={this.handleClick}
                      >
                        Registrar
                      </button>
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
}

export {AddProperty}