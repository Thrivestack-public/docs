import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'For Developers',
    Svg: require('@site/static/img/developer.svg').default,
    description: (
      <>
      Implement secure and scalable self-service infrastructure at ludicrous speed with predefined signup blueprints.
      </>
    ),
  },
  {
    title: 'For GTM Leaders',
    Svg: require('@site/static/img/gtm.svg').default,
    description: (
      <>
      Ship your product at ludicrous speed with a single platform to - activate, engage, and monetize users.
      </>
    ),
  },
  {
    title: 'For Product Managers',
    Svg: require('@site/static/img/pm.svg').default,
    description: (
      <>
      Elevate PLG strategies with our intuitive analytics tool. Gain real-time insights for informed decisions on user engagement, adoption, and conversion metrics.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
