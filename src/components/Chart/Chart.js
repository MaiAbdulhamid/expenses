import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.scss";

export default function Chart({ dataPoints }) {
  const allValues = dataPoints?.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...allValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
