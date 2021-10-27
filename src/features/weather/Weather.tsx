import React, { useEffect, FC, useState } from "react";
import { fetchWeather } from "./weatherAPI";

interface Props {

}

export const Weather: FC<Props> = (props) => {

  const [nowState, setNowState] = useState<number | null>(null)

  const getWeather = async() => {

    const {now} = await fetchWeather();
    setNowState(now)

  }

  useEffect(() => {
    getWeather()
  }, [])
  return <div>Weather for {nowState && new Date(nowState).toLocaleDateString()} is good</div>;
};
