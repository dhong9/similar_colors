import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js';

// Data
import data from "../../data/points.csv";

// Services
import { fetchCsv } from "../../services/csvReader.service";

export default function ScatterPlot() {

    const [csv, setCsv] = useState([])

    useEffect(() => {
        fetchCsv(data, res => setCsv(res.split('\n')))
    }, [])

    return (
        <Plot
            data={[
                {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
        />
    )
}