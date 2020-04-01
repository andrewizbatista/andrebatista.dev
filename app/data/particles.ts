/* eslint-disable @typescript-eslint/camelcase */
import { IParticlesParams } from 'react-particles-js';

const dataParticles: IParticlesParams = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 2,
    },
    shape: {
      type: 'edge',
    },
    opacity: {
      value: 0.8,
    },
    move: {
      out_mode: 'out',
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
    },
    modes: {
      repulse: {
        distance: 80,
      },
      bubble: {
        size: 5,
      },
    },
  },
  retina_detect: true,
  // fps_limit: 60
};

export default dataParticles;
