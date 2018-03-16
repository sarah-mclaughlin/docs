---
id: routing
title: Routing
sidebar_label: Routing
custom_edit_url: test
---
`Routing is the process of selecting a path for traffic in a network, or between or across multiple networks.``

Every web application is composed by multiple pages. In a static page environment every link and location change would be relative to a file and filename. A page for each location (ex: About, Contacts, Home, etc.).

Using __React's Router__, Shift provides __dynamic routing__ in your application in a __easy-to-configure__ way.

## Dynamic Routing

With __dynamic routing__ your app knows the different locations and links and how to deal with them. Making it easier to match a pathname and enabling a default behaviour in case it doesn't.

Since __Shift__ works with components, routing will dictate which component to render in each matching.
<br><br>
__Routing components__:
* [__Router__](router.md)
* [__Route__](route.md)

Let's learn from an example:

| Label  | Path    | Component | Exact match |
|--------|---------|-----------|-------------|
| HomeRoute | /       | Home      |     <center> x  </center>    |
| UserListRoute | /users  | UsersList     |             |
| LogoutRoute | /logout | Logout    |             |

If the location for the application was:

| Path                         | Match                                                           |
|------------------------------|-----------------------------------------------------------------|
| https://www.myapp.com/       | It would match the HomeRoute and render Home component          |
| https://www.myapp.com/users  | It would match the UserListRoute and render UsersList component |
| https://www.myapp.com/logout | It would match the LogoutRoute and render Logout component      |

>HomeRoute is configured with __Exact match__ otherwise it would match the other Routes and only render Home component no matter the path, since all the paths start with '/'

In case the path gets specific, and a path to a specific user is needed like  `/users/:userid`  __Nested Routes__ should be used.

## Nested Routes

The path `/users/:userid` should not be included in the __Router__ list because it would match the UserListRoute, and that's not its purpose.

In this case we use __Route__ components to better specify the matching.

| Label    | Path           | Component  | Exact match |
|----------|----------------|------------|-------------|
| Userlist | /users         | UserList   |      <center> x  </center>      |
| UserRoute     | /users/:userId | SingleUser |             |

If the location for the application was:

| Path                                | Match                                                                                         |
|-------------------------------------|-----------------------------------------------------------------------------------------------|
| https://www.myapp.com/users         | It would match the UserListRoute and render UsersList component                               |
| https://www.myapp.com/users/:userId | It would match the UserRoute and render SingleUser component with the `userId` as a parameter |

This way when rendering the UserListRoute it will render the UserList component if the match is __Exactly__ `/users` and the UserRoute uses a
__path param__ to capture the pathname part after.

>Routes that share a common prefix should be grouped in the same component. Not only for better structure, since it makes parent Routes simple, but to render content that is common across every route with the same preffix

## Path Params
For situations where it is important to capture variables in a pathname we use Path params.

In the `/users/:userId` case, the `:userId` means that the part of the pathname that comes after `/users/` will be captured.

All the variables captured in a __Route__ will be stored in its `match.params`object and in this case `match.params.userId`.

In __Shift__ this `match` object will be part of the [__PropsFlow__](propsflow.md) in the __children__ components of the matched __Route__. It means you can access this captured parameter with:
```
props.match.params.userId
```


## Links

Normal HTML Links would enforce a page reload, since we are building an application and we can do this without reloading the entire page, we use the __Link__ component instead.

__Shift__ provides a [__Link__](link.md) component which is an extended version of the standard <Link> component from __React Router__.

For more on __Link__ usage check the component page.

## References


* [__React Router__](https://reacttraining.com)
* [__Routing__](https://reacttraining.com/core/guides/philosophy/dynamic-routing)
* [__Router__](router.md)
* [__Route__](route.md)
* [__Link__](link.md)

<br><br><br>
