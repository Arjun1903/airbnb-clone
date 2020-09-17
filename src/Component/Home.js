import React from "react";
import "../Css/Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online-Entdeckungen"
          description="Einzigartige Aktivitäten, die wir gemeinsam ausprobieren können – geleitet von Gastgebern rund um die Welt."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Besondere Unterkünfte"
          description=" Unterkünfte, die mehr als nur ein Ort zum Schlafen sind"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Gesamte Unterkünfte"
          description="Komfortable private Unterkünfte mit viel Platz für Freunde oder die ganze Familie."
        />
      </div>

      <div className="home__section">
        <Card
          src="https://cf.bstatic.com/images/hotel/max1024x768/213/213273793.jpg"
          title="3 bedroom flat in Erfurt"
          description="Superhost with a stunning view of beachside in sunny Erfurt"
          price="$130/night"
        />
        <Card
          src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/178000/178783.jpg"
          title="Penthouse in munich"
          description="Enjoy the amazing sights of munich with this stunning penthouse"
          price="$160/night"
        />
        <Card
          src="https://www.bento.de/images/00000000-0003-0004-0000-000000791225_w910_h600_fpx50_fpy50.jpg"
          title="1 Bedroom apartment"
          description="Superhost with a great amenitites a fabolous shops nearby"
          price="$90/night"
        />
      </div>
    </div>
  );
}

export default Home;
