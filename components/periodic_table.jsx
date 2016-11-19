import React from 'react';
import pt from 'periodic-table';
import ChemicalElement from './chemical_element';

class PeriodicTable extends React.Component {
  render() {
    let elements = pt.all();
    elements = elements.map((element, idx) => {
      return <ChemicalElement key={idx} element={element} />
    });

    return (
      <div>
        <ul>
          {elements}
        </ul>
      </div>
    );
  }
}

export default PeriodicTable;
