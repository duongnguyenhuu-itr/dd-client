import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Clock } from "lucide-react";

const CountDown = ({ endTime }: { endTime: Dayjs }) => {
  const [state, setState] = useState(() => {
    const duration = endTime.diff(Date.now());
    return {
      hours: Math.floor(duration / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0"),
      minutes: Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0"),
      seconds: Math.floor((duration % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0"),
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const duration = endTime.diff(Date.now());
      setState({
        hours: Math.floor(duration / (1000 * 60 * 60))
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((duration % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, "0"),
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [endTime]);

  return (
    <div className="flex items-center gap-2">
      <Clock />
      <div className="flex gap-0.5">
        <div className="flex h-8 w-10 md:h-10 md:w-12 md:text-lg lg:h-12 lg:w-14 lg:text-2xl items-center justify-center rounded-lg bg-[#F3F3F3]">
          {state.hours}
        </div>
        <div className="flex h-8 w-10 md:h-10 md:w-12 md:text-lg lg:h-12 lg:w-14 lg:text-2xl items-center justify-center rounded-lg bg-[#F3F3F3]">
          {state.minutes}
        </div>
        <div className="flex h-8 w-10 md:h-10 md:w-12 md:text-lg lg:h-12 lg:w-14 lg:text-2xl items-center justify-center rounded-lg bg-[#F3F3F3]">
          {state.seconds}
        </div>
      </div>
    </div>
  );
};

export default CountDown;
