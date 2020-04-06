import moment from 'moment';

const dataTimeline: Timeline = [
  {
    order: 1,
    startDate: moment('2019-02-01T00:00:00.000Z').format('MMM YYYY'),
    endDate: null,
    title: 'React Developer',
    company: 'The Virtual Forge',
    description:
      'I’m part of the JavaScript Engineering Team, my work consists mainly in developing the frontend of our apps. I’m also responsible for all our Next.js projects and keeping our internal tooling up to date (boilerplates, storybooks, hooks), which is something I’m quite passionate about.Since I started I’ve had the opportunity to work in some exciting projects such as the EMEA Service Portal for Facebook, SWXR for Google and the Learning Management System for Jaguar Land Rover.',
  },
  {
    order: 2,
    startDate: moment('2016-09-01T00:00:00.000Z').format('MMM YYYY'),
    endDate: moment('2018-12-01T00:00:00.000Z').format('MMM YYYY'),
    title: 'React Developer & Co-Founder',
    company: 'Glaiveware',
    description:
      'I co-founded the company (Feiticeiro & Mota, Lda.) that developed bespoke web apps for startups and small business with a big focus on functionality, UI/UX, SEO and secure HTTP headers. This was a difficult yet incredible experience from which I learned a lot and grew as a person.',
  },
  {
    order: 3,
    startDate: moment('2016-09-01T00:00:00.000Z').format('MMM YYYY'),
    endDate: moment('2017-12-01T00:00:00.000Z').format('MMM YYYY'),
    title: 'Full Stack Developer',
    company: 'Sycret.ink',
    description:
      'I joined this Swiss startup (3 people) to help develop an encrypted messaging app (Sycret) that allowed the exchange of device-to-device encrypted, serverless and untraceable text messages. I helped with the implementation of the LibSignal + OpenPGP encryption protocols and did part of the UI on the Android app.',
  },
];

export default dataTimeline;
