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

    const classifyKnn = (points, k) => {
        //! TODO Implement kNN logic
        setKnnPoints(points.slice(0, k));
    };

    const loadData = dataPoints => setDataPoints(dataPoints);

    const onSubmit = inputs => {
        setInputs(inputs);
        classifyKnn(dataPoints, 3);
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