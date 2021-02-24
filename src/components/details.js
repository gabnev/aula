import React from "react";

const details = (props) => {
  console.log("detail props ", props.country);

  const countryDetails = () => {
    return (
      <>
        <div>
          <ul>
            <li>Name: {props.country.name}</li>
            <li>Region: {props.country.region}</li>
            <li>Capital: {props.country.capital}</li>
            <li>Population: {props.country.population}</li>
            <li>Timzones: {props.country.timezones}</li>
            <li>Native name: {props.country.nativeName}</li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <div>
      <ul>{countryDetails()}</ul>
    </div>
  );
};

export default details;
