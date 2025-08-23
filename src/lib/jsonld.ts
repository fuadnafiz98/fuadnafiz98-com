type JsonLd = {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: any;
};

export function generatePersonSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhtasim Fuad',
    jobTitle: 'Full Stack Software Engineer',
    description: `Full Stack Developer at Greentomato Media (https://greentomatomedia.com), specializing in web application development with React, TypeScript, Django, and Python. Experienced in API design, database optimization, and system architecture.`,
    url: 'https://fuadnafiz98.com',
    image: 'https://fuadnafiz98.com/assets/logo.jpg',
    sameAs: [
      'https://github.com/fuadnafiz98',
      'https://linkedin.com/in/fuadnafiz98',
      'https://x.com/fuadnafiz98',
      'https://youtube.com/@fuadnafiz98',
    ],
    knowsAbout: [
      'Full Stack Development',
      'React',
      'TypeScript',
      'Django',
      'Python',
      'PostgreSQL',
      'Containerization',
      'API Design',
      'Database Architecture',
      'System Design',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Military Institute of Science and Technology (MIST)',
    },
    email: 'mailto:fuadnafiz98@gmail.com',
    worksFor: {
      '@type': 'Organization',
      name: 'Greentomato Media',
      url: 'https://greentomatomedia.com',
      sameAs: ['https://www.linkedin.com/company/greentomatomedia'],
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full Stack Developer',
      occupationLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'Bangladesh',
        },
      },
      description: [
        'Full stack web application development',
        'API design and implementation',
        'Database architecture and optimization',
        'Frontend development with React and TypeScript',
        'Backend development with Django and Python',
      ].join('. '),
      skills: [
        'React',
        'TypeScript',
        'Django',
        'Python',
        'PostgreSQL',
        'Docker',
        'REST APIs',
        'System Design',
      ],
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Bachelor Degree',
      educationalLevel: 'Bachelor of Science',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Military Institute of Science and Technology (MIST)',
      },
    },
  };
}
