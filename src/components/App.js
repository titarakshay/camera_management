import React from "react";
import HomePage from "./HomePage";
import "../style.css";
import "../loader.css";
import Headers from "./Headers";

export default function App() {
  return (
    <section className="container wrapper">
      <Headers />
      <HomePage />
    </section>
  );
}
