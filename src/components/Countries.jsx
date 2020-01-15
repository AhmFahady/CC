import React, { useState, useEffect } from "react";
import Axios from "axios";

const Countries = () => {
  const [storage, setStorage] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = Axios.get("https://restcountries.eu/rest/v2/all");
    data.then(response => {
      setStorage(response.data);
    });
  }, []);

  const handleSearchChange = event => {
    const searchVal = event.target.value;
    setSearch(searchVal);
    console.log(search);
  };

  const filteredSearch = storage.filter(
    value =>
      value.name.toLowerCase().includes(search.toLowerCase()) ||
      value.capital.toLowerCase().includes(search.toLowerCase())
  );
  const filteredValues = filteredSearch.map(value => {
    return <li key={value.name}>{value.name}</li>;
  });

  const fullResults = filteredSearch.map(values => {
    return (
      <li key={values.name}>
        <h2>{values.name}</h2> <br></br>
        <p> Capital: {values.capital}</p>
        <p> population: {values.population} </p>
        <p>
          {" "}
          Languages:{" "}
          {values.languages.map(lang => {
            return (
              <ul>
                {" "}
                <li key={lang.iso639_1}>{lang.name}</li>
              </ul>
            );
          })}
        </p>
        <img src={values.flag} width="100" height="100" alt="img"></img>
        <p>{values.location}</p>
      </li>
    );
  });

  const Numbers =
    search.length < 1 ? (
      storage.map(value => {
        return <li key={value.name}>{value.name}</li>;
      })
    ) : filteredSearch.length > 10 ? (
      <p> too many matches!</p>
    ) : filteredSearch.length > 1 ? (
      filteredValues
    ) : (
      fullResults
    );
  console.log("starage array", storage);

  return (
    <div>
      <div>
        <h1>Search form</h1>
        <form>
          <div>
            Name:
            <input
              type="text"
              value={search}
              required
              onChange={handleSearchChange}
            />
          </div>
        </form>
      </div>

      <div>
        <h3>Numbers</h3>
        <ul>{Numbers}</ul>
      </div>
    </div>
  );
};

export default Countries;
