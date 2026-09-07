import { getHours, getMinutes, getSeconds } from "date-fns";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";

function getTimes(date) {
  return {
    hours: getHours(date),
    minutes: getMinutes(date),
    seconds: getSeconds(date),
  };
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

const ClockPage = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  const times = getTimes(date);

  return (
    <Layout>
      <h1>Clock</h1>
      <h1>
        {formatTime(times.hours)}:{formatTime(times.minutes)}:
        {formatTime(times.seconds)}
      </h1>
    </Layout>
  );
};

export default ClockPage;
