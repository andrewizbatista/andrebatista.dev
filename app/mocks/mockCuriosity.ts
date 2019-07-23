import { lorem } from 'faker';
import generateMocks from 'app/helpers/generateMocks';
import ICuriosity from 'app/entities/Curiosity';

const mockCuriosity = (): ICuriosity => ({
  markdown: lorem.sentence(),
});

export default (howMany: number, overwrites?: {}) =>
  generateMocks(mockCuriosity, howMany, overwrites);
