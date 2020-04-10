import React, { Component } from 'react';
import TimelineItem from './TimelineItem';

export default class Timeline extends Component {

  render() {
    const { data } = this.props;
    return (
      <section className="timeline">
        <div className="container">
          {
            data.map((event, i) =>
              (<TimelineItem
                { ... event }
                direction={ (i % 2) === 1 ? 'right' : 'left' }
              />))
          }
        </div>
      </section>
    );
  }

}
