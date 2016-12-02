import React from 'react';
import pt from 'periodic-table';
import ChemicalElement from './chemical_element';
import MainBlockElements from './main_block_elements';
import LanthanidesActinides from './lanthanides_actinides';
import ElementGroupColors from './element_group_colors';
import { isBetween } from '../util/functions';

class PeriodicTable extends React.Component {
  createElementComponent(element, key, group) {
    let groupClass;

    switch (element.name) {
      case 'Lutetium':
        groupClass = 'lanthanoid';
        break;
      case 'Lawrencium':
        groupClass = 'actinoid';
        break;
      case 'Ununpentium':
        groupClass = 'metal';
        break;
      case 'Livermorium':
        groupClass = 'metal';
        break;
      case 'Ununseptium':
        groupClass = 'halogen';
        break;
      case 'Ununoctium':
        groupClass = 'noble gas';
        break;
      default:
        groupClass = group;
    }

    return <ChemicalElement key={key} element={element} groupClass={groupClass} />;
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

    let groups = pt.all().map(el => {
      return el.groupBlock;
    });
    groups = Array.from(new Set(groups));

    return (
      <div className='wrapper'>
        <MainBlockElements elements={mainBlockElements} />
        <LanthanidesActinides lanthanides={lanthanides}
          actinides={actinides} />
        <ElementGroupColors groups={groups} />
      </div>
    );
  }
}

export default PeriodicTable;
