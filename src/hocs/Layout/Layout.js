import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <main className={this.props.className}>
        {this.props.children}
      </main>
    )   
  }
}

export default Layout;