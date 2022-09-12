import React, { Component } from 'react';
import 'react-vis/dist/style.css';
import { useState  } from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    HorizontalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend
} from 'react-vis';
export const Graph = () => {
    const BarSeries = VerticalBarSeries;
    return (
        <div>
            <h1>Costo medio de una casa o departamento por entidad federativa 2022 Fuente: Secretaría de Hacienda y Crédito Público (México); Sociedad Hipotecaria Federal (México)</h1>
            <XYPlot
                className="clustered-stacked-bar-chart-example"
                xType="ordinal"
                stackBy="y"
                width={800}
                height={300}
            >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <BarSeries
                    cluster="2015"
                    color="#5EEAD4"
                    data={[
                        { x: 'CDMX', y: 2892.36 },
                        { x: 'Morelos', y: 1995.02 },
                        { x: 'Querétaro', y: 1977.26 },
                        { x: 'Nayarit', y: 1789.64 },
                        { x: 'Jalisco', y: 1626.68 },
                        { x: 'Quintana Roo', y: 1546.34 },
                        { x: 'BC Sur', y: 1497.55 },
                        { x: 'Promedio nacional', y: 1466.99 },
                        { x: 'Sinaloa', y: 1444.13 },
                        { x: 'Nuevo León', y: 1441.32 },
                        { x: 'Guerrero', y: 1429.07 },
                        { x: 'BC', y: 1426.78 },
                        { x: 'Yucatán', y: 1418.38 },
                        // { x: 'Estado de México', y: 1408.70 },
                        // { x: 'San Luis Potosí', y: 1407.24 },
                        // { x: 'Michoacán', y: 1363.80 },
                        // { x: 'Puebla', y: 1355.82 },
                        // { x: 'Sonora', y: 1346.78 },
                        // { x: 'Aguascalientes', y: 1208.30 },
                        // { x: 'Oaxaca', y: 1201.44 },
                        // { x: 'Guanajuato', y: 1198.73 },
                        // { x: 'Chihuahua', y: 1197.68 },
                        // { x: 'Veracruz', y: 1163.57 },
                        // { x: 'Tabasco', y: 1163.52 },
                        // { x: 'Campeche', y: 1157.32 },
                        // { x: 'Colima', y: 1141.37 },
                        // { x: 'Chiapas', y: 1139.31 },
                        // { x: 'Coahuila', y: 1081.43 },
                        // { x: 'Hidalgo', y: 1061.10 },
                        // { x: 'Zacatecas', y: 1022.85 },
                        // { x: 'Durango', y: 856.96 },
                        // { x: 'Tlaxcala', y: 823.18 },
                        // { x: 'Tamaulipas', y: 806.73 },
                        
                    ]}
                />
            </XYPlot>
        </div>
    )
}