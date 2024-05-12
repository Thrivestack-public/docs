import React from 'react';
import styles from './intro.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench, faMagnifyingGlassChart, faChartLine, faCircleCheck } from '@fortawesome/free-solid-svg-icons'


export default function IntroDiagram(){
  return (
  <div className={styles.container}>
        <div className={`${styles.box} ${styles.build}`}>
          <FontAwesomeIcon className={`${styles.icon} ${styles.icon_build}`} icon={faScrewdriverWrench} />
          <h1 className={styles.heading}>Build</h1>
          <ul>
            <li><FontAwesomeIcon className={`${styles.bullet} ${styles.bullet_build}`} icon={faCircleCheck} />Self Serve</li>
            <li><FontAwesomeIcon className={`${styles.bullet} ${styles.bullet_build}`} icon={faCircleCheck} />Telemetry</li>
            <li><FontAwesomeIcon className={`${styles.bullet} ${styles.bullet_build}`} icon={faCircleCheck} />In-App Features</li>
          </ul>
          <a href="/getting-started/self-serve/overview">Start Building Today</a>
        </div>
        
        <div className={`${styles.box} ${styles.analyze}`}>
          <FontAwesomeIcon className={`${styles.icon} ${styles.icon_analyze}`} icon={faMagnifyingGlassChart} />
          <h1>Analyze</h1>
          <ul>
            <li><FontAwesomeIcon className={`${styles.bullet} ${styles.bullet_analyze}`} icon={faCircleCheck} />Analytics</li>
            <li><FontAwesomeIcon className={`${styles.bullet} ${styles.bullet_analyze}`} icon={faCircleCheck} />Pricing Plans</li>
            <li><FontAwesomeIcon className={`${styles.bullet} ${styles.bullet_analyze}`} icon={faCircleCheck} />Goals & Alerts</li>
          </ul>
          <a href="/getting-started/analyze/instrumentation/overview">Start Analyzing Today</a>
        </div>
        
        {false && <div className={styles.box}>
          <FontAwesomeIcon className={`${styles.icon}`} icon={faChartLine} />
          <h1>Drive</h1>
          <ul>
            <li>PLG CRM</li>
            <li>Segmentation</li>
          </ul>
          <span>Comming Soon</span>
        </div>}
      </div>
  )

//  return (
//  <div className={intro.container}>
//      <div className={`${intro.box} ${intro.box1}`} ref={box0Ref} id="box0">
//        <span className={intro.dot}>0</span>
//        <div className={intro.content}>
//          <h1>Set Up an Account</h1>
//          <a href="/getting-started/self-serve/start-here" className={intro.learn_more}>Learn more</a>
//        </div>
//      </div>
//
//      <div className={`${intro.box} ${intro.box2}`} ref={box1Ref} id="box1">
//        <span className={`${intro.dot} ${intro.get_started_color}`}>1</span>
//        <div className={`${intro.capsule} ${intro.product_color}`}>
//          <span>Product Engineering</span>
//        </div>
//        <div className={intro.content}>
//          <h1>Build Self-Serve</h1>
//          <a href="/getting-started/self-serve/overview" className={intro.learn_more}>Learn more</a>
//        </div>
//      </div>
//
//      <div className={`${intro.box} ${intro.box3}`} ref={box2Ref} id="box2">
//        <span className={`${intro.dot} ${intro.get_started_color}`}>2</span>
//        <div className={`${intro.capsule} ${intro.growth_color}`}>
//          <span>Growth & Data Analytics</span>
//        </div>
//        <div className={intro.content}>
//          <h1>Analyze Customer Journey</h1>
//          <a href="/getting-started/analyze/instrumentation/overview" className={intro.learn_more}>Learn more</a>
//        </div>
//      </div>
//
//      <div className={`${intro.box} ${intro.box4}`} ref={box3Ref} id="box3">
//        <span className={intro.dot}>3</span>
//        <div className={`${intro.capsule}`}>
//          <span>Growth & Data Analytics</span>
//        </div>
//        <div className={intro.content}>
//          <h1>Drive Revenue <span>(Coming Soon)</span></h1>
//        </div>
//      </div>
//
//    </div>
//  );
}
