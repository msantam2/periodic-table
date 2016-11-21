import React from 'react';

const ElementGroupColors = ({ colors }) => {
  let elementGroups = [];
  let style;
  for (let group in colors) {
    style = {background: `${colors[group]}`};
    elementGroups.push(
      <td key={group} className='element-group' style={style}>
        <p className='element-group-text'>{group}</p>
      </td>
    )
  }

  return (
    <table className='element-groups'>
      <tbody>
        <tr>
          {elementGroups}
        </tr>
      </tbody>
    </table>
  );
}

export default ElementGroupColors;