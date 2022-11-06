import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js';

// Data
import data from "../../data/points.csv";

// Services
import { fetchCsv } from "../../services/csvReader.service";

export default function ScatterPlot() {

    const [blues, setBlues] = useState([]);
    const [oranges, setOranges] = useState([]);

    useEffect(() => {
        const blues = [], 
              oranges = [];
        fetchCsv(data, res => {
            res.split('\n').forEach(row => {
                const[x, y, color] = row.replace(/\s/g, '').split(',');
                if (color === "Blue")
                    blues.push([+x, +y]);
                else if (color === "Orange")
                    oranges.push([+x, +y]);
            });
            setBlues(blues);
            setOranges(oranges);
        });
    }, [])

    return (
        <Plot
            data={[
                {
                x: blues.map(v => v[0]),
                y: blues.map(v => v[1]),
                type: 'scatter',
                mode: 'markers',
                marker: {color: 'blue'},
                },
                {
                x: oranges.map(v => v[0]),
                y: oranges.map(v => v[1]),
                type: 'scatter',
                mode: 'markers',
                marker: {color: 'orange'},
                }
            ]}
            layout={{width: 500, height: 500, title: 'A Fancy Plot'}}
        />
    )
}