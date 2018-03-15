---
id: routing
title: Routing
sidebar_label: Routing
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

```
Route1  /                   Home component
Route2  /users              Users component
Route3  /users/:userid      Userid component
Route4  /logout             Logout component
```

If the location for the application was:
```
https://www.myapp.com/               It would match the Route1 and render Home component
https://www.myapp.com/users          It would match the Route1 and render Users component
https://www.myapp.com/users/:userid  It would match the Route1 and recognize the userid as a parameter
```

Using __Router__ as a parent Component, each __Route__ component should be configured as mencioned above. Given the match, all the children
for the matched __Route__ will be rendered.
