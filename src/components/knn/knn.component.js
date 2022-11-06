import React from "react";

// Components
import Addpoint from "../addpoint/addpoint.component";
import ScatterPlot from "../plot/plot.component";
import Table from "../table/table.component";

// Data
import data from "../../data/points.csv";

export default function KNN() {

    return (
        <div>
            <Table />
            <ScatterPlot />
            <Addpoint />
        </div>
    );

}