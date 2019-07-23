import { lorem } from 'faker';
import generateMocks from 'app/helpers/generateMocks';

export default interface ICuriosity {
  category?: string;
  markdown: string;
}

export const mockCuriosity = (howMany: number, overwrites?: {}) =>
  generateMocks(
    (): ICuriosity => ({
      markdown: lorem.sentence(),
    }),
    howMany,
    overwrites,
  );
