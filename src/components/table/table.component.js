import React, { useState, useEffect } from "react";
import data from "../../data/points.csv";
import { fetchCsv } from "../../services/csvReader.service";

export default function Table() {

  const [csv, setCsv] = useState([])

  useEffect(() => {
    fetchCsv(data, res => setCsv(res.split('\n')))
  }, [])

  return (
    <table>
      <tbody>
      {
        csv.map((row, i) =>
          <tr key={i}>
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