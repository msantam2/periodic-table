import React from 'react';
import pt from 'periodic-table';
import { COLORS } from '../util/colors';
import ChemicalElement from './chemical_element';
import LanthanidesActinides from './lanthanides_actinides';
import ElementGroupColors from './element_group_colors';

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
      <div className='wrapper'>
        <LanthanidesActinides lanthanides={lanthanides}
          actinides={actinides}/>
        <ElementGroupColors colors={COLORS} />
      </div>
    );
  }
}

export default PeriodicTable;
