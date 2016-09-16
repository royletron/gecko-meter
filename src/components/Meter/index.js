import React from 'react';
import classNames from 'classnames';

import styles from './index.css';

export default class Meter extends React.Component {
  render () {
    return (
      <svg width='300' height='180' className={classNames(styles.this)}>

      </svg>
    );
  }
}
