import React from 'react';
import pt from 'periodic-table';
import ChemicalElement from './chemical_element';
import LanthanidesActinides from './lanthanides_actinides';
import { COLORS } from '../util/colors';

class PeriodicTable extends React.Component {
  getElementsByGroup(group, atomicNumber = null) {
    let allElements = pt.all();

    let elements = allElements.filter(elem => {
      return (elem.groupBlock === group || elem.atomicNumber === atomicNumber);
    });

    elements = elements.map((elem, idx) => {
      return <ChemicalElement key={elem.atomicNumber} element={elem} color={COLORS[group]}/>
    });

    return elements;
  }

  render() {
    let lanthanides = this.getElementsByGroup('lanthanoid', 71);
    let actinides = this.getElementsByGroup('actinoid', 103);

    return (
      <LanthanidesActinides lanthanides={lanthanides}
                            actinides={actinides}/>
    );
  }
}

export default PeriodicTable;
