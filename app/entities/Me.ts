export default interface IMe {
  name: string;
  handler: string;
  about: string;
  socials: ISocial;
  work: IWork;
}

export interface ISocial {
  github: string;
  twitter: string;
}

export interface IWork {
  title: string;
  company: string;
  companyUrl: string;
}
