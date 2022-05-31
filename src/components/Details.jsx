import React from "react";
import { Typography, Grid } from "@mui/material";

const Details = () => {
  return (
    <Grid item>
      <Typography variant="h3" gutterBottom component="h3">
        Tables
      </Typography>

      <Typography gutterBottom paragraph>
        Below is listed the names of the tables and their attributes
      </Typography>

      <Typography variant="h6" gutterBottom component="h3">
        customers
      </Typography>
      <ul>
        <li>customerID</li>
        <li>companyName</li>
        <li>contactName</li>
        <li>contactTitle</li>
        <li>address</li>
        <li>city</li>
        <li>region</li>
        <li>postalCode</li>
        <li>country</li>
        <li>phone</li>
        <li>fax</li>
      </ul>

      <Typography variant="h6" gutterBottom component="h3">
        employees
      </Typography>
      <ul>
        <li>employeeID</li>
        <li>lastName</li>
        <li>firstName</li>
        <li>title</li>
        <li>titleOfCourtesy</li>
        <li>birthDate</li>
        <li>hireDate</li>
        <li>address</li>
        <li>city</li>
        <li>region</li>
        <li>postalCode</li>
        <li>country</li>
        <li>homePhone</li>
        <li>extension</li>
        <li>reportsTo</li>
      </ul>

      <Typography variant="h6" gutterBottom component="h3">
        orderCategories
      </Typography>
      <ul>
        <li>categoryId</li>
        <li>categoryName</li>
        <li>description</li>
      </ul>

      <Typography variant="h6" gutterBottom component="h3">
        products
      </Typography>
      <ul>
        <li>productID</li>
        <li>productName</li>
        <li>supplierID</li>
        <li>categoryID</li>
        <li>quantityPerUnit</li>
        <li>unitPrice</li>
        <li>unitsInStock</li>
        <li>unitsOnOrder</li>
        <li>reorderLevel</li>
        <li>discontinued</li>
      </ul>
    </Grid>
  );
};

export default Details;
