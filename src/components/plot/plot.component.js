import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js';

// Services
import { fetchCsv } from "../../services/csvReader.service";

export default function ScatterPlot(props) {

    const { x, y } = props.inputs;

    const [blues, setBlues] = useState([]);
    const [oranges, setOranges] = useState([]);

    useEffect(() => {
        const blues = [], 
              oranges = [];
        fetchCsv(props.src, res => {
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
    }, [props.src])

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
                },
                x !== "" && y !== "" && {
                    x: [x],
                    y: [y],
                    type: 'scatter',
                    mode: 'markers',
                    marker: {color: 'green'}
                }
            ]}
            layout={{width: 500, height: 500, title: 'A Fancy Plot'}}
        />
    )
}