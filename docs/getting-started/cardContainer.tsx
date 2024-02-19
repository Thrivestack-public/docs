import React from 'react';

interface CardProps {
  coverImage: string;
  heading: string;
  description: string;
  link: string;
}

// Card component
const Card: React.FC<CardProps> = ({ coverImage, heading, description, link }) => {
  return (
    <div className="cardContainer">
    <div className="coverImageContainer">
      <img src={coverImage} alt={heading} className="coverImage" />
    </div>
      <a href={link} className="headingLink">
        <h2 className="cardHeader">{heading}</h2>
      </a>
      <p>{description}</p>
    </div>
  );
};

interface CardData {
  coverImage: string;
  heading: string;
  description: string;
  link: string;
}

// CardContainer component that lays out cards horizontally
const CardContainer: React.FC = () => {
  const cardsData: CardData[] = [
    {
      coverImage: 'https://www.dropbox.com/scl/fi/cke674chranap3eog7mc3/Workflow-2.png?rlkey=litqb1lcmad4bft4ptv2xmuio&dl=1',
      heading: '📝 Create User Workflows',
      description: 'Easily create and manage user workflows without writing a single line of code',
      link: '/getting-started/self-serve/start-here',
    },
    {
      coverImage: 'https://www.dropbox.com/scl/fi/7cuyir2xkywemdakc61jx/Report-1.png?rlkey=kk6ygrmmcajaiu15sj168f18d&dl=1',
      heading: '📊 View Standard Reports',
      description: 'Access performance data about self-serve workflows to measure and improve user experience.',
      link: '/getting-started/analyze/reports/overview',
    },
    {
      coverImage: 'https://www.dropbox.com/scl/fi/apoy10f7flsq0mineucau/API-1.png?rlkey=4v5sta9do5r1dnshh6bzlft3c&dl=1',
      heading: '🔌 Integrate Instrumentation APIs',
      description: "API integrations aren't necessary, but for those custom tweaks, 🛠️ our APIs have got you covered.",
      link: '/getting-started/apis-non-gen/apis-introduction',
    },
  ];

  return (
    <div className="cardContainerStyle">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          coverImage={card.coverImage}
          heading={card.heading}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export { Card, CardContainer };
