import React, { Component } from 'react';

import { Navigator } from './_components/navigator';

export class App extends Component {
  render() {
    return <Navigator {...this.props} />;
  }
}
