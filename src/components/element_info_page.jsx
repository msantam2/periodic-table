import React from 'react';

class ElementInfoPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.params['elementName']}
      </div>
    )
  };
};

export default ElementInfoPage;
