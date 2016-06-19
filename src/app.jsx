import React, { Component } from 'react';
import { render } from 'react-dom';
import Style from './styles/something.styl';

 class Hello extends Component {
     constructor(props) {
         super(props);
     }

     render() {
         return (<div>Hello, {this.props.name}</div>);
     };
 }

render(<Hello name="Kenya" />, document.body);