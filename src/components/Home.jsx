import React, { useEffect, useState } from "react";
import PopulationGraph from "./graph/PopulationGraph";
import { Card, Box, Grid } from "@mui/material";
import PriceTile from "./PriceTile";
import UpdatedTime from "./UpdatedTime";
import Header from "./Header";
import { getPopulation, getCryptoPrice } from "../services";

const HomePage = () => {
  const [populationData, setPopulationData] = useState([]);
  const [cryptoPrice, setCryptoPrice] = useState({});
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    fetchPopulation();
    fetchCryptoPrice();
  }, []);

  const fetchPopulation = async () => {
    const populationdata = await getPopulation();
    sortDataAscending(populationdata.data);
  };

  const fetchCryptoPrice = async () => {
    const price = await getCryptoPrice();
    const currencyNames = Object.keys(price.bpi);
    setCryptoPrice(price);
    setCurrency(currencyNames);
  };

  const sortDataAscending = (data) => {
    if (data.length) {
      const sortedData = data.sort(function (a, b) {
        return a["ID Year"] - b["ID Year"];
      });

      setPopulationData(sortedData);
    }
  };

  return (
    <>
      <Header title="Dashboard" />
      <Box maxWidth={700}>
        <Card>
          <PopulationGraph populationData={populationData} />
        </Card>
      </Box>
      <Box my={4}>
        <UpdatedTime time={cryptoPrice.time} />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {currency.map((currency, index) => (
            <Grid item xs={2} sm={3} md={3} key={index}>
              <PriceTile currencyData={cryptoPrice.bpi[currency]} key={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
