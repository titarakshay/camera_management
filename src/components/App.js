import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import snapshotsData from "../images";
import "../style.css";
import Headers from "./Headers";
import Axios from "axios";

export default function App() {
  return (
    <section className="container wrapper">
      <Headers />
      <HomePage />
    </section>
  );
}
