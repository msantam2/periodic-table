import React from 'react';

const LanthanidesActinides = ({ lanthanides, actinides }) => (
  <table className='lanthanides-actinides'>
    <tbody>
      <tr>
        {lanthanides}
      </tr>
      <tr>
        {actinides}
      </tr>
    </tbody>
  </table>
);

export default LanthanidesActinides;
