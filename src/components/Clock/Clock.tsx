import React, { FC } from "react";
import s from "./Clock.module.scss";
import cn from "classnames";
import { ClockProps } from "./ClockProps";

export const Clock: FC<ClockProps> = ({
  time,
  color = "white",
  tz = "time"
}) => {
  return (
    <div>
      <div
        className={cn(s.clock, {
          [s.black]: color === "black",
          [s.white]: color === "white"
        })}
      >
        <div
          className={s.hour_hand}
          style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`
          }}
        />
        <div
          className={s.min_hand}
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`
          }}
        />
        <div
          className={s.sec_hand}
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`
          }}
        />
        <span className={s.twelve}>12</span>
        <span className={s.one}>1</span>
        <span className={s.two}>2</span>
        <span className={s.three}>3</span>
        <span className={s.four}>4</span>
        <span className={s.five}>5</span>
        <span className={s.six}>6</span>
        <span className={s.seven}>7</span>
        <span className={s.eight}>8</span>
        <span className={s.nine}>9</span>
        <span className={s.ten}>10</span>
        <span className={s.eleven}>11</span>
      </div>
      <h1>{tz}</h1>
    </div>
  );
};
