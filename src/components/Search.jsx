/* eslint-disable */
import React, { useState,useEffect} from "react";
import { Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchBar = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    border: "2px #000",
    backgroundColor: "#fff",
    borderRadius: "10px",
    fontWeight: "bold",
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});

const Search = ({ query, setQuery, setData }) => {
  const [buffer, setBuffer] = useState();

  useEffect(() =>{
    setBuffer(query)
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    var q = buffer;
    if (q) setQuery(q);
    else window.alert("Try Typing Again");
  };

  return (
    <>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mx={5}>
        <SearchBar
          fullWidth
          defaultValue={query}
          helperText="Enter your query here...(P.S. Only SELECT queries allowed)"
          onChange={(e) => {
            e.preventDefault();
            setBuffer(e.target.value);
          }}
        />
      </Grid>
      <Grid>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Run
        </Button>
      </Grid>
    </>
  );
};

export default Search;
