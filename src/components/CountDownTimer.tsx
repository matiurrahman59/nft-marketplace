import React, { FC } from "react";

interface CountDownTimer {
  style?: string;
  children?: React.ReactNode;
}

const CountDownTimer: FC<CountDownTimer> = ({ style, children }) => {
  return (
    <div className="rounded-5 bg-blur-1/50 p-[30px] backdrop-blur-sm">
      <span className="font-spaceMono text-xs">Auction ends in:</span>
      <div className="mt-[10px] flex justify-between gap-4">
        <div>
          <div className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
            59
          </div>
          <div className="font-spaceMono text-xs">Hours</div>
        </div>
        <div className="text-[28px] font-semibold leading-10">:</div>
        <div>
          <div className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
            59
          </div>
          <div className="font-spaceMono text-xs">Minutes</div>
        </div>
        <div className="text-[28px] font-semibold leading-10">:</div>
        <div>
          <div className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
            59
          </div>
          <div className="font-spaceMono text-xs">Seconds</div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CountDownTimer;
