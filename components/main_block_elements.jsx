import React from 'react';
import NullComponent from './null_component';
import RangeCell from './range_cell';
import { COLORS } from '../util/colors';

const MainBlockElements = ({ elements }) => {
  // elements =
  // [<ChemicalElement hydrogen /> , <ChemicalElement helium />, etc.]
  // = an array of React ChemicalElement Components ordered by atomic #
  let firstRow = [elements[0]];
  for (let i = 0; i < 16; i++) {
    firstRow.push(<NullComponent key={Math.random()} />);
  }
  firstRow.push(elements[1]);

  let secondRow = [elements[2], elements[3]];
  for (let i = 0; i < 10; i++) {
    secondRow.push(<NullComponent key={Math.random()} />);
  }
  for (let i = 4; i < 10; i++) {
    secondRow.push(elements[i]);
  }

  let thirdRow = [elements[10], elements[11]];
  for (let i = 0; i < 10; i++) {
    thirdRow.push(<NullComponent key={Math.random()} />);
  }
  for (let i = 12; i < 18; i++) {
    thirdRow.push(elements[i]);
  }

  let fourthRow = [];
  for (let i = 18; i < 36; i++) {
    fourthRow.push(elements[i]);
  }

  let fifthRow = [];
  for (let i = 36; i < 54; i++) {
    fifthRow.push(elements[i]);
  }

  let sixthRow = [elements[54], elements[55]];
  sixthRow.push(<RangeCell key={Math.random()} range={'57-71'} color={COLORS['lanthanoid']} />);
  for (let i = 56; i < 71; i++) {
    sixthRow.push(elements[i]);
  }
  // 88
  let seventhRow = [elements[71], elements[72]];
  seventhRow.push(<RangeCell key={Math.random()} range={'89-103'} color={COLORS['actinoid']} />);
  for (let i = 73; i < 88; i++) { // when 72
    seventhRow.push(elements[i]);
  }

  return (
    <table>
      <tbody>
        <tr className='first-row'>
          {firstRow}
        </tr>
        <tr className='second-row'>
          {secondRow}
        </tr>
        <tr className='third-row'>
          {thirdRow}
        </tr>
        <tr className='fourth-row'>
          {fourthRow}
        </tr>
        <tr className='fifth-row'>
          {fifthRow}
        </tr>
        <tr className='sixth-row'>
          {sixthRow}
        </tr>
        <tr className='seventh-row'>
          {seventhRow}
        </tr>
      </tbody>
    </table>
  );
}

export default MainBlockElements;
