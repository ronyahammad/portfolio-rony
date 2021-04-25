import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import PinDropIcon from "@material-ui/icons/PinDrop";
import { yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
}));
const Token =
  "pk.eyJ1Ijoicm9ueTAxIiwiYSI6ImNraXhzZTZtbjF1aTEydW1tcjQ2ejRuYTkifQ.5_D3K6CYvPhvsyAcBeD5vA";
console.log(process.env.MAP_API);
const markerList = [
  {
    lat: 37.103271,
    long: -8.67322,
    name: "This is where i live in",
    info: 10,
  },
  {
    lat: 37.1028,
    long: -8.67296,
    name: "Millennium bcp",
    info: 20,
  },
  {
    lat: 37.10335,
    long: -8.67227,
    name: "Mercado Municipal de Lagos",
    info: 30,
  },
];

function renderPopup({ index, popupInfo, setPopupInfo }) {
  return (
    <React.Fragment>
      {popupInfo && (
        <Popup
          tipSize={5}
          anchor="bottom-right"
          longitude={markerList[index].long}
          latitude={markerList[index].lat}
          onMouseLeave={(e) => {
            e.preventDefault();
            setPopupInfo(null);
          }}
          closeOnClick={true}
        ></Popup>
      )}
    </React.Fragment>
  );
}

export default function Map() {
  const classes=useStyles()
  const [popupInfo, setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 37.103271,
    longitude: -8.67322,
    width: "30%",
    height: "30%",
    zoom: 15,
    
    
  });

  return (
    <div className={classes.root}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={Token}
        mapStyle="mapbox://styles/rony01/ckixt8aio63dm19qm4ahve96q"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <div>
          {markerList.map((marker, index) => (
            <div key={index}>
              <Marker
                titleAccess={marker.name}
                longitude={marker.long}
                latitude={marker.lat}
              >
                <PinDropIcon
                  name="Location"
                  size="small"
                  style={{ color: yellow[500] }}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setPopupInfo(true);
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    setPopupInfo(null);
                  }}
                />
              </Marker>
              {renderPopup(index)}
            </div>
          ))}
        </div>
      </ReactMapGL>
    </div>
  );
}
