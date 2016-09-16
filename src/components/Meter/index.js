import React from 'react';
import classNames from 'classnames';

import styles from './index.css';

export default class Meter extends React.Component {
  constructor () {
    super();
    this.state = {
      percent: 0
    };
  }
  componentDidMount () {
    this.calculate();
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props !== prevProps) {
      this.calculate();
    }
  }
  calculate () {
    this.setState({
      percent: (this.props.value - this.props.min) / (this.props.max - this.props.min)
    })
  }
  render () {
    return (
      <svg width='300' height='180' className={classNames(styles.this)}>
        <text x='0' y='20' className={classNames(styles.title)}>{this.props.value}</text>
        <path transform='translate(60,55)' className={classNames(styles.arc)}
          d="M0,90 A90,90,0 1 1 180,90"
          />
        <text x='0' y= '40'>
        {this.props.min}-{this.props.max}
        </text>
        <text x='0' y= '60'>
        {this.state.percent}
        </text>
      </svg>
    );
  }
}
