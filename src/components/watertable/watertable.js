import React from "react";
import { render } from "react-dom";
import watertabledata from './watertable_perfuel'
// import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Watertable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: watertabledata,
      columns: [
        {
          Header:'Fuel',
          accessor:'Fuel'
        },
        {
          Header:'Gal Water per MWh',
          accessor:"Water gal\/MWh"
        }
      ]
    };
  }
  render() {
    const { data } = this.state;
    const {columns} = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns = {columns}
          defaultPageSize={8}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default Watertable