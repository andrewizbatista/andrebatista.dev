interface Me {
  firstName: string;
  lastName: string;
  handler: string;
  about: string;
  games: string[];
  shows: string[];
  music: string[];
  socials: Socials;
  work: Work;
}

interface Socials {
  github?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  spotify?: string;
}

interface Work {
  title: string;
  company: string;
  companyUrl: string;
}
