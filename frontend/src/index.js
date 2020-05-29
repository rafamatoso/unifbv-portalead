import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import App from './App';
import English from './utils/i18n/en.json';
import Portuguse from './utils/i18n/pt.json';
import './index.css';

const local = navigator.language;

let lang;
if (local === 'en-US') {
  lang = English;
} else {
  lang = Portuguse;
}

ReactDOM.render(
  <IntlProvider locale={local} messages={lang}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
