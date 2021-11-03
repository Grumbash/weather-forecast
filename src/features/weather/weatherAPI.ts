import { Coords, Fact, Geo } from "./type";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Response = { now: number; geo_object: Geo; fact: Fact };

export const fetchWeather = async ({lat, lon}: Coords): Promise<Response> => {
  const res = await fetch(`/weather?lat=${lat}&lon=${lon}`);
  const data = await res.json();
  return data;
};

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://forecast-be-api.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getWeatherByQuery: builder.query<Response, Coords>({
      query: ({ lat, lon }) => `/weather?lat=${lat}&lon=${lon}`,
    }),
  }),
});

export const { useGetWeatherByQueryQuery } = weatherApi;
