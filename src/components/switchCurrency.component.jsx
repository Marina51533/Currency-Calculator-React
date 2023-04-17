import { Button, Grid } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useContext } from "react";
import { CurrencyContext } from "../context/currencyContext";

const SwitchCurrency = () => {
   const { fromCurrency, setFromCurency, toCurrency, setToCurency } =
     useContext(CurrencyContext);
  const handleSwitch = ()=>{
   setFromCurency(toCurrency)
   setToCurency(fromCurrency)
  }
  return (
    <Grid item xs={12} md='auto'>
      <Button onClick={handleSwitch} sx={{
        borderRadius:1,
        height:'100%'
      }}>
<CompareArrowsIcon sx={{
  fontSize:30
}}/>
      </Button>
    </Grid>
  );
};

export default SwitchCurrency;
