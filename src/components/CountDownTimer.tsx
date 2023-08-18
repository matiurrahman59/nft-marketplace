import Countdown from "react-countdown";

interface RendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const CountDownTimer = () => {
  const currentDate = Date.now();
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const targetDate = currentDate + oneDayInMilliseconds;

  const renderer = ({ hours, minutes, seconds, completed }: RendererProps) => {
    if (completed) {
      return <span className="ml-5 text-gradient-1/70">Already time out</span>;
    } else {
      return (
        <div className="mt-[10px] flex justify-between gap-4">
          <div>
            <div className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
              {hours}
            </div>
            <div className="font-spaceMono text-xs">Hours</div>
          </div>
          <div className="text-[28px] font-semibold leading-10">:</div>
          <div>
            <div className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
              {minutes}
            </div>
            <div className="font-spaceMono text-xs">Minutes</div>
          </div>
          <div className="text-[28px] font-semibold leading-10">:</div>
          <div>
            <div className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
              {seconds}
            </div>
            <div className="font-spaceMono text-xs">Seconds</div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="rounded-5 bg-blur-1/50 p-[30px] backdrop-blur-sm">
      <span className="font-spaceMono text-xs">Auction ends in:</span>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CountDownTimer;
