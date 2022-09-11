import { useState, useEffect } from "react"

const banks = [
    { id: 1, name: 'ScotiaBank', rate: '10.30%', cat: '12.4%' },
    { id: 2, name: 'Banorte', rate: '11%', cat: '13.7%' },
    { id: 3, name: 'BBVA', rate: '10.50%', cat: '13%' },
    { id: 4, name: 'Santader', rate: '12.05%', cat: '14.9%' },
    { id: 5, name: 'Mifel', rate: '9.94%', cat: '13%' },
    { id: 6, name: 'Afirme', rate: '10.60%', cat: '3.5%' },
    { id: 7, name: 'HSBC', rate: '10.50%', cat: '12.7%' },
    { id: 8, name: 'Yave', rate: '11.95%', cat: '14.7%' },
];

export const CreditsTable = () => {
    return (
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Institución Financiera
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Tasa Anual
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        CAT
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {banks.map((bank) => (
                                    <tr class="border-b">
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {bank.name}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {bank.rate}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {bank.cat}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}