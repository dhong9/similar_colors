import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js';

// Data
import data from "../../data/points.csv";

// Services
import { fetchCsv } from "../../services/csvReader.service";

export default function ScatterPlot() {
    return (
        <div>
            I am a plot.
        </div>
    )
}