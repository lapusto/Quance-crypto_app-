import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import Select from "react-select";
import styles from "./Asset.module.scss";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Filler,
  Legend,
  CategoryScale,
  PointElement,
  LinearScale,
} from "chart.js";
import { eachMonthOfInterval, format, getDate, subMonths } from "date-fns";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  gradient
);

export const Asset = () => {

  const [timePeriod, setTimePeriod] = useState(3);

  const getMonthLabels = () => {
    const today = new Date
    const periodStart = subMonths(new Date(), timePeriod)

    const intervalArr = eachMonthOfInterval({
      start: new Date(periodStart),
      end: new Date(today),
    });

    return intervalArr.map((el) => {
      return format(el.setDate(getDate(new Date())), "MMM yyyy");
    });
  };

  const xScaleLabels = getMonthLabels();

  const [data, setData] = useState({
    labels: xScaleLabels,
    datasets: [
      {
        label: false,
        gradient: {
          backgroundColor: {
            axis: "y",
            colors: {
              0: "rgba(161, 227, 66, 0.1)",
              100: "rgba(161, 227, 66, .5)",
            },
          },
        },
        data: [
          12, 10.8, 13.5, 13, 11, 11.2, 13, 12, 10, 9, 10.9, 11, 13, 5, 18,
        ],
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: "transparent",
        tension: 0,
      },
    ],
  });

  const dataOptions = [
    { value: 3, label: "Last 3 months" },
    { value: 6, label: "Last 6 months" },
    { value: 12, label: "Last year" },
  ];

  const lineOptions = {
    scales: {
      x: {
        grid: {
          color: "#2c2c2c",
        },
      },
      y: {
        grid: {
          color: "#2c2c2c",
        },
      },
    },
    layout: {
      padding: 5,
    },
    plugins: {
      gradient,
      legend: {
        display: false,
      },
    },
  };

  const getTimePeriod = () => {
    return timePeriod ? dataOptions.find((i) => i.value === timePeriod) : "";
  };

  const onChangeHandler = (newValue) => {
    setTimePeriod(newValue.value);
  };

  useEffect(() => {
    setData({
      ...data,
      labels: xScaleLabels,
    });
  }, [timePeriod]);

  return (
    <div>
      <div className={styles.assetHeader}>
        <h6 className="title">Total asset Value</h6>
        <Select
          value={getTimePeriod()}
          onChange={onChangeHandler}
          options={dataOptions}
          isSearchable={false}
          classNamePrefix="custom-select"
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
      <Line options={lineOptions} data={data}/>
    </div>
  );
};
