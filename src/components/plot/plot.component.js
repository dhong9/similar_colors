import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js';

// Services
import { fetchCsv } from "../../services/csvReader.service";

export default function ScatterPlot(props) {

    const { x, y } = props.inputs;

    // Map each color to a set of points
    const [points, setPoints] = useState({});

    useEffect(() => {
        fetchCsv(props.src, res => {
            const colorPoints = {}
            const datapoints = []
            res.split('\n').forEach((row, i) => {
                if (i) {
                    const array = row.replace(/\s/g, '').split(',');
                    const nums = array.slice(0, -1).map(v => +v);
                    const rawColor = array.at(-1);
                    const color = rawColor.toLowerCase(); // Common color names need to be lower cased
                    if (color in colorPoints) {
                        // Add point to existing color
                        colorPoints[color].push(nums);
                    }
                    else {
                        // Add new color to set
                        colorPoints[color] = [nums];
                    }
                    datapoints.push(nums);
                }
            });
            setPoints(colorPoints);
            props.onLoad(datapoints);
        });
    }, [props]);

    return (
        <Plot
            data = {
                [...Object.keys(points).map(color => ({
                    x: points[color].map(v => v[0]),
                    y: points[color].map(v => v[1]),
                    type: "scatter",
                    mode: "markers",
                    marker: {color}
                })),
                x !== "" && y !== "" && {
                    x: [x, ...props.knnPoints.map(v => v[0])],
                    y: [y, ...props.knnPoints.map(v => v[1])],
                    type: 'scatter',
                    mode: 'markers',
                    marker: {color: 'green'}
                }]
            }
            layout={{width: 500, height: 500, title: 'A Fancy Plot'}}
        />
    )
}