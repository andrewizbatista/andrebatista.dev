export default interface IMe {
  firstName: string;
  lastName: string;
  handler: string;
  about: string;
  socials: ISocial;
  work: IWork;
}

export interface ISocial {
  github?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export interface IWork {
  title: string;
  company: string;
  companyUrl: string;
}
