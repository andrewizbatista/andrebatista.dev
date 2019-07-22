import React from 'react';

import Particles from 'react-particles-js';

const ParticlesBackground = ({  }: IParticlesBackground): any => {
  return (
    <Particles
      width="40vw"
      height="99vh"
      params={{
        polygon: {
          enable: true,
          type: 'inside',
          move: {
            radius: 10,
          },
        },
      }}
    />
  );
};

interface IParticlesBackground {}

export default ParticlesBackground;
