import { LatLng } from "leaflet";
import React from "react";
import { useMap } from "react-leaflet";
import { ReactComponent as Icon } from "../data/icons/defaultPointer.svg";

const POSITION_CLASSES = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};

type Props = {
  openForm: () => void;
  setLocation: (pos: LatLng) => void;
};

// openForm: React.MouseEventHandler<HTMLButtonElement>;
const ToggleButton = ({ openForm, setLocation }: Props) => {
  const Map = useMap();

  Map.on("locationfound", (e) => {
    setLocation(e.latlng);
    openForm();
  });
  Map.on("locationerror", () => {
    alert("you must enable geolocation in order to create a marker");
  });

  const getMarkerLocation = () => {
    Map.locate({ setView: true });
  };

  return (
    <div className={POSITION_CLASSES.topright}>
      <button
        className="leaflet-control toggleButton"
        onClick={getMarkerLocation}
      >
        <p className="toggleButton__text">Create Marker</p>
        <Icon className="toggleButton__icon" />
      </button>
    </div>
  );
};

export default ToggleButton;
