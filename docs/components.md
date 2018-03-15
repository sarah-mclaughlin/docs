---
id: components
title: Components
sidebar_label: Components
---
Everything inside Shift is made of components.
<br><br>
## Root Components

## Managing Components

## Presentational vs Container Components

## Component Settings

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
