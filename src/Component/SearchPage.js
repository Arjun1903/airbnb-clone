import React from "react";
import "../Css/SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 Stays - 26 august to 30 august - 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://s.hdnux.com/photos/75/22/66/16068019/7/920x920.jpg"
        locatio="Center of Erfurt"
        title="Stay at this wonderfull apartment "
        description="1 guest - 1 bedroom - wifi - kitchen "
        star={4.75}
        price="$40/night"
        total="$114 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/ef3544b7-e92d-4503-b17f-1ebca4072c5b.jpg?aki_policy=xx_large"
        locatio="Lovely Loft Saint-Germain des Pres"
        title="Ganze Wohnung · Gastgeber: Benoit"
        description="2 Gäste · 1 Schlafzimmer · 1 Bett · 1,5 Bäder"
        star={4}
        price="$50/night"
        total="$130 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/b93f2fae-0813-4737-b146-b9e00268269d.jpg?aki_policy=x_large"
        locatio="Einzelzimmer im Gärtnerplatzviertel"
        title="Privatzimmer in Wohnung ·· Gastgeber: Arjun"
        description="1 Gast · 1 Schlafzimmer · 1 Bett · Gemeinsame Gästetoilette"
        star={4.81}
        price="$60/night"
        total="$90 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/018cd94f-1286-43bc-88d5-2425a6e8c44d.jpg?aki_policy=x_large"
        locatio="THE PLACE TO BE // Trendy EIFFEL TOWER apartment"
        title="Ganze Wohnung · Gastgeber: Benoit"
        description="2 Gäste · Studio · 1 Bett · 1,5 Bäder"
        star={4.46}
        price="$150/night"
        total="$290 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/182cdf9e-c2ae-4249-a0a0-ae9299baa60f.jpg?aki_policy=x_large"
        locatio="Gemütliches Zimmer mit Schwein Erfurt"
        title="Privatzimmer in Wohnung ·· Gastgeber: DAvid"
        description="2 Gäste · 1 Schlafzimmer · 1 Bett · 1 Gemeinschafts-Badezimmer"
        star={5.0}
        price="$80/night"
        total="$110 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/1208075c-6f08-4917-9561-579f66de926c.jpg?aki_policy=x_large"
        locatio="Wohnen in der Villa North"
        title="Privatzimmer in Villa · Gastgeber: Michael"
        description="1 Gast · 1 Schlafzimmer · 1 Bett · 2 Gemeinschafts-Badezimmer"
        star={4.68}
        price="$70/night"
        total="$150 total"
      />
    </div>
  );
}

export default SearchPage;
