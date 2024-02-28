import React from 'react';
import intro from './intro.module.css';

export default function IntroDiagram(){
  return (
    <div className={intro.container}>
    <div className={`${intro.line} ${intro.line1}`}></div>
    <div className={`${intro.line} ${intro.line2}`}></div>
    
    <div className={`${intro.box} ${intro.box1}`}>
      <span className={intro.dot}>0</span>
      <div className={intro.content}>
      <h1>Set Up an Account</h1>
      <a href="#" className={intro.learn_more}>Learn more</a>
      </div>
    </div>
    
    <div className={`${intro.box} ${intro.box2}`}>
      <span className={intro.dot}>1</span>
      <div className={intro.capsule}>
        <span>Product Engineering</span>
      </div>
       <div className={intro.content}>
      <h1>Build Self_Serve</h1>
      <a href="#" className={intro.learn_more}>Learn more</a>
         </div>
    </div>
    
    <div className={`${intro.box} ${intro.box3}`}>
      <span className={intro.dot}>2</span>
      <div className={intro.capsule}>
        <span>Growth & Data Analytics</span>
      </div>
       <div className={intro.content}>
      <h1>Analyze Customer Journey</h1>
      <a href="#" className={intro.learn_more}>Learn more</a>
         </div>
    </div>
  </div>
  );
}
