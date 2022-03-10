import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries &&
          countries.map((countryInfo, i) => (
            <option key={i} value={countryInfo.country}>
              {countryInfo.country}
            </option>
          ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
