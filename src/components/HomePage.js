import React, { useEffect, useState } from "react";
import Upload from "./Upload";
import HeroSection from "./HeroSection";
import Axios from "axios";
import Snapshots from "./Snapshots";

export default function HomePage(props) {
  let [snapShots, setSnapShots] = useState(null);

  useEffect(() => {
    Axios.get(
      "https://cors-anywhere.herokuapp.com/https://s3.us-east-2.amazonaws.com/ftilab.com/api/traffic-counter-cameras.json"
    ).then(({ data }) => setSnapShots(data.data));
  }, []);
  return (
    <>
      <HeroSection snapShots={snapShots} />
      <Snapshots snapShots={snapShots} />
      <div className="float-right my-3 pl-3">
        <Upload />
      </div>
    </>
  );
}
