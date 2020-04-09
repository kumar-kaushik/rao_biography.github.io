import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from './Header';
import Timeline from './Timeline';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.start();
  }

  start = () => {
    const sr = ScrollReveal();
    window.sr = sr;

    if (window.screen.width < 768) {
      // if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      //   $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
      // }

      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800
      });
    } else {
      sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800
      });

      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800
      });
    }

    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800
    });
  }

  render() {
    return (
      <div>
        <Header
          primaryHeading="MY JOURNEY AS AN ENTREPRENEUR"
          secondaryHeading="Venkateswara Rao Tallam"
        />
        <Timeline />
        <div className="header ending-note">
          <blockquote>
            { `“During this Journey, I have overcome several hurdles while making acquisitions, exploration, manufacturing, establishments, imports, exports, etc but never
            disappointed. I keep moving on, working hard in establishing industries and preparing my team to maintain those clustures in different parts of the states.”` }
          </blockquote>
        </div>
      </div>
    );
  }

}
