/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';

import App from './App';
import { hashIntegration, Router } from 'solid-app-router';
import { MetaProvider } from '@solidjs/meta';

render(() => (
  <MetaProvider>
    <Router source={hashIntegration()}>
      <App />
    </Router>
  </MetaProvider>
)  , document.getElementById('root') as HTMLElement);
