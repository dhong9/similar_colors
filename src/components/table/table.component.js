import React, { useState, useEffect } from "react";

// Services
import { fetchCsv } from "../../services/csvReader.service";

// CSS
import "./table.component.css"

export default function Table(props) {

  const [csv, setCsv] = useState([])

  useEffect(() => {
    fetchCsv(props.src, res => setCsv(res.split('\n')))
  }, [props.src])

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