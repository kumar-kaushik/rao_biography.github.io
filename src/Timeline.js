import React, { Component } from 'react';
import TimelineItem from './TimelineItem';
import data from './data.json';

export default class Timeline extends Component {

  render() {
    return (
      <section className="timeline">
        <div className="container">
          {
            data.events.map(event => <TimelineItem { ... event } />)
          }
        </div>
      </section>
    );
  }

}
