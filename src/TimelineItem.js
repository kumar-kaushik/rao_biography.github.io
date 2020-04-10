import React, { Component } from 'react';
import classNames from 'classnames';

const images = require.context('./images', true);

export default class TimelineItem extends Component {

  renderTitle () {
    const { image, title } = this.props;
    if (image) {
      return (<div className="timeline-img-header"
        style={ {
          background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0, .4)), url(${images(`./${image}`)}) center center no-repeat`
        } }>
        <h2>{ title }</h2>
      </div>);
    }
    return <h2>{ title }</h2>;
  }

  render() {
    const { direction, date, content, image } = this.props;

    return (
      <div className="timeline-item">
        <div className="timeline-img" />
        <div className={ classNames('timeline-content', direction, {
          'js--fadeInRight': direction === 'right',
          'js--fadeInLeft': direction === 'left',
          'timeline-card': !!image
        }) }>
          { this.renderTitle() }
          <div className="date">{ date }</div>
          <p>{ content }</p>
          {/* <a className="bnt-more" href="www.google.com">More</a> */}
        </div>

      </div>
    );
  }

}
