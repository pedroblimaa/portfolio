import { TimelineItemInfo } from '../../../components/TimelineItem/TimelineTypes'
import AuremImg from '../../../assets/companies/aurem.svg'
import NoImg from '../../../assets/companies/no-company-icon.svg'
import Mova from '../../../assets/companies/mova.svg'
import InatelImg from '../../../assets/companies/inatel.svg'

export const cardInfos: TimelineItemInfo[] = [
  {
    company: 'Aurem - Startup',
    role: 'CTO',
    period: '2019-2018',
    companyImg: AuremImg,
    bullets: [
      {
        title: 'Team management',
        description:
          'Led a small team, coordinating development and guiding less experienced members.',
      },
      {
        title: 'Scrum',
        description:
          'Adapted Scrum practices to a startup environment, organizing sprints and prioritizing tasks efficiently.',
      },
      {
        title: 'Problem Solving',
        description:
          'Overcame technical and strategic challenges, finding practical solutions with limited resources.',
      },
      {
        title: 'Full Stack Development',
        description:
          'Built the MVP, working across frontend and backend, making key technology choices.',
      },
    ],
  },
  {
    company: 'Sempher (Internship)',
    role: 'Full Stack Developer',
    period: '2018-2021',
    companyImg: NoImg,
    bullets: [
      {
        title: 'Front End development',
        description:
          'Developed and maintained front-end applications using Vue.js, ensuring a responsive and dynamic user experience.',
      },
      {
        title: 'Back End development',
        description:
          'Built and optimized back-end functionalities with PHP, improving system efficiency and performance.',
      },
    ],
  },
  {
    company: 'MOVA (Internship)',
    role: 'Back-End Developer',
    period: '2021-2021',
    companyImg: Mova,
    bullets: [
      {
        title: 'Back End development',
        description: 'Developed back-end systems with PHP and Laravel.',
      },
      {
        title: 'Testing',
        description:
          'Implemented tests using PHPUnit to ensure code reliability.',
      },
      {
        title: 'Scrum and Git',
        description:
          'Worked in an Agile (Scrum) environment using Git for version control.',
      },
    ],
  },
  {
    company: 'Inatel',
    role: 'Full Stack Software Engineer',
    period: '2021 - Present',
    companyImg: InatelImg,
    bullets: [
      {
        title: 'Front End',
        description:
          'Developed front-end applications using Angular, ensuring a dynamic user experience.',
      },
      {
        title: 'Testing',
        description:
          'Implemented tests with Karate, Jasmine, Karma, and Playwright to enhance software reliability.',
      },
      {
        title: 'DevOps',
        description:
          'Deployed and maintained cloud services using Kubernetes and Docker.',
      },
      {
        title: 'Automation',
        description:
          'Automated installation and configuration scripts with Python and Shell Script.',
      },
      {
        title: 'Back End',
        description:
          'Built back-end solutions with Java, Camunda workflows, and JavaScript metadata.',
      },
    ],
  },
]
