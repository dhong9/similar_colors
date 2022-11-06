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
      {
        csv.map(row =>
          <tr>
            {
              row.split(',').map(v => <td>{v}</td>)
            }
          </tr>
        )
      }
    </table>
  )
}