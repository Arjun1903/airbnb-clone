import React, { useState } from "react";
import "../Css/Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>

      <div className="banner_info">
        <h1>Die Welt vor Ort entdecken</h1>
        <h5>
          Plane deinen Urlaub mal anders und entdecke Geheimtipps in deiner
          Umgebung.
        </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          In der Umgebung entdecken
        </Button>
      </div>
    </div>
  );
}

export default Banner;
