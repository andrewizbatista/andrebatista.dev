import { colors } from 'app/theme';

const appConfig: IAppConfig = {
  developerSignature: 'André Batista < @andrewizbatista >',
  developerWebsite: 'https://andrebatista.dev',

  appName: 'André Batista',
  appWebsite: 'https://andrebatista.dev',
  appThemeColor: colors.Secondary,
  defaultLocale: {
    code: 'en',
    codeRegion: 'en_GB',
    name: 'English',
  },
  availableLocales: [],
};

export default appConfig;

export interface IAppConfig {
  developerSignature: string;
  developerWebsite: string;

  appName: string;
  appWebsite: string;
  appThemeColor: string;
  defaultLocale: ILocale;
  availableLocales?: ILocale[];
}

export interface ILocale {
  code: string;
  codeRegion: string;
  name: string;
}
