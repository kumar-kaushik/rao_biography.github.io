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
        <Header />
        <Timeline />
      </div>
    );
  }

}
