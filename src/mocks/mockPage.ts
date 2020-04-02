import { company, lorem, internet, image } from 'faker';
import generateMocks from 'src/helpers/generateMocks';
import appConfig from 'src/config';

const mockPage = (): Page => ({
  url: internet.url(),
  metaTitle: company.companyName(),
  metaDescription: company.companyName(),
  metaKeywords: lorem.words(),
  metaImage: image.imageUrl(),
  locale: appConfig.defaultLocale,
});

export default (howMany: number, overwrites?: {}) =>
  generateMocks(mockPage, howMany, overwrites);
