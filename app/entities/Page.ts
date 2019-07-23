import { ILocale } from 'app/config';

export default interface IPage {
  url: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  metaImage: string;
  locale: ILocale;
}
