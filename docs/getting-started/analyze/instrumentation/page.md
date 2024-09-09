<!-- # Page (Optional)

## 1. Introduction

With the Page call, you can track the page views of your product users and any additional properties of the page.

![Page Flowchart](/img/docs/analyze/apis/page-flowchart.png)

### 1.2. Page API

The `/page` endpoint is used to track page or actions performed by users. It allows you to associate and update page information as property.

#### 1.2.1. Page Parameters

You need to provide four pieces of information: the first is the page name, the second is the user ID, the third is additional properties associated with the event, and the fourth is the timestamp.

**Parameter** | **Type** | **Description**
--- | --- | ---
`page_name` | String | The name of the page being tracked.
`properties` | Object | Additional properties associated with the event.
`user_id` | String | The unique identifier of the user triggering the event.
`timestamp` | Date | Date the user’s account was first created. Recommends using ISO-8601 date strings.
`context (optional)` | Object | Context is a dictionary of extra information that provides useful context about a datapoint.

#### 1.2.2. Page Properties

The following properties of how an event is described by:

**Property** | **Type** | **Description**
--- | --- | ---
`name` | String | Name of the page.
`path` | String | Path portion of the page’s URL.
`referrer` | String | Previous page’s full URL.
`search` | String | Query string portion of the page’s URL.
`title` | String | Page’s title.
`url` | String | Page’s full URL.
`keywords` | Array [String] | A list/array of keywords describing the page’s content.

#### 1.2.3. Sample

A JSON object with the required Event Object fields and any additional page properties.

```json
{
  "page_name": "page_name",
  "properties": {
    "property1": "value1",
    "property2": "value2"
  },
  "user_id": "user123",
  "timestamp": "20-11-23T22:28:55.111Z"
}
```

#### 1.2.4 Try it out (Comming Soon)

```json
{
  "page_name": "/signup",
  "properties": {
    "title": "Signup | Example ",
    "url": "https://www.example.com/signup"
  },
  "user_id": "766b3aef-5904-46fe-af05-a293fee8h345",
  "timestamp": "20-11-23T22:28:55.111Z"
}
```-->