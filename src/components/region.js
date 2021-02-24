import React from "react";

const Region = (props) => {
  const renderForm = () => {
    return props.regions.map((alternative) => {
      return (
        <option key={alternative.id} value={alternative.region}>
          {alternative.region}
        </option>
      );
    });
  };

  const userChoice = (event) => {
    props.selectedRegion(event.target.value);
  };

  return (
    <div>
      <select onChange={userChoice}>{renderForm()}</select>
    </div>
  );
};

export default Region;
