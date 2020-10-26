import React, { useState } from "react";
import { GiCctvCamera } from "react-icons/gi";
import Tags from "./Tags";

export default function HeroSection(props) {
  let [randomNumber, setRandomNumber] = useState(0);
  let { snapShots } = props;

  setTimeout(() => {
    setRandomNumber(Math.floor(Math.random() * snapShots?.length));
  }, 5000);

  let tagsArray = [];

  snapShots &&
    snapShots.map((product) => product.Tags.map((tag) => tagsArray.push(tag)));

  let uniqueTags = [...new Set(tagsArray)];
  return (
    <>
      <section>
        <div className="d-flex justify-content-between py-3 hero-section">
          <div className="hero-section-left">
            <div>
              <h3 className="hero-color">
                <span className="cctv mr-3" style={{ fontSize: "2rem" }}>
                  <GiCctvCamera />
                </span>
                Camera View
              </h3>
            </div>
            <div className="search-wrapper">
              <p className="search-p">Search</p>
              <div className="d-flex block">
                <input
                  className="my-1 input"
                  type="text"
                  name="tags"
                  placeholder=" search by device id"
                />

                <Tags uniqueTags={uniqueTags} />
              </div>
              <p className="pt-3 showing-all-p">
                Showing All({snapShots?.length})
              </p>
            </div>
          </div>
          <div className="hero-section-right">
            <p className="hero-color">Latest Snapshot</p>
            <div className="latest-snapshot">
              <img
                src={snapShots && snapShots[randomNumber]?.SnapshotSignedUrl}
                alt={snapShots && snapShots[randomNumber]?.userId}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
