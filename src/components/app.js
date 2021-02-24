import React, { useState } from "react";
import Region from "./region";
import List from "./list";
import Details from "./details";

const App = () => {
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");

  const regions = [
    { id: 0, region: "" },
    { id: 1, region: "Africa" },
    { id: 2, region: "Americas" },
    { id: 3, region: "Asia" },
    { id: 4, region: "Europe" },
    { id: 5, region: "Oceania" },
  ];

  const selectedRegion = (selectedRegion) => {
    setRegion(selectedRegion);
  };

  console.log(country);

  return (
    <div className="ui container grid">
      <div className="ui row" style={{ height: "200px" }}>
        <div className="three wide column">
          <Region regions={regions} selectedRegion={selectedRegion} />
        </div>
        <div className="six wide column">
          <List region={region} setCountry={setCountry} />
        </div>
        <div className="six wide column">
          <Details country={country} />
        </div>
      </div>
    </div>
  );
};

export default App;
