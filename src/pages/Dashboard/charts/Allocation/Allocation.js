import { useEffect, useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import Select from "react-select";
import styles from "./Allocation.module.scss";
import {
  Chart as ChartJS,
  Title,
  ArcElement,
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
  ArcElement,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  gradient
);

export const Allocation = () => {
  const [timePeriod, setTimePeriod] = useState(3);

  const getMonthLabels = () => {
    const today = new Date();
    const periodStart = subMonths(new Date(), timePeriod);

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
     
        data: [10.33, 4.19, 10.33, 4.19, 10.33, 4.19, 2.40],
        backgroundColor: ["#a2e440", "#532e75", "#136b70", "#373737", "#344c22", "#6d417e", "#2d1c3d"],
        borderColor: "transparent",
        cutout: "55%"
      
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
      <h6 className="title">Aset allocation</h6>
      <div className={styles.doughnut}>
        <Doughnut data={data} />
      </div>
    </div>
  );
};
