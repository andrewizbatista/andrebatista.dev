const appConfig: IAppConfig = {
  developerSignature: 'André Batista < @andrewizbatista >',
  developerWebsite: 'https://andrebatista.dev',

  appName: 'Nextjs Boilerplate',
  appWebsite: 'https://andrebatista.dev',
  appThemeColor: '#ff4400',
  defaultLocale: {
    code: 'en',
    codeRegion: 'en_GB',
    name: 'English',
  },
  availableLocales: [
    {
      code: 'en',
      codeRegion: 'en_GB',
      name: 'English',
    },
    {
      code: 'pt',
      codeRegion: 'pt_PT',
      name: 'Português',
    },
  ],
};

export default appConfig;

export interface IAppConfig {
  developerSignature: string;
  developerWebsite: string;

  appName: string;
  appWebsite: string;
  appThemeColor: string;
  defaultLocale: ILocale;
  availableLocales: ILocale[];
}

export interface ILocale {
  code: string;
  codeRegion: string;
  name: string;
}
