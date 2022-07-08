import React from "react";

//TO DO install react router DOM
// import { Link } from "react-router-dom";

enum navigation {
  CREATE_MARKER = "create marker",
  VIEW_MAP = "view map",
}

interface headerProps {
  hasLocation?: boolean;
}

export default function Header({ hasLocation }: headerProps) {
  return (
    <div className="appHeader">
      <h1 className="appHeader__title">Mood Map</h1>
    </div>
  );
}

{
  /* <Link to="map"> View Map </Link>
<Link to="create"> Create Marker </Link> */
}

// {hasLocation ? (
//   <a
//     className="text-lg ml-2 p-2 rounded-sm bg-green-500"
//     onClick={openForm}
//   >
//     createMarker
//   </a>
// ) : (
//   <a className="text-l ml-2 bg-red-500 p-2 rounded-sm">
//     location unavailable
//   </a>
// )}
