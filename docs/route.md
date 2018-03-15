---
id: route
title: Route
sidebar_label: Route
---

`"The Route component is perhaps the most important component in React Router to understand and learn to use well. Its most basic responsibility is to render some UI when a location matches the route’s path."`

## Component Settings
Default Component settings, __Path__, __Exact match__, __Default Path__

<br>
### Path
`String`

If a __Route's__ path matches the current location, it's children Components will be rendered.

To determine if a Route component's path prop matches the current location, the [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp) package is used. It compiles de path string into a regular expression which is matched against the current location pathname.

### Exact match
`boolean`

Presented by a checkbox, the option __Exact match__ assures that the match is equal to the __Path__ defined.

### Default path
`String`

Sets the default path for that __Route__. When using params such as `/user/:userid` if the userid in the current location is not matched, the default path will be returned.

## References

* [__React Route__](https://reacttraining.com/react-router/web/api/Route)
* [__path-to-regexp__](https://github.com/pillarjs/path-to-regexp)
