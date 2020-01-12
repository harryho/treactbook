import * as React from 'react';
import './App.css';
import { RoundedButton } from './components/RoundedButton';

import { connect } from 'react-redux';
import { AppState } from './store';

import { SystemState, ChatState } from './store/types';
import { updateSession, sendMessage } from './store/actions';

import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';

import { thunkSendMessage } from './services/thunks';

const helloFunc = () => {
  alert('Hello');
};


interface AppProps {
  sendMessage: typeof sendMessage;
  updateSession: typeof updateSession;
  chat: ChatState;
  system: SystemState;
  thunkSendMessage: any;
}

export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;

class App extends React.Component<AppProps> {
  state = {
    message: ''
  };

  componentDidMount() {
    this.props.updateSession({
      loggedIn: true,
      session: 'my_session',
      userName: 'myName'
    });
    this.props.sendMessage({
      user: 'Chat Bot',
      message: 'This is a very basic chat application written in typescript using react and redux. Feel free to explore the source code.',
      timestamp: new Date().getTime()
    });
    this.props.thunkSendMessage('This message was sent by a thunk!');
  }

  updateMessage = (event: UpdateMessageParam) => {
    this.setState({ message: event.currentTarget.value });
  };

  sendMessage = (message: string) => {
    this.props.sendMessage({
      user: this.props.system.userName,
      message: message,
      timestamp: new Date().getTime()
    });
    this.setState({ message: '' });
  };

  render() {
    return (
      <div className="parent">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

          <a className="App-link" href="https:reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <RoundedButton color="maroon" onClick={helloFunc}>
            New Button
          </RoundedButton>
          <ChatHistory messages={this.props.chat ? this.props.chat.messages : []} />
          <ChatInput
            userName={this.props.system ? this.props.system.userName : ''}
            message={this.state.message}
            updateMessage={this.updateMessage}
            sendMessage={this.sendMessage}
          />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
  chat: state.chat
});

export default connect(mapStateToProps, {
  sendMessage,
  updateSession,
  thunkSendMessage
})(App);

