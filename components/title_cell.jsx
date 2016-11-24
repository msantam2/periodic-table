import React from 'react';

const TitleCell = ({ color, letter, text }) => {
  let style = {background: `${color}`};

  return (
    <td className='no-cursor-pointer' style={style}>
      <div className='title-cell-info'>
        <p className='title-letter'>{letter}</p>
        <p className='title-text'>{text}</p>
      </div>
    </td>
  )
};

export default TitleCell;
