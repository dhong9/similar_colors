import React, { useState, useEffect } from "react";
import data from "../../data/points.csv";
import { fetchCsv } from "../../services/csvReader.service";

export default function Table() {

  const [csv, setCsv] = useState([])

  useEffect(() => {
    fetchCsv(data, res => setCsv(res.split('\n')))
    console.log(csv)
  }, [])

  return (
    <div>
      { csv }
    </div>
  )
}