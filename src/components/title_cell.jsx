import '../stylesheets/title_cell';
import React from 'react';

const TitleCell = ({ letter, text }) => {
  return (
    <td className='title-cell-wrapper no-cursor-pointer'>
      <div className='title-cell-info'>
        <p className='title-letter'>{letter}</p>
        <p className='title-text'>{text}</p>
      </div>
    </td>
  )
};

export default TitleCell;
