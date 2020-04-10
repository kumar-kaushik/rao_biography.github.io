import React, { Component } from 'react';
import classNames from 'classnames';
import sr from './libraries/scrollReveal';

const images = require.context('./images', true);

export default class TimelineItem extends Component {

  constructor (props) {
    super(props);
    this.itemRef = React.createRef();
  }

  bindRef = ref => {
    this.itemRef = ref;
  }

  componentDidMount() {
    const { direction } = this.props;

    sr.reveal(this.itemRef, {
      origin: window.screen.width <= 768 ? 'right' : direction,
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800
    });
  }

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
          'timeline-card': !!image
        }) } ref={ this.bindRef }>
          { this.renderTitle() }
          <div className="date">{ date }</div>
          <p>{ content }</p>
          {/* <a className="bnt-more" href="https://www.google.com">More</a> */}
        </div>

      </div>
    );
  }

}
