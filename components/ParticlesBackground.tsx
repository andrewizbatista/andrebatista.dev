import React from 'react';

import Particles from 'react-particles-js';

import particlesParams from 'data/particles';

const ParticlesBackground = ({  }: IParticlesBackground): any => {
  return <Particles height="100%" params={particlesParams} />;
};

interface IParticlesBackground {}

export default ParticlesBackground;
