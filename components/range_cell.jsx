import React from 'react';

const RangeCell = ({ range, color }) => {
  let style = {background: `${color}`};

  return (
    <td className='no-cursor-pointer' style={style}>
      <p className='range-info'>{range}</p>
    </td>
  )
};

export default RangeCell;
