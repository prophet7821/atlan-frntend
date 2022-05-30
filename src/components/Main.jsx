/* eslint-disable */
import React, { useState, useEffect } from "react";
import readData from "./api/readData";
import Search from "./Search";
import { Grid } from "@mui/material";
import Table from "./Table/Table";
import Details from './Details';
const Main = () => {
  const [query, setQuery] = useState("select * from customers");
  const [data, setData] = useState();

  useEffect(() => {
    readData(query).then((data) => {
      setData(data);
    });
  }, [query]);

  console.log(data);

  return (
    <Grid container direction="row" justifyContent="center">
      {/* Search Grid */}
      <Grid container justifyContent="center" alignItems="center" mt={10}>
        <Search query={query} setQuery={setQuery} setData={setData} />
      </Grid>
      <Grid container m={5} justifyContent="center">
        {data && data.length > 0 ? <Table data={data} /> : <p>Invalid Data</p>}
      </Grid>
      <Grid container m={5}>
        <Details/>
      </Grid>
    </Grid>
  );
};

export default Main;
