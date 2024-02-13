import React from 'react'
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import 'graphiql/graphiql.css';
import { useState, useEffect, ChangeEvent } from 'react';
import { GraphQLSchema, buildSchema } from 'graphql';

const fetcher = createGraphiQLFetcher({ url: 'https://my.backend/graphql' });

type Map = {
  [key:string]: (string)[];
};

const m: Map = {
  user: [ `directive@goField(forceResolver:Boolean,name:String)on FIELD_DEFINITION|INPUT_FIELD_DEFINITION directive@auth on FIELD_DEFINITION type Query{getTeams:GetTeamResponse!@goField(forceResolver:true)}type GetTeamResponse{productId:String!organizationId:String!teams:[Team!]}type Team{id:String!name:String!roles:[Role!]}type Role{id:String!name:String!}`, 
        'https://api.dev.app.stealthsaasplatform.com/userManagement'  ],
  config: [ `directive@goField(forceResolver:Boolean,name:String)on FIELD_DEFINITION|INPUT_FIELD_DEFINITION directive@auth on FIELD_DEFINITION type Query{getTeams:GetTeamResponse!@goField(forceResolver:true)}type GetTeamResponse{productId:String!organizationId:String!teams:[Team!]}type Team{id:String!name:String!roles:[Role!]}type Role{id:String!name:String!}type Test{testId:String!}`,
          'https://api.dev.app.stealthsaasplatform.com/userManagement'  ],
  workflow: [`type Query{getBluePrint(intent:String!,subIntent:String!,isSandbox:Boolean):GetBluePrintResponse!getBluePrintV2(input:GetBluePrintV2Input):GetBluePrintResponse!getNodeConfig(workflowId:String!):GetNodeConfigResponse!getNodeConfigV2(input:GetNodeConfigV2Input!):GetNodeConfigResponse!getWorkflowDetails(workflowId:String!):GetWorkflowDetailsResponse!getNodeConfigValues(workflowId:String!,isSandbox:Boolean):GetNodeConfigValuesResponse!getNextTaskofWorkflow(runtimeWorkflowId:String!):getNextTaskofWorkflowResponse!getErrorConfig(input:GetErrorConfigInput):ErrorConfigResponse!getWorkflowUrlForCustomDomain(url:String!):GetWorkflowUrlForCustomDomainResponse!getValidationFromNodeConfig(input:ValidationFromNodeConfigInput!):ValidationFromNodeConfigInputResponse!getCustomDomainForWorkflow(workflowId:String!):GetCustomDomainForWorkflow!getWorkflowsForProduct:GetWorkflowsForProductResponse!getWorkflowsForEnvironment(input:GetWorkflowsForEnvironmentInput!):GetWorkflowsForEnvironmentResponse!getThriveStackWorkflowSignupId:GetThriveStackWorkflowSignupIdResponse!}type Mutation{createWorkflow(input:CreateWorkflowInput!):CreateWorkflowResponse!createWorkflowV2(input:CreateWorkflowInput!):CreateWorkflowResponse!startWorkflowInstance(input:WorkflowInput!):StartWorkflowInstanceResponse!updateTaskToComplete(input:TaskInput):UpdateTaskToCompleteResponse!updateDecisionTask(input:DecisionInput):UpdateDecisionTaskResponse!storeNodeConfig(input:NodeConfigInput):StoreNodeConfigResponse storeErrorConfig(input:StoreErrorConfigInput):ErrorConfigResponse!updateNodeStatusV2(input:UpdateNodeStatusInput!):GetBluePrintResponse!createSandboxWorkflow(input:CreateSandboxSandboxInput):CreateSandboxSandboxResponse!deployWorkflows(input:DeployWorkflowsInput!):DeployWorkflowsOutput!}input ErrorInput{"Test Documenation Comment 1"isRuntimeError:Boolean"Test Documenation Comment 2"status:String message:String errorCount:Int errorIcon:String}input UpdateNodeStatusInput{workflowId:String!nodeId:String!environmentName:String!isDisabled:Boolean isConfigured:Boolean error:ErrorInput}input GetBluePrintV2Input{workflowMode:WorkflowMode!featureType:FeatureType!environmentName:String!environmentId:String!workflowId:String}input GetNodeConfigV2Input{workflowId:String!workflowMode:WorkflowMode!featureType:FeatureType!environmentName:String!environmentId:String!}input CreateWorkflowInput{id:String!isSandbox:Boolean environmentName:String}input WorkflowInput{workflowId:String!isDebugMode:Boolean}input TaskInput{runtimeWorkflowId:String!taskName:String!message:String!}input DecisionInput{workflowId:String!decisionNodeName:String!decision:String!}input NodeConfigInput{workflowId:String!nodeJson:String!}input StoreErrorConfigInput{workflowId:String!environmentName:String!errorAction:ErrorAction!configType:ConfigType!}input GetErrorConfigInput{workflowId:String!environmentName:String!configType:ConfigType!}input DeployWorkflowsInput{productId:String!}type DeployWorkflowsOutput{isSuccess:Boolean!}type InitialNode{id:String!type:String feature:String!data:Data position:InitialNodePosition!}type InitialNodePosition{x:Int!y:Int!}type Integrations{brand:String brandLogo:String}type User{userImage:String!name:String!email:String isAssignee:Boolean!}type Error{isRuntimeError:Boolean status:String message:String errorCount:Int errorIcon:String}type Data{settingsId:String!label:String icon:String image:String integrations:[Integrations] user:[User] isOptional:Boolean!isDisabled:Boolean!isConfigured:Boolean!error:Error sourcePosition:[Position]!targetPosition:[Position]!childNodes:[InitialNode]}type Position{position:String id:String}type LabelData{label:String!}type InitialEdge{id:String!source:String!target:String!data:LabelData type:String!sourceHandle:String targetHandle:String}type Style{strokeWidth:Int stroke:String}type GetNodeConfigResponse{nodeConfig:String!}type CreateWorkflowResponse{isSuccess:Boolean!workflowName:String!}type StartWorkflowInstanceResponse{isSuccess:Boolean!workflowId:String!runtimeWorkflowId:String!}type UpdateTaskToCompleteResponse{isSuccess:Boolean!}type UpdateDecisionTaskResponse{isSuccess:Boolean!}type GetWorkflowDetailsResponse{workflowName:String!workflowId:String!tasks:[Task]!}type GetThriveStackWorkflowSignupIdResponse{workflowId:String!}type ErrorConfigResponse{workflowId:String!errorAction:ErrorAction!configType:ConfigType!isSuccess:Boolean!}type Task{taskName:String!taskId:String!taskStatus:String!}type GetNodeConfigValuesResponse{HTTP_TRIGGER_CONFIGURATION_NAME:String!HTTP_TRIGGER_SANDBOX_URL:String!HTTP_TRIGGER_TRIGGER_TYPE:String!CUSTOM_DOMAIN_CONFIGURATION_NAME:String!CUSTOM_DOMAIN_CUSTOM_DOMAIN_URL:String!CUSTOM_DOMAIN_PATH:String!CUSTOM_DOMAIN_QUERY_PARAMS:String!CUSTOM_DOMAIN_APP_ENVIRONMENT:String!SIGNUP_IDP_TYPE:String!SIGNUP_IDP_APP_ENVIRONMENT:String!SIGNUP_IDP_TENANT_NAME:String!SIGNUP_IDP_DOMAIN_URL:String!SIGNUP_IDP_CLIENT_ID:String!SIGNUP_IDP_CLIENT_SECRET:String!SIGNUP_IDP_APP_ORIGIN:String!SIGNUP_IDP_API_ORIGIN:String!SIGNUP_IDP_CONFIGURATION_NAME:String!APP_ROLE_DEFAULT_ROLE:String!SAASTRACTION_SQS_ENDPOINT_URL:String!SAASTRACTION_SQS_AWS_REGION:String!SAASTRACTION_SQS_QUEUE_URL:String!MESSAGE_QUEUE_PROVIDER:String!MESSAGE_QUEUE_ENVIRONMENT:String!MESSAGE_QUEUE_CONFIGURATION_NAME:String!MESSAGE_QUEUE_END_POINT_URL:String!MESSAGE_QUEUE_AWS_REGION:String!MESSAGE_QUEUE_DYNAMIC_ACCESS_KEY_ID:String!MESSAGE_QUEUE_DYNAMIC_SECRET_ACCESS_KEY:String!MESSAGE_QUEUE_QUEUE_URL:String!MESSAGE_QUEUE_DELAY:String!MESSAGE_QUEUE_PAYLOAD_KEYS:String!REDIRECT_REDIRECT_URL:String!REDIRECT_CONFIGURATION_NAME:String!}type StoreNodeConfigResponse{isSuccess:Boolean!nodeJson:String!}type getNextTaskofWorkflowResponse{isSuccess:Boolean!taskName:String!taskId:String!inputParameters:String!}type GetBluePrintResponse{workflowId:String!workflowMode:WorkflowMode!featureType:FeatureType!environmentName:String!environmentId:String!initialNodes:[InitialNode!]!initialEdges:[InitialEdge!]!}type GetWorkflowUrlForCustomDomainResponse{workflowId:String!url:String!featureType:String!}type MapWorkflowUIResponse{isSuccess:Boolean!}enum ErrorAction{IGNORE_AND_CONTINUE NOTIFY_TEAM STOP_AND_FLAG}enum ConfigType{IDP_CONFIG SIGNUP_REDIRECT_URL SQS_OUTGOING_CONFIG CUSTOM_DOMAIN_CONFIG}input CreateSandboxSandboxInput{token:String!}input ValidationFromNodeConfigInput{workflowId:String categoryID:String productId:String sectionId:String environmentName:String}type ValidationFromNodeConfigInputResponse{relativeUri:String!method:String!body:String!}type CreateSandboxSandboxResponse{isSuccess:Boolean!createCustomDomain:Boolean!}type GetCustomDomainForWorkflow{workflowId:String!customDomain:String!customDomainUrl:String!}type GetWorkflowsForProductResponse{productId:String!workflows:[WorkflowDetails!]}input GetWorkflowsForEnvironmentInput{productId:String!environmentId:String!environmentName:String!}type GetWorkflowsForEnvironmentResponse{productId:String!environmentId:String!environmentName:String!workflows:[FeatureWorkflows!]}type FeatureWorkflows{featureType:FeatureType!workflowDetails:[WorkflowDetails!]}type WorkflowDetails{id:String!name:String!featureType:FeatureType!runtimeUrl:String!}enum Environment{DEV DEMO QA PROD}enum WorkflowMode{SANDBOX SAMPLE_APPLICATION USER_DEFINED_WORKFLOW}enum FeatureType{SIGNUP LOGIN}`,
            'https://api.dev.app.stealthsaasplatform.com/userManagement'],
  onboarding: [`directive@goField(forceResolver:Boolean,name:String)on FIELD_DEFINITION|INPUT_FIELD_DEFINITION directive@auth on FIELD_DEFINITION type Query{getOnboardingDetails(questionId:String,isPrevious:Boolean):GetOnboardingStepDetails!@goField(forceResolver:true)getOrganizationDetails(url:String!):GetOrganizationDetailsResponse!@goField(forceResolver:true)protected:String!@goField(forceResolver:true)@auth}type Mutation{submitOnboardingStep(input:SubmitOnboardingStepInput!):OnboardingStepResponse!@goField(forceResolver:true)createSaaSBuilder(input:CreateSaaSBuilderInput!):CreateSaaSBuilderResponse!@goField(forceResolver:true)updateOnboardingStatus(input:UpdateOnboardingStatus!):MutationResponse!@goField(forceResolver:true)storeProductDetails(input:StoreProductDetailsInput!):StoreProductDetailsResponse!@goField(forceResolver:true)}input SubmitOnboardingStepInput{stepId:String!userId:String!sbId:String answer:[AnswerMap!] nextQuestionId:String}input AnswerMap{sectionId:Int!value:String!}input CreateSaaSBuilderInput{name:String!domain:String url:String}input UpdateOnboardingStatus{status:OnboardingStatus!}input StoreProductDetailsInput{name:String!category:String!}type MutationResponse{mutationSuccess:MutationStatus!}type GetOnboardingStepDetails{userDetails:UserDetails!onboardingStatus:OnboardingStatus!nextStep:OnboardingStep responseMap:[ResponseMap!] intent:String!subIntent:String!productId:String!productName:String!}type UserDetails{userId:String!sbId:String!}type OnboardingStepResponse{status:MutationStatus!nextStep:OnboardingStep onboardingStatus:OnboardingStatus!intent:String!subIntent:String!productId:String!productName:String!}enum MutationStatus{SUCCESS FAIL}type OnboardingStep{stepId:String!stepLayout:StepLayout!question:String!description:String!userInputSections:[UserInputSection!]!nextStepId:String!previousStepId:String!metadata:[Metadata]!isRequired:Boolean!action:[ActionMap] image:String!}type ActionMap{action:String!operation:String!}type Metadata{key:String value:String}enum StepLayout{FORM_WITH_BANNER IMAGE_UPLOAD INTENT_SELECTION}type UserInputSection{order:Int!sectionId:Int!placeholder:String!optionGroups:[OptionGroup!]!sectionName:String inputType:InputType!isRequired:Boolean!action:[ActionMap]}type OptionGroup{title:String!icon:String!isEnabled:Boolean!inputLimit:Int!conditionalQuestionId:String}type GetOrganizationDetailsResponse{name:String!size:String!industry:String!linkedinURL:String!facebookURL:String!website:String!url:String!}type CreateSaaSBuilderResponse{id:String!name:String!domain:String!url:String!}type ResponseMap{sectionId:Int!value:String!}type StoreProductDetailsResponse{id:String!name:String!Category:String!}enum InputType{TEXT SELECT RADIO CHECKBOX IMAGE URL}enum OnboardingStatus{UNSPECIFIED NEW PENDING COMPLETED}`,
              'https://api.dev.app.stealthsaasplatform.com/userManagement']
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
          <option value="config">Invitation</option>
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
