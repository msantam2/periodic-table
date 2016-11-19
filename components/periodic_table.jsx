import React from 'react';
import pt from 'periodic-table';

class PeriodicTable extends React.Component {


  render() {
    let allElements = pt.all();
    allElements = allElements.map(elem => {
      return <li>{elem.name}</li>;
    });

    return (
      <div>
        <ul>
          {allElements}
        </ul>
      </div>
    );
  }
}

export default PeriodicTable;
