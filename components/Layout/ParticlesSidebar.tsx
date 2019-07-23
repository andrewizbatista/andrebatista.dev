import React from 'react';
import Particles, { IParticlesParams } from 'react-particles-js';

const ParticlesSidebar = ({ particles }: IParticlesSidebar) => {
  return <Particles height="100%" params={particles} />;
};

interface IParticlesSidebar {
  particles: IParticlesParams;
}

export default ParticlesSidebar;
