import React from "react";
import { Table } from "reactstrap";

const Macros = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Calories</th>
          <th>Protiens</th>
          <th>Fats</th>
          <th>Carbs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">423</th>
          <td>6.5</td>
          <td>7.8</td>
          <td>35.5</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Macros;
