import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import data from "../../asset/asset.json";
import columns from "../../asset/column.json";

const Test_component = () => (
  <React.Fragment>
    <h4>Simple Data-Table</h4>
    <DataTable
      columns={columns}
      data={data}
      theme="solarized"
    />
  </React.Fragment>
);

export default Test_component;
