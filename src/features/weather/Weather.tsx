import React, { useEffect, FC, useState } from "react";
import { fetchWeather } from "./weatherAPI";
import { Fact, Geo } from "./type";
import { useQuery } from "../../app/hooks";

interface Props {

}

export const Weather: FC<Props> = (props) => {
  const query = useQuery()
  const [geo, setGeo] = useState<Geo>();
  const [factState, setFact] = useState<Fact>();

  const getWeather = async() => {
    const lat = query.get("lat");
    const lon = query.get("lon");
    if (lat && lon){
      const { geo_object, fact } = await fetchWeather({
        lat: Number(lat),
        lon: Number(lon),
      });
    setGeo(geo_object);
    setFact(fact);}

  }

  useEffect(() => {
    getWeather()
  }, []);

  return (
    <div>
      <p>Country: {geo?.country?.name}</p>
      <p>Province: {geo?.province?.name}</p>
      <p>Temp: {factState?.temp}</p>
      <p>
        <img
          src={`https://yastatic.net/weather/i/icons/funky/dark/${factState?.icon}.svg`}
          alt="weather icon"
        ></img>
      </p>
    </div>
  );
};
