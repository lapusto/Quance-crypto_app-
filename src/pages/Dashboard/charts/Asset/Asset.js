import { useState } from "react";
import Select from "react-select";
import styles from "./Asset.module.scss";

export const Asset = () => {
  const [timePeriod, setTimePeriod] = useState(3);

  const options = [
    { value: 3, label: "Last 3 months" },
    { value: 6, label: "Last 6 months" },
    { value: 12, label: "Last year" },
  ];

  const getTimePeriod = () => {
    return timePeriod ? options.find((i) => i.value === timePeriod) : "";
  };

  const onChangeHandler = (newValue) => {
    setTimePeriod(newValue.value);
  };

  return (
    <div>
      <div className={styles.assetHeader}>
        <h6 className="title">Total asset Value</h6>
        <Select
          value={getTimePeriod()}
          onChange={onChangeHandler}
          options={options}
          isSearchable={false}
          classNamePrefix="custom-select"
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
    </div>
  );
};
