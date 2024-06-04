import React from 'react';
import selfServe from './selfServe.module.css';

export default function SelfServeDiagram(){
  return (
    <div className={selfServe.container}>
      <div className={`${selfServe.box} ${selfServe.box1}`}>
        <div className={selfServe.content}>
          <h1>Core Services</h1>
          <a href="" className={selfServe.learn_more}>Learn More</a>
        </div>
      </div>
      <div className={`${selfServe.box} ${selfServe.box2}`}>
        <div className={selfServe.content}>
          <h1>No-Code Orchestration</h1>
          <a href="" className={selfServe.learn_more}>Learn More</a>
        </div>
      </div>
      <div className={`${selfServe.box} ${selfServe.box3}`}>
        <div className={selfServe.content}>
          <h1>Self Analytics</h1>
          <a href="" className={selfServe.learn_more}>Learn More</a>
        </div>
      </div>
      <div className={`${selfServe.box} ${selfServe.box4}`}>
        <div className={selfServe.content}>
          <h1>Builders</h1>
          <a href="" className={selfServe.learn_more}>Learn More</a>
        </div>
      </div>
      <div className={`${selfServe.box} ${selfServe.box5}`}>
        <div className={selfServe.content}>
          <h1>Bottom-Up CRM</h1>
          <a href="" className={selfServe.learn_more}>Learn More</a>
        </div>
      </div>
      <div className={`${selfServe.box} ${selfServe.box6}`}>
        <div className={selfServe.content}>
          <h1>Manage Self Service</h1>
          <a href="" className={selfServe.learn_more}>Learn More</a>
        </div>
      </div>
  </div>
  )
}
