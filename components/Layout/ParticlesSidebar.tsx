import React from 'react';
import Particles from 'react-particles-js';

// Data
import particlesParams from 'data/particles';

const ParticlesSidebar = ({  }: IParticlesSidebar) => {
  return <Particles height="100%" params={particlesParams} />;
};

interface IParticlesSidebar {}

export default ParticlesSidebar;
