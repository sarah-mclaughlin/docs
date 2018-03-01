---
id: beginner-tutorial
title: Beginner's Tutorial
sidebar_label: Beginner's Tutorial
---
This is a beginner's tutorial that will cover different parts of a web-app development with Shift.

For starters let's create a simple message board app that will store and persist messages submitted by the user.
And then with subscriptions we will also see how the message board will update everytime a message is added.

__Table of Contents:__
* [The Plan](#the-plan)
* [Create a new Project](#create-a-new-project)
* [Structure](#structure)
* [Content](#content)
* [Style](#style)
* [Data](#data)
* [Subscriptions](#subscriptions)
* [Preview](#preview)



## The Plan

To start our project we need a plan.
<br><br>
__What we want to see?__
 - __Messages Dashboard__ - The default path for our application. This is where all the submitted messages will be shown.
 - __Message__ - A Message view where we will have an individual message shown.
 - __Message Form__ - A simple form for Message submission.
<br><br>

__What is a Message in the App context?__

A __Message__ will have the following properties:
 - `id` (unique)
 - `title`
 - `description`
 - `date`
<br><br>

__What we want to happen?__
- Messages to be shown at the Message Dashboard.
- Messages to be submitted in the Message Form.
- Store the Messages in a db (Graphcool used in this tutorial as the endpoint).
- If a Message Title is clicked, redirect to the individual Message.
<br><br>

__When we want it?__
- Yesterday.

## Create a new project

In the Dashboard you can simply create a new project by giving it a name.

![Create Project](/docs/docs/assets/firsttutorial.gif)

## Structure

Let's start by structuring our App.
First we will need to add the [__Router__](router.md) component to handle all the different paths. And for each path we will want a [__Route__](route.md) component. 

![Routing](/docs/docs/assets/firsttutorial_routing1.png)

> You can delete the default children of each created component.

Now we configure each [__Route__](route.md) component. On the __component configuration__ tab we set the `Label`, `Path` and `Default path` settings for each of them:

| Label       | Path                | Default Path     |
|-------------|---------------------|------------------|
| Home        | /                   |                  |
| Message     | /message/:messageid | /message/default |
| PostMessage | /newMessage         |                  |

> We will be using the messageid as a parameter to fetch and show each individual message.

![Routing](/docs/docs/assets/firsttutorial_routing2.gif)

Starting with the __Home Route__ we will add a [__DataConnector__](dataconnector.md) to get the data from our Graphql DB endpoint. Then to it we add a [__ReplicateList__](replicatelist.md) which will ease our job by replicating, with the help of it's parent, each instance of data (__Message__) received. 
<br><br>
For each __Message__ we will want to show its __Title__ (which will be a link to the individual message) and __Date__, so we add the following components:

![Home](/docs/docs/assets/firsttutorial_home.png)

For the __Message Route__ we will want also a [__DataConnector__](dataconnector.md) to fetch our __Message__ and each component to display its previous data and the __Description__ aswell:

![Message](/docs/docs/assets/firsttutorial_message.png)

At last the __PostMessage Route__ as our form to submit new Messages, will have a [__State__](state.md) component with a child [__Form__](form.md) and 
this will have the following components for input:

![PostMessage](/docs/docs/assets/firsttutorial_postmessage.png)

So to wrap our structure, this is all we will need.

## Content

## Style

## Data

## Subscriptions

## Preview
