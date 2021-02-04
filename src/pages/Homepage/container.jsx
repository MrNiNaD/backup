import React, { Component } from 'react';
import openSocket from 'socket.io-client';

const Container = Main =>
  class HomepageContainer extends Component {
    static propTypes = {};

    constructor(props) {
      super(props);

      this.state = {
        socket: null,
        data: null,
      };
    }

    componentDidMount() {
      const socket = openSocket('http://localhost:8001', {
        transports: ['websocket'],
      });
      this.setState({
        socket,
      });
      socket.on('connect',  (data) =>  {
        console.log('Connected!');
        this.setState({
          data,
        });
      });
    }

    subscribeToDateEvent = (interval = 1000) => {
      console.log('hitted');
      this.state.socket.emit('subscribeToDateEvent', interval);
    };

    render() {
      return <Main />;
    }
  };

export default Container;
