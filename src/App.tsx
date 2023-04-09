import React, { FC } from "react";
import { Clock } from "./components";
import { useTime, TZ } from "./custom-hooks/useDate";
import "./styles.scss";

export const App: FC = () => {
  const { time, isLoading, hasError, errorMessage } = useTime();

  if (!time || isLoading || hasError) {
    return <h1>{errorMessage || "No data"}</h1>;
  }

  return (
    <>
      <Clock color="white" time={time} tz={TZ.CURRENT} />
      <Clock color="black" time={time} tz={TZ.CHICAGO} />
      <Clock color="white" time={time} tz={TZ.AMSTERDAM} />

      <div className="semicircles">
        <div className="semicircle1"></div>
        <div className="semicircle2"></div>
        <div className="semicircle3"></div>
        <div className="semicircle4"></div>
      </div>
    </>
  );
};
