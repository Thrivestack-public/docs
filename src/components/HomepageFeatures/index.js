import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import IntroDiagram from './Diagrams/intro.js';
import SelfServeDiagram from './Diagrams/selfServe.js';

const FeatureList = [
  {
    title: 'An Overview',
    description: (<div className={styles.description}>Enable your product to go from <strong>“Contact-Us” to “Sign Up, Try and Buy</strong>”</div>),
    diagram: (<IntroDiagram />),
    cta: (<a href="/getting-started/intro"><button  className={styles.cta_button}>Get Started</button></a>),
  },
  {
    title: 'Build Self-Serve',
    description: (<div className={styles.description}>Implement secure and scalable self-service infrastructure at ludicrous speed with predefined signup blueprints.</div>),
    diagram: (<SelfServeDiagram />),
    cta: (<a href="/getting-started/self-serve/overview"><button className={`${styles.cta_button} ${styles.product_color}`}>Build Today</button></a>),
    capsule:(<div className={`${styles.capsule} ${styles.product_color}`}>Product Engineering</div>),
  },
  {
    title: 'Analyze Customer Journey',
    description: (<div className={styles.description}>Implement secure and scalable self-service infrastructure at ludicrous speed with predefined signup blueprints.</div>),
    cta: (<a href="/getting-started/analyze/instrumentation/overview"><button className={`${styles.cta_button} ${styles.growth_color}`}>Analyze Now</button></a>),
    capsule:(<div className={`${styles.capsule} ${styles.growth_color}`}>Growth & Data Analytics</div>),
  },
];

function Feature({diagram, title, description, cta, capsule}) {
  return (
    <div className={`${styles.feature_wrapper}`}> 
      <div className={`${styles.feature} ${styles.dotted_background}`}> 
        <div className={styles.main}>
          {capsule}
          <div className={styles.content}>
            <h1>{title}</h1>{description}
          </div>
          <div className={styles.cta}>{cta}</div>
        </div>
        <div className={styles.diagram}>{diagram}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={`${styles.features} `}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
    </section>
  );
}
