import React, { useState } from "react";

// Components
import Addpoint from "../addpoint/addpoint.component";
import ScatterPlot from "../plot/plot.component";
import Table from "../table/table.component";

// Data
import data from "../../data/points.csv";

export default function KNN() {

    const [inputs, setInputs] = useState({});

    const onSubmit = inputs => setInputs(inputs);

    return (
        <div>
            <Table 
                src={data}
            />
            <ScatterPlot
                src={data}
                inputs={inputs}
            />
            <Addpoint 
                onSubmit={onSubmit}
            />
        </div>
    );

}