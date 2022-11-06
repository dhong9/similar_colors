import React, { useState, useEffect } from "react";
import data from "../../data/points.csv";
import { fetchCsv } from "../../services/csvReader.service";

export default function Table() {

  const [csv, setCsv] = useState([])

  useEffect(() => {
    fetchCsv(data, res => setCsv(res.split('\n')))
  }, [])

  return (
    csv[0] &&
    <table>
      <thead>
        <tr key="0">
        {
          csv[0].split(',').map((v, i) => <th key={i}>{v}</th>)
        }
        </tr>
      </thead>
      <tbody>
      {
        csv.slice(1).map((row, i) =>
          <tr key={i + 1}>
            {
              row.split(',').map((v, j) => <td key={j}>{v}</td>)
            }
          </tr>
        )
      }
      </tbody>
    </table>
  )
}