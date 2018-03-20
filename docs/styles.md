---
id: styles
title: Styles
sidebar_label: Styles
---

A __Style__ contains style information for a document, or part of a document. By default, the style is expected to be written in [__CSS__](https://developer.mozilla.org/en-US/docs/Web/CSS).

_"The __CSS__ (__Cascading Style Sheets__) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."_

There are two ways to style an element:
* Write CSS properties inline
* Create classes in CSS and add them to an element

__Shift__ also provides this two ways to style by either __writing CSS__ or __using a visual interface__ for selecting each CSS properties.

## Managing Classes
Classes are reusable styles that can be added to HTML elementsand they enable a single HTML element to have multiple different looks with CSS.

__Shift__ applies this concept to __components__ rendering too.

To easily manage and keep track of all the classes in your project, these are organised and applied with the UI __Shift's Class Editor__
### Class Editor
The Class Editor provides you a visual UI where you can create, delete and delete the classes in your project. These are sepparated in two categories, __Applied__ and __All__.

Not only you can manage your classes but you can also have information on where each class is used and apply __conditionals__.
### Access Class Editor
* To access the __Class Editor__ open Shift's __Builder__ and select a component.
* Open the __Class Editor__ tab in the __Sidebar__
### Applied Classes
In this category you can manage classes for a specific component. Remember that the first reason to have classes in the first place is to enable their re-use, so even if you are applying a class to a specific component, it will be available in the __All__ category for later re-use.
### - Create Class
* In the __Class Editor__ select the __Applied__ category
* Type the name of the class to be created
* Select __Add class only__ or if you want to create a class and style it, select __Add class and create style__
### - Rename Class
* In the __Class Editor__ select the __Applied__ category
* Select the three dots icon at the right of the to be renamed class
* Select __Rename Class__
### - Remove Class
* In the __Class Editor__ select the __Applied__ category
* Select the three dots icon at the right of the to be removed class
* Select __Remove Class__
### All Classes
In this category you have all the classes available to your project. You can search for any Class, edit or apply it to a selected component.
### - Search for a Class
* In the __Class Editor__ select the __All__ category
* Type the name of the class you wish to find


## Managing Styles
Styles are simply a group of CSS properties that are applied to dictate how an element is rendered. In this case how our components are rendered.
### Access Style Editor
* To access the __Style Editor__ open Shift's __Builder__ and select a component.
* Open the __Style Editor__ tab in the __Sidebar__
### Style Editor
To easily style your components, __Style Editor__ offers a visual UI with a toolset of __CSS__ properties enabling you to style with just a few clicks.

From simple default __CSS__ properties to __Layout__, __Typography__, __Borders__ and __Effects__ to __CSS3__ __Shadows__, __Transforms__, __Flex__ __Box__ and __Media__ __Queries__.
### All Styles
In this category you have all the styles present in your project and you can search through them by typing a style name or create a new one by selecting the __Create style from search input__ option. It is possible also to edit a style by simply clicking it and also see its information and content preview.
### Applied Styles
In this category you have all the styles that are applied to the selected component. You can edit a style by simply clicking it and also see its information and content preview.


## Media Queries
_"Media queries are useful when you want to apply CSS styles depending on a device's general type (such as print vs. screen), specific characteristics (such as the width of the browser viewport, or environment (such as ambient light conditions). With the huge variety of internet-connected devices available today, media queries are a vital tool for building websites and apps that are robust enough to work on whatever hardware your users have."_ - MDN
__Shift__ provides its own manager to help forging your own media queries with a simple interface.

It is possible to __name__ a media query, select its __type__, add __values__ and still use the __AND__ and __OR__ conditions.
The media Query will stay stored in the previously chosen __Class__ selector and will have its own style properties.


### Media Query Manager
__Shift__ provides its own manager to help forging your own media queries with a simple interface.

It is possible to __name__ a media query, select its __type__, add __values__ and still use the __AND__ and __OR__ conditions.
The media Query will stay stored in the previously chosen __Class__ selector and will have its own style properties.

### Access Media Query Manager
* Create a new class or edit an already created class in the __Class Editor__ 
* It will open the __Style Editor__ in the chosen class selector
* Select Add Media Query
### Create a media query
* Access the __Media Query Manager__
* Select __Add Media Query__
* Select __Create Media Query__
* Type a name for the new media query as __Media Query Label__
* Select the a specific type of query or the All option
* Add Features to the type with the chosen Value and Amount
* Optionaly you can __Add OR condition__ to apply a __OR__ condition
* When finished select the __Create__ Button at the bottom right
### Edit or Delete media query
* In the __Class Editor__ access the class in which you want to edit or delete a media query 
* It will open the __Style Editor__ in the chosen class selector
* Select __Add Media Query__
* Click the "gear" icon at the right of the media query to be edited or deleted
* It will open the __Media Query Manager__ with the selected media query
* Edit or Delete the media query and click __Save Changes__ or __Delete Media Query__ when finished


## Stylesheets




## References
* __Media Queries__ - [developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
