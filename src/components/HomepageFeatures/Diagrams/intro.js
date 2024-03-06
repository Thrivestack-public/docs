import React, { useEffect, useRef, useState } from 'react';
import intro from './intro.module.css';

export default function IntroDiagram(){
  const box0Ref = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  return (
  <div className={intro.container}>
      <div className={`${intro.box} ${intro.box1}`} ref={box0Ref} id="box0">
        <span className={intro.dot}>0</span>
        <div className={intro.content}>
          <h1>Set Up an Account</h1>
          <a href="/getting-started/self-serve/start-here" className={intro.learn_more}>Learn more</a>
        </div>
      </div>

      <div className={`${intro.box} ${intro.box2}`} ref={box1Ref} id="box1">
        <span className={`${intro.dot} ${intro.get_started_color}`}>1</span>
        <div className={`${intro.capsule} ${intro.product_color}`}>
          <span>Product Engineering</span>
        </div>
        <div className={intro.content}>
          <h1>Build Self-Serve</h1>
          <a href="/getting-started/self-serve/overview" className={intro.learn_more}>Learn more</a>
        </div>
      </div>

      <div className={`${intro.box} ${intro.box3}`} ref={box2Ref} id="box2">
        <span className={`${intro.dot} ${intro.get_started_color}`}>2</span>
        <div className={`${intro.capsule} ${intro.growth_color}`}>
          <span>Growth & Data Analytics</span>
        </div>
        <div className={intro.content}>
          <h1>Analyze Customer Journey</h1>
          <a href="/getting-started/analyze/instrumentation/overview" className={intro.learn_more}>Learn more</a>
        </div>
      </div>

      <div className={`${intro.box} ${intro.box4}`} ref={box3Ref} id="box3">
        <span className={intro.dot}>3</span>
        <div className={`${intro.capsule}`}>
          <span>Growth & Data Analytics</span>
        </div>
        <div className={intro.content}>
          <h1>Drive Revenue <span>(Coming Soon)</span></h1>
        </div>
      </div>

    </div>
  );
}
