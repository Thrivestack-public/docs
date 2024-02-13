import React from 'react'
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import 'graphiql/graphiql.css';
import { useState, useEffect, ChangeEvent } from 'react';
import { GraphQLSchema, buildSchema } from 'graphql';
import workflowSchema from 'raw-loader!../../../workflow-schema.graphqls';
import onboardingSchema from 'raw-loader!../../../onboarding-schema.graphqls';
import invitationSchema from 'raw-loader!../../../invitation-schema.graphqls';

type Map = {
  [key:string]: (string)[];
};

const m: Map = {
  invitation: [invitationSchema, 'https://api.dev.app.stealthsaasplatform.com/userManagement'  ],
  workflow: [workflowSchema, 'https://api.dev.app.stealthsaasplatform.com/userManagement'],
  onboarding: [onboardingSchema, 'https://api.dev.app.stealthsaasplatform.com/userManagement']
};

function TryOut() {
      const [type, setType] = useState<string>("workflow")
  const [schema, setSchema] = useState<GraphQLSchema | null>(null)
  
  useEffect(() => {
      const element = document.querySelector('.graphiql-container') as HTMLElement; 
      if (element) {
        element.style.height = '768px';
      }
  })

  useEffect(() => {
      if(m[type]){
        const schema = BuildSchema(m[type][0]);
        if (schema) {
            setSchema(schema);
        }
      }
  }, [type]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.currentTarget.value;
    console.log('Selected value:', selectedValue);
    setType(selectedValue);
  };

    return (
    <>
      <div>
        <select id="typeSelect" name="typeSelect" onChange={handleChange}>
          <option value="workflow">Workflow</option>
          <option value="onboarding">Onboarding</option>
          <option value="invitation">Invitation</option>
        </select>
      </div>
      {schema && type && m && m[type] && m[type][1] && <GraphiQL fetcher={createGraphiQLFetcher({url: m[type][1]})} schema={schema}/>}
    </>
    );
}

function BuildSchema(schema: string): GraphQLSchema {
      return buildSchema(schema)
}

export default TryOut
