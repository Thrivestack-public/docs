---
sidebar_position: 1
---

# Workflow Canvas

## Introduction

ThriveStack's Workflow Canvas empowers you to effortlessly create and modify user journey workflows through an intuitive graphical flowchart interface.

The Workflow Canvas currently supports the following user workflows:

1. Sign Up Workflow
2. Login Workflow
3. Sandbox Workflow

Out of the box, you have access to the Sandbox Workflow, allowing you to explore and comprehend the capabilities of the Workflow Canvas. Workflow Canvas orchestrates user workflows using nodes.
## Nodes

The fundamental building block of the Workflow Canvas is a Feature Node. Each node takes inputs, executes predefined activities, and produces outputs. These outputs can be seamlessly passed as inputs to other nodes.

To ensure optimal functionality, it is imperative to configure the nodes correctly. This can be achieved through the Configuration Pane, accessible by selecting the respective node.

## Configuration Pane

Every step in a workflow, represented by a node on the Workflow Canvas, requires configuration. Examples of configurations include secrets for third-party integrations (e.g., Auth0) or custom messages. Each node comes with its set of configurations.

The Configuration Pane also allows you to create variables for configurations, facilitating reuse across multiple nodes. Configurations can be associated with different scopes, enabling distinct settings for production and development environments.

## Debugging Workflow

ThriveStack's suite offers Debug Mode within the Workflow Canvas. Debug Mode facilitates the testing and validation of each activity in the workflow. It provides insights into the state of each node and offers a Customer Experience View.

The integrated development console enables monitoring of node activities and logs. You can control each activity in the workflow using the Play Controls provided in the debug console.

