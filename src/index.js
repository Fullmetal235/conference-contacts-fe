import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from './react-auth0-spa';
import { Router } from 'react-router-dom';
import config from './auth_config.json';
import history from './utils/history';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './index.css';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';

mixpanel.init("b02a197733f5750bb0d7c6bb0bdc4418");



export const client = new ApolloClient({
  uri: 'https://lambda-labs-swaap-staging.herokuapp.com/',
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  }
});



const onRedirectCallback = appState => {
  history.push(appState && appState.targetUrl
    ? appState.targetUrl
    : window.location.pathname
  );
};


class INeedMixpanel extends React.Component {
  componentDidMount() {
      this.props.mixpanel.track('Hello mixpanel!');
  }

  render() {
    return <div></div>
}
}
// Component that will be aware of Mixpanel existence - it will pass Mixpanel
// instance down to it's child


// Proper Mixpanel consumer, it gets Mixpanel instance by props

	
const Mix = () => 
    <div>
        <MixpanelConsumer>
            {mixpanel => <INeedMixpanel mixpanel={mixpanel}/>}
        </MixpanelConsumer>
    </div>;
	





const render = () => {
  const App = require('./app/App').default;

  ReactDOM.render(
    <MixpanelProvider mixpanel={mixpanel}>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      audience={config.audience}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <ApolloProvider client={client}>
        <Router history={history}>
          <App />
          <Mix />
        </Router>
      </ApolloProvider>
    </Auth0Provider>
    </MixpanelProvider>,
    document.getElementById('root')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render);
}
