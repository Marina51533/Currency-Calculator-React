import React, { useContext } from "react";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { CurrencyContext } from "../context/currencyContext";

const InputAmount = () => {
  const {firstAmount,setFirstAmount} = useContext(CurrencyContext)
  return <Grid item xs={12} md>
    <TextField
    value={firstAmount}
    onChange={e=>setFirstAmount(e.target.value)}
    label='Amount'
    fullWidth
    InputProps={{
      type:'number',
      startAdornment:<InputAdornment position='start'>$</InputAdornment>
    }}>
      
    </TextField>
  </Grid>;
};

export default InputAmount;
