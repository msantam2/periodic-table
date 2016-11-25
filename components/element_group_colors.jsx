import React from 'react';

const ElementGroupColors = ({ groups }) => {
  let elementGroups = [];
  let groupClass;

  for (let group of groups) {
    if (group.includes(' ')) {
      groupClass = group.replace(/ /g, '-');
    } else {
      groupClass = group;
    }

    elementGroups.push(
      <td key={Math.random()} className={`element-group ${groupClass}`}>
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
