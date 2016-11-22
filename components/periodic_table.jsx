import React from 'react';
import pt from 'periodic-table';
import { COLORS } from '../util/colors';
import ChemicalElement from './chemical_element';
import MainBlockElements from './main_block_elements';
import LanthanidesActinides from './lanthanides_actinides';
import ElementGroupColors from './element_group_colors';
import { isBetween } from '../util/functions';

class PeriodicTable extends React.Component {
  createElementComponent(element, key, group) {
    let color;
    switch (element.name) {
      case 'Lutetium':
        color = COLORS['lanthanoid'];
        break;
      case 'Lawrencium':
        color = COLORS['actinoid'];
        break;
      default:
        color = COLORS[group];
    }

    return <ChemicalElement key={key} element={element} color={color} />;
  }

  getElementByAtomicNumber(atomicNumber) {
    let element = pt.numbers[atomicNumber];
    element = this.createElementComponent(element, atomicNumber, element.groupBlock);
    return element;
  }

  getElementsByGroup(group) {
    let allElements = pt.all();

    let elements = allElements.filter(element => {
      return element.groupBlock === group;
    });

    elements = elements.map(element => {
      return this.createElementComponent(element, element.atomicNumber, group);
    });

    return elements;
  }

  render() {
    let mainBlockElements = pt.all().filter(element => {
      return (
        isBetween(element.atomicNumber, 1, 56) ||
        isBetween(element.atomicNumber, 72, 88) ||
        isBetween(element.atomicNumber, 104, 118)
      );
    });

    mainBlockElements = mainBlockElements.map(element => {
      return (
        this.createElementComponent(element, element.atomicNumber, element.groupBlock)
      );
    });

    let lanthanides = this.getElementsByGroup('lanthanoid');
    lanthanides = lanthanides.concat(this.getElementByAtomicNumber(71));
    let actinides = this.getElementsByGroup('actinoid');
    actinides = actinides.concat(this.getElementByAtomicNumber(103));

    return (
      <div className='wrapper'>
        <MainBlockElements elements={mainBlockElements} />
        <LanthanidesActinides lanthanides={lanthanides}
          actinides={actinides} />
        <ElementGroupColors colors={COLORS} />
      </div>
    );
  }
}

export default PeriodicTable;
