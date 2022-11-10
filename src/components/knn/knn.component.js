import React, { useState } from "react";

// Components
import Addpoint from "../addpoint/addpoint.component";
import ScatterPlot from "../plot/plot.component";
import Table from "../table/table.component";

// Data
import data from "../../data/points.csv";

export default function KNN() {

    const [inputs, setInputs] = useState({});
    const [dataPoints, setDataPoints] = useState([]);
    const [knnPoints, setKnnPoints] = useState([]);

    // Assume that a.length == b.length
    const distance = (a, b) => {
        let sumSquared = 0;
        for (let i = 0; i < a.length; i++) {
            sumSquared += (a[i] - b[i]) ** 2;
        }
        return Math.sqrt(sumSquared);
    }

    const classifyKnn = (points, inputPoint, k) => {
        //! TODO Implement kNN logic
        points.sort((a, b) => distance(a, inputPoint) - distance(b, inputPoint));
        setKnnPoints(points.slice(0, k));
    };

    const loadData = dataPoints => setDataPoints(dataPoints);

    const onSubmit = inputs => {
        setInputs(inputs);
        classifyKnn(dataPoints, [inputs.x, inputs.y], inputs.k);
    };

    return (
        <div>
            <Table 
                src={data}
            />
            <ScatterPlot
                src={data}
                inputs={inputs}
                knnPoints={knnPoints}
                onLoad={loadData}
                onSubmit={onSubmit}
            />
            <Addpoint 
                onSubmit={onSubmit}
            />
        </div>
    );

}