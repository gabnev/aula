import React, { useEffect, useState } from "react";
import "../list.css";

const List = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoaded === false) {
      fetch(`https://restcountries.eu/rest/v2/all`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setCountries(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, []);

  const renderList = () => {
    return countries.map((country) => {
      if (country.region === props.region) {
        return (
          <li key={country.name} onClick={() => props.setCountry(country)}>
            {country.name}
          </li>
        );
      }
    });
  };

  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default List;
