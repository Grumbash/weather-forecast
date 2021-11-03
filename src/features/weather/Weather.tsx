import React, { useEffect, FC, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useGetWeatherByQueryQuery } from "./weatherAPI";
import { Fact, Geo } from "./type";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import {
  YMaps,
  Map,
  SearchControl,
  GeolocationControl,
  Circle,
} from "react-yandex-maps";
import { Input } from "@mui/material";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {

}

export const Weather: FC<Props> = (props) => {
  // const query = useQuery()
  // const lat = query.get("lat");
  // const lon = query.get("lon");
  const [geo, setGeo] = useState<Geo>();
  const [factState, setFact] = useState<Fact>();
  const [open, setOpen] = React.useState(false);
  const [lat, setLat] = useState('11.632062');
  const [lon, setLon] = useState('51.104087');
  const { data, error, isError, isLoading, isSuccess } =
    useGetWeatherByQueryQuery({
      lat: Number(lat),
      lon: Number(lon),
  });

  useEffect(() => {
    if (isSuccess && data) {
      setGeo(data.geo_object);
      setFact(data.fact);
      setOpen(false);
    }
  }, [isSuccess, data]);

  useEffect(() => {
      if(isError && error){
        setOpen(true)
        console.error(error)
      }
  }, [isError, error]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    };

    setOpen(false);
  };

  const changeCoords =
    (direction: "lat" | "lon") => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (direction === "lat") {
        setLat(e.target.value);
      }
      if (direction === "lon") {
        setLon(e.target.value);
      }
    };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error && ((error as FetchBaseQueryError)?.data as string)}
        </Alert>
      </Snackbar>
      {isLoading ? (
        <CircularProgress></CircularProgress>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <p>Country: {geo?.country?.name}</p>
          <p>Province: {geo?.province?.name}</p>
          <p>Temp: {factState?.temp}</p>
          <p>
            <img
              src={`https://yastatic.net/weather/i/icons/funky/dark/${factState?.icon}.svg`}
              alt="weather icon"
            ></img>
          </p>
        </Box>
      )}
      <Box>
        <Input name="lat" value={lat} onChange={changeCoords("lat")}></Input>
        <Input name="lon" value={lon} onChange={changeCoords("lon")}></Input>
      </Box>
      <YMaps>
        <div>
          <Map
            state={{ center: [Number(lat), Number(lon)], zoom: 5 }}
            height="600px"
            width="100%"

          >
            <Circle
              geometry={[[Number(lat), Number(lon)], 10000]}
              options={{
                draggable: false,
                fillColor: "#DB709377",
                strokeColor: "#990066",
                strokeOpacity: 0.8,
                strokeWidth: 5,
              }}
            />
            <SearchControl options={{ float: "right" }} />
            <GeolocationControl options={{ float: "left" }} />
          </Map>
        </div>
      </YMaps>
    </div>
  );
};
