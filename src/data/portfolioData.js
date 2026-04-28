import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

export const services = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Crafting responsive and intuitive user interfaces with modern frameworks and pixel-perfect design implementation.',
    icon: '💻',
    color: 'text-blue-600'
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'Building robust server-side applications with scalable architecture and efficient database management.',
    icon: '⚙️',
    color: 'text-green-600'
  },
  {
    id: 3,
    title: 'Full Stack Development',
    description: 'End-to-end application development combining frontend finesse with backend expertise.',
    icon: '🚀',
    color: 'text-purple-600'
  },
  {
    id: 4,
    title: 'ML Engineering',
    description: 'Developing intelligent solutions using machine learning algorithms and data-driven approaches to solve complex problems.',
    icon: '🧠',
    color: 'text-red-600'
  },
  {
    id: 5,
    title: 'Cloud Computing',
    description: 'Architecting and deploying scalable cloud solutions using AWS, Azure, or GCP for optimal performance and reliability.',
    icon: '☁️',
    color: 'text-cyan-600'
  },
  {
    id: 6,
    title: 'DevOps Engineering',
    description: 'Implementing CI/CD pipelines and automating deployment processes for seamless software delivery and operations.',
    icon: '🔄',
    color: 'text-orange-600'
  }
];

export const projects = [
  {
    id: 1,
    title: 'DailyDrip — Personal Finance App',
    description: 'A mobile-first personal finance app with a unique time-locked envelope budgeting system — auto-disbursing daily allowances from locked category budgets.',
    link: '#',
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'TypeScript'],
    isInternal: true
  },
  {
    id: 2,
    title: 'GPS360 Academy',
    description: 'A comprehensive online learning platform offering diverse courses, progress tracking, and interactive quizzes for an engaging educational experience.',
    link: 'https://gps360academy.com',
    tags: ['Next Js', 'Node.Js', 'Express.Js', 'PostgreSQL', 'Stripe API']
  },
  {
    id: 3,
    title: 'Layer3 Cloud',
    description: 'Designed and developed the professional portfolio interface for a Nigerian cloud company, focusing on clean UI, performance, and responsive design.',
    link: 'https://www.layer3.cloud',
    tags: ['Next Js', 'TailwindCSS']
  },
  {
    id: 4,
    title: 'Creativity Verse',
    description: 'A digital community for creators to collaborate, learn, and showcase their work. Join a vibrant space where innovation meets inspiration.',
    link: 'https://beta.mycreativityverse.com',
    tags: ['React', 'TailwindCSS', 'MongoDB', 'Node.Js', 'Express.Js']
  },
  {
    id: 5,
    title: 'PaySub VTU Platform',
    description: 'A virtual top-up platform for airtime, data bundles, and utility bill payments with secure third-party payment integration.',
    link: 'https://pay-sub.vercel.app',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS']
  },
  {
    id: 6,
    title: 'Bookstore API',
    description: 'A RESTful API for managing bookstore operations with authentication, CRUD operations, and comprehensive documentation.',
    link: 'https://documenter.getpostman.com/view/28772794/2s9YsT5TDQ',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT']
  },
  {
    id: 7,
    title: 'Text-to-Speech App',
    description: 'A web application that converts text input into natural-sounding speech with multiple voice options and language support.',
    link: 'https://labstudio.vercel.app',
    tags: ['React', 'Web Speech API', 'CSS', 'JavaScript']
  },
  {
    id: 8,
    title: 'RAG-Enhanced LLM',
    description: 'A fine-tuned language model enhanced with Retrieval Augmented Generation for improved context-aware responses and domain-specific knowledge.',
    link: 'https://github.com/PraiseKeyz/Electron',
    tags: ['Python', 'Fast API', 'Sentence Transformer', 'sklearn', 'Gemini']
  },
  {
    id: 9,
    title: 'Color Guessing Game',
    description: 'An interactive RGB color guessing game with multiple difficulty levels and score tracking.',
    link: 'https://hngfrontendstage1.vercel.app',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation']
  },
  {
    id: 10,
    title: 'My Profile Card',
    description: 'A responsive profile card component with modern design, animations, and social media integration.',
    link: 'https://hngfrontendstage0.vercel.app',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid']
  },
  {
    id: 11,
    title: 'React Todo App',
    description: 'A feature-rich todo application with task management, categories, and local storage persistence.',
    link: 'https://todo-app-praisekeys.vercel.app',
    tags: ['React', 'TailwindCSS']
  }
];

export const experience = [
  {
    id: 1,
    role: 'Backend Engineer',
    company: 'MyFitHub',
    period: 'Aug 2025 – Present',
    description: [
      'Architected the backend system from the ground up using Node.js, TypeScript, and PostgreSQL.',
      'Built and integrated a full Paystack subscription flow including recurring billing and automated retries.',
      'Designed a scalable venue and membership management system supporting multiple fitness categories.',
      'Wrote robust, well-documented REST APIs consumed by the mobile and web frontend teams.'
    ]
  },
  {
    id: 2,
    role: 'Backend Engineer',
    company: 'Makeatask',
    period: 'Oct 2025 – Present',
    description: [
      'Led backend system architecture decisions for a two-sided marketplace supporting service providers and clients.',
      'Integrated Dojah KYC verification pipeline including document capture and automated status updates.',
      'Built scalable Node.js/TypeScript APIs with PostgreSQL, handling user onboarding and task workflows.',
      'Designed database schemas optimized for complex relational queries across users, tasks, and transactions.'
    ]
  },
  {
    id: 3,
    role: 'Lead Fullstack Developer',
    company: 'Creativity Verse',
    period: 'May 2025 – Dec 2025',
    description: [
      'Spearheaded the full-stack development of the company website from zero, building both React and Node.js.',
      'Led a small development team, setting technical direction and reviewing code.',
      'Set up cloud infrastructure and implemented CI/CD pipelines reducing manual deployment overhead.',
      'Delivered the full product on schedule in an agile environment.'
    ]
  }
];
