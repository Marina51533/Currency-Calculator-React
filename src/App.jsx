import { Container, Typography, Grid,Box } from "@mui/material";
import InputAmount from "./components/inputAmount.component";
import SelectCountry from "./components/selectCountry.component";
import SwitchCurrency from "./components/switchCurrency.component";
import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "./context/currencyContext";


function App() {
  const {
    fromCurrency,
    setFromCurency,
    toCurrency,
    setToCurency,
    firstAmount,
  } = useContext(CurrencyContext);
  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];
  console.log(resultCurrency);

  const boxStyles = {
    background: "#fff",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "3rem 2rem",
    boxShadow: "0px 12px 13px -3px rgba(0,0,0,0.2)",
    marginTop: "5rem",
    position: "relative",
  };

  useEffect(() => {
    if (firstAmount) {
      fetch(
        `https://api.freecurrencyapi.com/v1/latest?apikey=5pe07aGSVNeVtM8QTAgtBOCzCXIC9VFlaWyttEDi&base_currency=${codeFromCurrency}&currencies=${codeToCurrency}`
      )
        .then((response) => response.json())
        .then((data) => setResultCurrency(data.data[codeToCurrency]))
        .catch((error) => console.log(error));
    }
  }, [firstAmount,fromCurrency,toCurrency]);

  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
        Accurate Conversions
      </Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry
          value={fromCurrency}
          setValue={setFromCurency}
          label="From"
        />
        <SwitchCurrency />
        <SelectCountry value={toCurrency} setValue={setToCurency} label="To" />
      </Grid>
      {firstAmount ? (
        <Box sx={{textAlign:'left', marginTop:'1rem'}}>
          <Typography>
            {firstAmount} {fromCurrency} =
          </Typography>
          <Typography variant="h5" xs={{marginTop:'1rem'}}>
            {resultCurrency*firstAmount} {toCurrency}
          </Typography>
        </Box>
      ) : 
        "Nothing"
      }
    </Container>
  );
}

export default App;
