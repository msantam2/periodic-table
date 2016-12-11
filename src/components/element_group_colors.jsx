import '../stylesheets/element_group_colors';
import React from 'react';
import ElementGroupColor from './element_group_color'; 

const ElementGroupColors = ({ groups }) => { 
  let elementGroups = [];
  let groupClass;

  for (let group of groups) {
    elementGroups.push(
      <ElementGroupColor key={Math.random()} group={group} />
    );
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
