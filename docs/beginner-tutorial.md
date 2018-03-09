---
id: beginner-tutorial
title: Beginner's Tutorial
sidebar_label: Beginner's Tutorial
---
<br><br>
This is a beginner's tutorial that will cover different parts of a web-app development with Shift.

For starters let's create a simple message board app that will store and persist messages submitted by the user.

### Table of Contents:
* [The Plan](#the-plan)
* [Create a new Project](#create-a-new-project)
* [Structure](#structure)
* [Data](#data)
* [Content](#content)
* [Style](#style)
* [Preview](#preview)
* [Export](#export)



## The Plan

To start our project we need a plan.
<br><br>
__What we want to see?__
 - __Messages Dashboard__ - The default path for our application. This is where all the submitted messages will be shown.
 - __Message__ - A Message view where we will have an individual message shown.
 - __Message Form__ - A simple form for Message submission.
<br><br>

__What is a Message in this App context?__

A __Message__ will have the following properties:
 - `id` (unique)
 - `title`
 - `description`
 - `date`
<br><br>

__What we want to happen?__
- Messages to be shown at the Message Dashboard.
- Messages to be submitted through Message Form.
- Store the Messages in a db (Graphcool used in this tutorial as the endpoint).
- If a Message Title is clicked, redirect to the individual Message.
<br><br>

__When we want it?__
- Yesterday.

## Create a new project

In Dashboard you can simply create a new project by giving it a name.

![Create Project](/docs/docs/assets/firsttutorial.gif)

## Structure

Let's start by structuring our App.
First we will need to add the [__Router__](router.md) component to handle all the different paths. And for each path we will want a [__Route__](route.md) component. 

![Routing](/docs/docs/assets/firsttutorial_routing1.gif)

> You can delete the default children of each created component.

Now we configure each [__Route__](route.md) component. On the __component settings__ tab we set the `Label`, `Path` and `Default path` settings for each of them:

| Label       | Path                | Default Path     |
|-------------|---------------------|------------------|
| Home        | /                   |                  |
| Message     | /message/:messageid | /message/default |
| PostMessage | /newMessage         |                  |

> We will be using the messageid as a parameter to fetch and show each individual message.

![Routing](/docs/docs/assets/firsttutorial_routing2.gif)

Starting with the __Home Route__ we will add a [__Query__](query.md) component to get the data from our Graphql DB endpoint. Then to it we add a [__ReplicateList__](replicatelist.md) which will ease our job by replicating, with the help of it's parent, each instance of data (__Message__) received. 
<br><br>
For each __Message__ we will want to show its __Title__ (which will be a link to the individual message) and __Date__, so we add the following components:

![Home](/docs/docs/assets/firsttutorial_home.png)

For the __Message Route__ we will want also a [__Query__](query.md) component to fetch our __Message__ and each component to display its previous data and the __Description__ aswell:

![Message](/docs/docs/assets/firsttutorial_message.png)

At last the __PostMessage Route__ as our form to submit new Messages, will have a [__State__](state.md) component with a child [__Form__](form.md) and 
this will have the following components for input:

![PostMessage](/docs/docs/assets/firsttutorial_postmessage.png)

So to wrap our structure, this is all we will need.

## Data

Someone at the back-end will have to take care of the DB. Well, we can be that someone.

For this tutorial we will use the __GraphCool__ interface: [__Graph.cool__](https://www.graph.cool)

Open Graphcool console and set up a new project with the following `Type`:

```
type Message @model {
  date: DateTime!
  description: String!
  id: ID! @isUnique
  title: String!
}
```

Grab the endpoint url so we can set it up in our App. 
<br>
Back to __Shift__ we go to the __Code__ tab and insert the url endpoint into the __GraphQL Settings__<br>(`Code->Settings->GraphQL`)

Our connection is ready. Now we need two [__Queries__](queries.md) and one [__Mutation__](mutations.md):

- query __allMessages__ - all the messages to be shown in the Messages feed.
- query __message__ - the individual message fetched using it's `id`.
- mutation __postMessage__ - post messages.

>In __Code Mode__ you can not only add this queries and mutation but also use the [__GraphiQL__](https://github.com/graphql/graphiql) interface to do it. All this inside __Shift__.

```
query allMessages {
  allMessages {
    id
    title
    description
    date
  }
}
```

```
query message ($id: ID!) {
  Message (id: $id){
    id
    title
    description
    date
  }
}
```

```
mutation addMessage (
	$description: String!
	$date: DateTime!
	$title: String!){
    createMessage(
      description: $description
      date: $date
      title: $title) {
			id
            title
            description
            date
    }
  }
```

> Each __Query__ and __Mutation__ needs to be added separately 

Another step complete, it's time to create data.

## Content

Our app runs on data, receives and submits __Messages__, so let's link it all together. <br>
In Shift's GraphQL interface we are going to "manually" submit messages so we can link data to it's desired place.
<br> (`Code->Settings->GraphQL`) 

In our previously created `addMessage` mutation we will insert messages. At the bottom in `Query Variables` in a json format
we add:

```
{
  "title": "A Pretty Message Title",
  "description": "a random description",
  "date": "2018-05-03"
}
```
> In a first instance we insert the date for the messages submitted manually, but later on this will be done automatically by our app.

From just hitting the play button at the top of the GraphiQL interface we can see that our Mutation query went through and have the
returning information aswell as the id generated for our message.

Now we have messages in our DB, it's time to see it.

### Home

Back in __Designer Mode__, we go to the Route we created as __Home__ and select the previously created __Query__ component. On the
configuration of the __Query__ we set the `Query` option to __allMessages__ (our `Query` defined in Code Mode).

In __ReplicateList's__ child, set the Configuration option `Item Name` to __message__, this will define how we reference each data item.
Set `Each Item Key` to __message.id__ so it uses the message id as key for each data item. Then in __Props Flow__ tab select the __allMessages__ query and `Add new link` with `Data` type, this will bind allMessages received to this __ReplicateList__.

Now to set each message title and date to each righteous place we select the __Text__ child of __ReplicateList__ and in the PropsFlow tab we
bind it to `__message__ -> __title__` and select the `Link` type to Content. Do the same for the __Date__ child but don't forget to set the `Link` type to __Date__.

Till this step, every change you've done to your app had the proper visual update in __Canvas__, it's a good practice to take advantage of this Shift's feature to debug everything that's happening in real-time.

In our plan there was a link that would take us to each individual message, and since we forgot to add it on purpose, let's see how to quickly shortcut and deal with it in Shift.

We add a __Link__ component as child of the __ReplicateList__ and then we drag the __Text__ component (which is our message title) into the  it. In __Link__ Configuration set the `Link` option to __/message/${props.message.id}__. This will set the link path to our __Message__ Route with the message `id` from the __message__ previously received from the __Query__ and fed from the __ReplicateList__.

>As you have noticed the Component-Tree works with Components and Html elements respecting the order of the well known DOM Tree. That's why the __Link__ is added as a parent of __Text__ and not the other way around.


### Message

Since we are routing every message by its `id` as a parameter defined in this __Message__ route (`/message/:messageid`), set a messageid default path in configuration. With the default message set it's now easier to connect all the data to each field.

We need to tell our __Query__ to deal with it.

In __Query__ configuration set the `Query` option as __message__ and the `Arguments` as:

```
{
    id: props.flowProps.route.params.messageid
}
```

"__Query__ deal with it !" we said.

Then just select each field for __title__, __description__ and __date__ and bind them in __Props Flow__ tab like we did before.

>__Tip:__ go to the __Home__ Route and start the preview, see how each link takes you to each individual message path and presentation.

We are done here. How quick was it?

### PostMessage

For the __PostMessage__ Route we will need to configure the __Local State__ component, and __Actions__ for it.

In our __Local State__ component in __State Settings__ tab we set the default state:

```
{
  title: "",
  description: ""
}
```

And add two new __Actions__:


Name: changeField
Template: Synchronous state change
```
export default ({ state, event }) => {
  event.preventDefault();

  return Object.assign({}, state, {
    [event.target.name]:event.target.value,
  });
}
```

> Action for every change in the target values.

Name: onSubmit
Type: Do Mutation
```
export default ({ state, event, eventComponentProps, history }) => {
  event.preventDefault();

  return async ({ getState, setState, mutate, getMutation }) => {
    setState(Object.assign({}, getState(), {
      loading: true,
    }));

    try {
      // set the date for the submitted message
      const addDateVariable = Object.assign({}, getState(), {
        date: new Date().toISOString(),
      });

      const response = await mutate({
        mutation: getMutation('addMessage'),
        variables: addDateVariable
      });

      setState(Object.assign({}, getState(), {
        title: "",
        description: "",
        error: null,
        loading: false,
      }));

      // change path to the newly created message
      history.push(`/message/${response.data.createMessage.id}`);
    } catch (e) {
      setState(Object.assign({}, getState(), {
        error: e,
        loading: false,
      }));
    }
  };
}

```

> Action for submitting the data gathered from the __Form__, setting the state back to it's default and send the user to the newly created
message. The __date__ property is added to the variables fetched from the inputs.

Now in the __Form__ component's configuration we add the event __onSubmit__ with the __onSubmit__ action created.

For the __title__ and __description__ inputs we go to each configuration and set the `Name` option as `title` and `description` respectively
and add the Event __onChange__ to the __changeField__ Action. For each of them in the PropsFlow tab add a Link for each property with the type __Value__.

For the button input we set the `Value` and `Type` as __Submit__.


### It still doesn't look pretty, but it works! Congratulations!

## Style

It's time for putting another feature of Shift to use. To style your app all you need to do is add classes for each component and with the help of the __Style Editor__ put everything in place and pretty without having to write any CSS code.

Give a try and explore it.

[__More on Style Editor__](style-editor.md)

## Preview

To preview your fresh app just hit __Play__ at the top toolbar or select in which device you want to preview it on.

## Export

To export the app just open the __Export Manager__ and hit export. Wait a couple of seconds and your app will be ready to download to deploy
wherever you want.
