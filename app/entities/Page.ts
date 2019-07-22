import { company, lorem, internet, image } from 'faker';

import generateMocks from 'app/helpers/generateMocks';
import appConfig, { ILocale } from 'app/config';

export default interface IPage {
  url: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  metaImage: string;
  locale: ILocale;
}

export const mockPage = (howMany: number, overwrites?: {}): any =>
  generateMocks(
    (): IPage => ({
      url: internet.url(),
      metaTitle: company.companyName(),
      metaDescription: company.companyName(),
      metaKeywords: lorem.words(),
      metaImage: image.imageUrl(),
      locale: appConfig.defaultLocale,
    }),
    howMany,
    overwrites,
  );
