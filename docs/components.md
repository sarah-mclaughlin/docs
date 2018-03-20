---
id: components
title: Components
sidebar_label: Components
---
`Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.`


Everything inside Shift is made of components to develop components.
Usually web development is about HTML elements but in the __Shift__ environment everything is treated as components even HTML elements are components, just like the __React's__ concept.
This empowers reusability and isolation aswell as composition.

For a more simple example imagine a HTML page having a Navigation Menu, a Product List, Product search and Footer. Developing the same structure in Shift would have a component for the page, other for the Navigation Menu, the Product List and so on. Each one of the components with its own specifics like Styling, Settings, State, and/or Flow.

Components have children

Components have props

Specialization?

((scope needs to be more precise for such a equal topic to React))


<br><br>
## Root Components

((to be implemented))

## Managing Components

## Presentational vs Container Components
It's easier to organize, reuse and think in components using the Presentational Component and Container Component patterns. They often are referred as Dumb and Smart, Pure and Stateful, Skinny and Fat, Screens and Components, and other conventions but the core ideia is the same when it comes to two different types of components.

This concepts will make it easier to sepparate the layers of "layout" and "logic and data" in the way we use and develop components.

### Presentation Components

### Container Components

## Component Settings

### Default Component Settings
* Label -
* Events -
* Inline Styles -
* Custom Properties -

## Custom Components
Maybe you prefer the DIY option, well __Shift__ enables you to develop your own __Shift Component__ with the same development template.
Each component

>This will make possible the share of __Shift Components__ later on in a __MarketPlace__.



### Component Template
All Shift Components are made of `React`, so if you are familiar with the paradigm you will have no trouble developing your own component.

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShiftComponent extends Component {
  static propTypes = {
    renderChildren: PropTypes.func.isRequired,
    getAttributes: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    const { renderChildren, getAttributes } = this.props;

    return (
      <div {...getAttributes()}>
        {renderChildren()}
      </div>
    );
  }
}
```

* __propTypes__ -
    * __renderChildren__ -
    * __getAttributes__ -
* __defaultProps__ -

### Settings Template
Set your custom component place so it can be part of Shift.

```
export default {
  icon: '',
  type: types.PRESENTATIONAL,
  category: 'structure',
  childrenType: {
    default: {},
  },
  propsSchema: [],
};
```

* __icon__ -
* __type__ -
* __category__ -
* __childrenType__ -
* __propsSchema__ -


### Symbols
