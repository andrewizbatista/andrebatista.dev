import { company, lorem, internet, image } from 'faker';
import generateMocks from 'app/helpers/generateMocks';
import appConfig from 'app/config';

import IPage from 'app/entities/Page';

const mockPage = (): IPage => ({
  url: internet.url(),
  metaTitle: company.companyName(),
  metaDescription: company.companyName(),
  metaKeywords: lorem.words(),
  metaImage: image.imageUrl(),
  locale: appConfig.defaultLocale,
});

export default (howMany: number, overwrites?: {}) => generateMocks(mockPage, howMany, overwrites);
