import { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import Header from "./components/Header";
import Form from "./components/Form";
import ToggleButton from "./components/ToggleButton";
import { ICONS } from "./data/config";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon, LatLng } from "leaflet";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "./styles/App.css";
import "leaflet/dist/leaflet.css";

interface MARKER_DATA {
  icon: string;
  color: string;
  mood: string;
  location: LatLng;
}

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

const Bushwick = new LatLng(40.676022, -73.917931);

function App() {
  const [location, setLocation] = useState<LatLng | null>(null);
  const [markers, setMarkers] = useState<{} | null>({});
  const [formIsOpen, setFormIsOpen] = useState(false);

  //USED TO FETCH MARKERS ON APP LOAD
  // useEffect(() => {
  //   const markerDataRef = ref(db, "posts/");
  //   onValue(markerDataRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setMarkers(data);
  //   });
  // }, []);

  //LOG DATA WHEN DATA IS RETRIEVED
  // useEffect(() => {
  //   console.log(markers);
  // }, [markers]);

  // let Markers;
  // if (markers !== null) {
  //   Markers = Object.values(markers).map((marker: { MARKER_DATA }) => {
  //     const Ico = iconArray[marker.icon].component;
  //     const htmlString = ReactDOMServer.renderToString(
  //       <Ico fill={marker.color} width={"auto"} height={"auto"} />
  //     );
  //     const customMarker = divIcon({
  //       className: "customMapMarker",
  //       html: htmlString,
  //       iconSize: [28, 40],
  //       iconAnchor: [14, 40],
  //       popupAnchor: [14, -40],
  //     });

  //     return (
  //       <Marker position={marker.location} icon={customMarker} key={marker.id}>
  //         <Popup>{`mood: ` + marker.mood}</Popup>
  //       </Marker>
  //     );
  //   });
  // }

  // ` copy this backtick bc of shitty keyboard with no backtick ` ` `
  return (
    <div className="app">
      <Header />
      <MapContainer center={Bushwick} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {formIsOpen && <Form closeForm={() => setFormIsOpen(false)} />}
        <ToggleButton
          openForm={() => setFormIsOpen(true)}
          setLocation={setLocation}
        />
        {/* {Markers} */}
      </MapContainer>
    </div>
  );
}

export default App;

//JANK
// const customMarker = divIcon({
//   className: "customMapMarker",
//   html: `<img src=${iconArray[iconName.ANGRY].url} style = "fill:red"/> `,
//   iconSize: [40, 50],
// });

//JANKIER
// const htmlString = ReactDOMServer.renderToString(
//   <Default
//     fill={"red"}
//     width="40px"
//     style={{
//       position: "absolute",
//       fill: "green",
//       top: "-60px",
//       left: "-14px",
//     }}
//   />
// );
