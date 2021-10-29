import { Coords, Fact, Geo } from "./type";

export type Response = { now: number; geo_object: Geo; fact: Fact };

export const fetchWeather = async ({lat, lon}: Coords): Promise<Response> => {
  const res = await fetch(`/weather?lat=${lat}&lon=${lon}`);
  const data = await res.json();
  return data;
};
