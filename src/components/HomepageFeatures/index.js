import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import IntroDiagram from './Diagrams/intro.js';
import SelfServeDiagram from './Diagrams/selfServe.js';

const FeatureList = [
  {
    title: 'An Overview',
    description: (<>Learn how to Enable your product to go from “Contact-Us” to “Sign Up, Try and Buy”</>),
    diagram: (<IntroDiagram />),
    cta: 'Get Started',
  },
  {
    title: 'Build Self-Serve',
    description: (<>Implement secure and scalable self-service infrastructure at ludicrous speed with predefined signup blueprints.</>),
    diagram: (<SelfServeDiagram />),
    cta: 'Build Today',
    capsule: 'Product Engineering',
  },
  {
    title: 'Analyze Customer Journey',
    description: (<>Implement secure and scalable self-service infrastructure at ludicrous speed with predefined signup blueprints.</>),
    cta: 'Analyze Now',
    capsule: 'Growth & Data Analytics',
  },
];

function Feature({diagram, title, description, cta, capsule}) {
  return (
    <div className={styles.feature}> 
      <div className={styles.main}>
        {capsule && <div className={styles.capsule}>{capsule}</div>}
        <div className={styles.content}><h1>{title}</h1>{description}</div>
        <div className={styles.cta}>{cta}</div>
      </div>
      <div className={styles.diagram}>{diagram}</div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
    </section>
  );
}
