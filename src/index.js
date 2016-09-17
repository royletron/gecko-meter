import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import GeckoMeter from './apps/GeckoMeter';
import store from './store';

render(<Provider store={store}><GeckoMeter /></Provider>, document.getElementById('root'));
