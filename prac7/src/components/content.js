import React from 'react';

const Content = ({ activePage }) => {
  const pages = {
    home: {
      title: 'CHARUSAT — A+ NAAC Accredited University',
      text: `CHARUSAT is a leading private university in Gujarat, known for academic excellence, industry collaborations, and innovation-driven education.`,
      bullets: [
        'Established in 2009, Changa, Gujarat',
        '9 institutes under 6 faculties',
        '7,500+ students, 550+ faculty members',
        'Ranked in NIRF Top 200',
        'Accredited with NAAC A+',
      ],
    },
    charusat: {
      title: 'About CHARUSAT',
      text: `Began in 2000 as ECC and became a university in 2009, CHARUSAT is founded by Kelavani Mandal, with a legacy spanning over a century.`,
      bullets: [
        'UGC & AICTE recognized',
        '72+ programs across Engineering, Pharmacy, Management, Sciences & Paramedical',
        '7,500 students, 550 staff; ₹125 Cr campus worth',
      ],
    },
    depstar: {
      title: 'DEPSTAR',
      text: `The Devang Patel Institute of Advance Technology & Research is known for its engineering & tech excellence.`,
      bullets: [
        'B.Tech in CSE, AI & ML, Data Science (120 seats each)',
        'Experienced faculty (avg. 6+ years)',
        'Industry-aligned curriculum & placement support',
      ],
    },
    cse: {
      title: 'Computer Science & Engineering',
      text: `The first ECC institute from 2000, offers NBA-accredited B.Tech program.`,
      bullets: [
        'AI & ML, Cloud Computing, Cybersecurity',
        '600+ UG seats and 63+ PG Ph.D. seats',
        'Hackathons, workshops, strong placement support',
      ],
    },
  };

  const content = pages[activePage];

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-blue-900">{content.title}</h1>
      <p className="mt-2 text-gray-700">{content.text}</p>
      <ul className="list-disc pl-6 mt-4 text-gray-800">
        {content.bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
