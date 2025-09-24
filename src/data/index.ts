type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
};

type Education = {
  institution: string;
  degree: string;
  start: string;
  end: string;
  id: string;
};

type Skill = {
  category: string;
  items: string[];
};

export const PROJECTS: Project[] = [
  {
    name: 'Aura Campaigns',
    description:
      'Realtime email campaign automation system with Convex DB and Resend.',
    link: 'https://aura.fuadnafiz98.com',
    video: '/videos/aura-campaigns.mp4', // Add your video here
    id: 'project1',
  },
  {
    name: 'AI Crypto Agent',
    description:
      'AI agent that answers crypto questions using external APIs and embeddings.',
    link: 'https://github.com/fuadnafiz98/crypto-agent',
    video: '/videos/crypto-agent.mp4', // Add your video here
    id: 'project2',
  },
  {
    name: 'Remote Code Execution System',
    description:
      'Safe code execution platform using Docker and Node.js child processes.',
    link: 'https://github.com/fuadnafiz98/rcx',
    video: '/videos/rcx.mp4', // Add your video here
    id: 'project3',
  },
  {
    name: 'Golang Chat Application',
    description:
      'Scalable chat app with websockets, Docker, and Redis clustering.',
    link: 'https://github.com/fuadnafiz98/go-websockets',
    video: '/videos/go-chat.mp4', // Add your video here
    id: 'project4',
  },
  {
    name: 'Bookaholics',
    description:
      'Community platform for book lovers with JWT auth and HarperDB.',
    link: 'https://github.com/fuadnafiz98/bookaholics',
    video: '/videos/bookaholics.mp4', // Add your video here
    id: 'project5',
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'GreenSeedDigital LLC',
    title: 'Full Stack Developer',
    start: 'Mar 2022',
    end: 'Present',
    link: 'https://github.com/fuadnafiz98',
    id: 'work1',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Building Scalable Web Applications with Django and React',
    description: 'My experience building high-throughput applications at scale',
    link: '/blog/django-react-scalability',
    uid: 'blog-1',
  },
  {
    title: 'AI Content Generation: Lessons from Production',
    description:
      'How we built a distributed AI platform generating hundreds of content pieces',
    link: '/blog/ai-content-generation',
    uid: 'blog-2',
  },
  {
    title: 'Kubernetes in Practice: CI/CD at Scale',
    description:
      'Optimizing build pipelines and managing K8s clusters for developer productivity',
    link: '/blog/kubernetes-cicd-scale',
    uid: 'blog-3',
  },
  {
    title: 'From JavaScript to TypeScript: Migration Best Practices',
    description:
      'How we migrated a legacy React project and improved build times by 60%',
    link: '/blog/js-to-ts-migration',
    uid: 'blog-4',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/fuadnafiz98',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/fuadnafiz98',
  },
  {
    label: 'HackerRank',
    link: 'https://www.hackerrank.com/fuadnafiz98',
  },
];

export const EMAIL = 'fuadnafiz98@gmail.com';

export const EDUCATION: Education[] = [
  {
    institution: 'Military Institute of Science & Technology',
    degree: 'B.Sc in Computer Science & Engineering',
    start: 'Feb 2018',
    end: 'Mar 2022',
    id: 'edu1',
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'AI',
    items: [
      'Ango-AGI',
      'AI Agents',
      'MCP Servers',
      'LLamaIndex',
      'RAG Pipelines',
    ],
  },
  {
    category: 'Languages',
    items: [
      'Python',
      'Golang',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'C++',
      'C',
      'HTML/CSS',
    ],
  },
  {
    category: 'Frameworks',
    items: [
      'Django',
      'Django Rest Framework',
      'Next.js',
      'Nest.js',
      'Gin',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'Express.js',
    ],
  },
  {
    category: 'Google Cloud Platform',
    items: [
      'Pub-Sub',
      'Secrets Manager',
      'Cloud Functions',
      'BigQuery',
      'Looker Studio',
    ],
  },
  {
    category: 'Testing',
    items: ['Cypress.io', 'Pytest', 'Selenium'],
  },
  {
    category: 'DevOps',
    items: [
      'Bash Scripting',
      'Docker',
      'GitLab CI/CD',
      'GitHub Actions',
      'Grafana',
      'Prometheus',
      'Kubernetes',
    ],
  },
  {
    category: 'Others',
    items: ['Cloudflare Workers', 'KV', 'PostgreSQL', 'AWS SQS', 'Git'],
  },
];

export const ACHIEVEMENTS = [
  'IELTS Band 7.5 (Listening: 8.5, Reading: 7.5, Writing: 7.0, Speaking: 7.0)',
  'Best Junior Team at Inter MIST Programming Contest 2020',
  'Champions at ICT-Innovation Fest App Contest and Hackathon 2021',
  '5 Star Problem Solving at HackerRank',
  '400+ Problems solved across various coding platforms',
];
