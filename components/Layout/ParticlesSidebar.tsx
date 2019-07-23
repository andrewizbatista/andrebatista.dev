import React from 'react';

import Particles from 'react-particles-js';

import particlesParams from 'data/particles';

const ParticlesSidebar = ({  }: IParticlesSidebar): any => {
  return <Particles height="100%" params={particlesParams} />;
};

interface IParticlesSidebar {}

export default ParticlesSidebar;
