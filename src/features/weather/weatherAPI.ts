export type Response = { now: number };

export const fetchWeather = async (): Promise<Response> => {
  const res = await fetch("/weather");
  const data = await res.json();
  return data;
};
