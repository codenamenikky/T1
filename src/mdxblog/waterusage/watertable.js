import React from "react";
import { render } from "react-dom";
// import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Watertable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
      }]
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns = {[{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
          }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
          }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
          }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
          }]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default Watertable