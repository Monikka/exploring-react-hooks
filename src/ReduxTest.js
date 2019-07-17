import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect, createStore } from 'react-redux';

const reducer = (state = { data: 'not-loaded-yet' }, action) => {
  if (action.type === 'recieve-data') {
    return { data: action.payload};
  }
  return state;
}
const store = createStore(reducer);

const Foo = connect(state => state)(
  ({ data }) => (<div>Data: {data}</div>)
);
  
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Foo />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));

setTimeout(() => store.dispatch({ type: 'recieve-data', payload: 'loaded-data'}), 2000);
