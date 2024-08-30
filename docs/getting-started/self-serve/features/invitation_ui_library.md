# Thrivestack Invitation Modal in React.js

## Introduction

This documentation provides a step-by-step guide on how to integrate and use the `Invitation Modal` component from  `thrivestack-react` library in a React.js application. `thrivestack-react` is a UI library that provides a set of high-quality components for building PLG features like invitation, upvote, signup/login page builder.

## Prerequisites

Before you begin, ensure that you have the following installed:

- **Node.js** (version 12 or higher)
- **npm** or **yarn**
- A React.js project setup (create one using `create-react-app` if necessary)

## Installation

First, you need to install `thrivestack-react` if it is not already installed in your project.

### Using npm

```bash
npm install thrivestack-react
```

## Getting Started of Thrivestack Invitation Modal

### Step 1: Import Invitation Modal Component

To use the Invitation Modal component, import it from `thrivestack-react`:


```bash
import { Invite } from 'thrivestack-react'
```
### Step 2: Using a Invitation Modal Component

Below is an example of how to use a basic invitation modal that can be triggered by click of a button .

```typescript
import React, { useState } from "react";
import { Invite } from "thrivestack-react";

const InvitePeers = () => {
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteLoading, setInviteLoading] = useState(false);
  const InvitePeersOnClick = () => {
    setInviteOpen(true);
  };
  const handleOnSubmit = (data: any) => {};
  const handleAddNewTeam = (data: any) => {};

  return (
    <>
      <button
        type="button"
        onClick={InvitePeersOnClick}
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        Invite
      </button>

      <Invite
        isOpen={inviteOpen}
        teams={[]}
        roles={[]}
        onClose={() => setInviteOpen(false)}
        onOk={handleOnSubmit}
        invitedPageURL={"INVITED_PAGE_URL"}
        invitedPageLinkExpirytime={30}
        feature={{ id: "r1", name: "reports" }}
      />
    </>
  );
};

export default InvitePeers;
```

## Props 
###### 1. `isOpen: boolean [*required]` 
**Description**: Controls the visibility of the invitation module.
**Usage**: This prop should be set to `true` to display the invitation modal and `false` to hide it. 
**Example**: `isOpen={inviteOpen}`

###### 2. `onClose: () => void [*required]` 
**Description**: A callback function that is triggered when the invitation modal is closed. 
**Usage**: Typically used to update the state that controls the visibility of the invitation modal. -  
**Example**: `onClose={() => setInviteOpen(false)}`

###### 3. `onOk: () => void [*required]` 
**Description**: A callback function that is triggered when the "OK" or "Submit" button is clicked.
**Usage**: This function usually handles the form submission logic, such as sending the invite data to the server.
**Example**: `onOk={handleOnSubmit}` 

###### 4. `invitedPageURL [*required]` 
**Description**: The URL of the page where the user will be redirected upon successful invitation completion.
**Example**: `invitedPageURL={"https://yourDomain.com/Dashboard"}` 

###### 5. `invitedPageLinkExpirytime [!optional]`
**Description**: The expiry time of the invitation link in minutes. The default value is 10080 minutes (1 week).
**Example**: `invitedPageLinkExpirytime={30}` 

###### 6. `feature [!optional]`  
**Description**: An object representing the feature associated with the invited user.
**Usage**: This helps analyze the most viral feature based on invitation activity in the virality report.
**Example**: `feature={{"id":"r1","name":"reports"}}` 

###### 7. `teams: Array<Team> [^optional]` 
**Description**: An array of team objects to which users can be invited. If teams are already set up in Thrivestack, this prop is not required but can be used to override existing values.
**Usage**: Pass an array of team objects, each containing details such as team name and ID.
**Example**: `teams={[{ id: 1, name: "Engineering" }, { id: 2, name: "Design" }]}` 

###### 8. `roles: Array<Role> [^optional]` 
**Description**: An array of role objects that can be assigned to invitees. If roles are already set up in Thrivestack, this prop is not required but can be used to override existing values.
**Usage**: Pass an array of role objects, where each role object contains information about the role (e.g., name, permissions).
**Example**: `roles={[{ id: 1, name: "Admin" }, { id: 2, name: "User" }]}` 

## FAQ

##### 1. Can we modify content inside invitation modal?
Not now, In Upcoming release we can give option to pass custom Header & Footer.