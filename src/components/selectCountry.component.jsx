
import { Grid,Autocomplete,TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const SelectCountry = (props) => {
  const [country, setCountry] = useState([]);

  const {value,setValue,label} = props
  const dataFilter = country.filter(item=>'currencies' in item)
  const dataCountries = dataFilter.map(item=>{
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
  })

   useEffect(() => {
     fetch("https://restcountries.com/v3.1/all")
       .then((response) => response.json())
       .then((data) => {
         setCountry(data);
       });
   }, []);


  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={value}
        disableClearable
        onChange={(event,newValue)=>{
          setValue(newValue)
        }}
        options={dataCountries}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCountry;
