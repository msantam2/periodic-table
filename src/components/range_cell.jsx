import '../stylesheets/range_cell';
import React from 'react';

const RangeCell = ({ group, range }) => (
  <td className={`${group} range-cell no-cursor-pointer`}>
    <p className='range-numbers'>{range}</p>
  </td>
)

export default RangeCell;
