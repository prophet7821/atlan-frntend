import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {Grid} from '@mui/material'

const Table = ({ data }) => {
  var keys = Object.keys(data[0]);
  //console.log(keys);

  const columns = [];

  columns.push({ field: "id", headerName: "Sr.No", width: 70 });
  keys.map((key) => {
    columns.push({ field: key, headerName: key, width: 300 });
  });

  console.log(columns);

  const rows = [];

  var count = 1;
  data.map((dat) => {
    rows.push({ ...dat, id: count });
    count += 1;
  });

  console.log(rows);

  return (
    <Grid container justifyContent="center" xl={12} lg={12} md={12} sm={12} xs={12} sx={{ height: 600 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Grid>
  );
};

export default Table;
