# 'Try Out' Guide

## 1. Using the GraphQL Explorer

1. Get the [API Token](#).

2. Launch the [GraphQL Explorer](/getting-started/apis-non-gen/self-serve-apis-try-out).

![](/img/docs/apis/guide/graphql-explorer.png)

3. Select the schema from the dropdown provide, this depends on the API you are trying out.

![](/img/docs/apis/guide/graphql-dropdown.png)

4. Write the GraphQL query or mutation in query editor.

5. In the Headers section, pass in you api token in json format
```json
{
    "token": "API_KEY"
}
```
6. Press the Play Button.
![](/img/docs/apis/guide/graphql-query.png)
> Note ⚠️: Mutations will update your ACTUAL data. Make sure you are testing on development configurations. 

<hr/>

## 2. Using the REST API Try Out Function

1. Get the [API Token](#).

2. Go to the API Reference page of your choice, for example the '/identify' API reference guide.

3. Navigate to the 'Request' section found in the right most pane of the documenation.
![](/img/docs/apis/guide/rest-request-token.png)

4. Enter the token in the Auth section.

5. Edit the request Body with a actual request.

6. Press the 'SEND API REQUEST' button.
![](/img/docs/apis/guide/rest-response.png)

> Note ⚠️: Any POST request will update your ACTUAL data. Make sure you are testing on development configurations. 
