import Message from '../src/index';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';

const info = function () {
  Message.info('This is a normal message');
};

class Demo extends Component {
    render(){
        return(
            <Button
                color="primary"
                onClick={info}>
                Display normal message
            </Button>
        )
    }
}
export default Demo;
