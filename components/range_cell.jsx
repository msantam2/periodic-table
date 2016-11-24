import React from 'react';

const RangeCell = ({ range, color }) => {
  let style = {background: `${color}`};

  return (
    <td className='range-cell no-cursor-pointer' style={style}>
      <p className='range-numbers'>{range}</p>
    </td>
  )
};

export default RangeCell;
