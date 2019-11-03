import IPage from 'app/entities/Page';
import appConfig from 'app/config';

const contentPage: IPage = {
  url: 'https://andrebatista.dev/',
  metaTitle: 'André Batista',
  metaDescription: 'React Developer & JavaScript Geek < @andrewizbatista >',
  metaKeywords:
    'andré,andre,batista,andrewizbatista,javascript,developer,react,redux,web,designer,programmer',
  metaImage: 'https://andrebatista.dev/static/meta/ogimage.png',
  locale: appConfig.defaultLocale,
};

export default contentPage;
