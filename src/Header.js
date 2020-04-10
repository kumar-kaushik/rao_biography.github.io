import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    const { primaryHeading } = this.props;
    const { secondaryHeading } = this.props;
    return (
      <div className="header">
        <div className="text-center">
          <h1> { primaryHeading }</h1>
          { secondaryHeading && <p>{ secondaryHeading }</p> }
        </div>
      </div>
    );
  }

}
