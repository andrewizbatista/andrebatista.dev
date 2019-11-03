import IPage from 'app/entities/Page';
import appConfig from 'app/config';

const contentPage: IPage = {
  url: 'https://andrebatista.dev/',
  metaTitle: 'André Batista',
  metaDescription: 'André Batista < @andrewizbatista > React Developer & JavaScript Geek',
  metaKeywords: '',
  metaImage: 'https://andrebatista.dev/static/meta/ogimage.png',
  locale: appConfig.defaultLocale,
};

export default contentPage;
