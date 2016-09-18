import React from 'react';
import { connect } from 'react-redux';
import { getSymbolFromCurrency } from 'currency-symbol-map';
import classNames from 'classnames';

import * as Actions from '../../actions/WidgisterActions';
import Meter from '../../components/Meter';
import styles from './index.css';

const mapStateToProps = (state) => {
  return {
    status: state.Widgister.status,
    error: state.Widgister.error,
    widgister: state.Widgister.widgister
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getNewWidgister: () => {
      dispatch(Actions.getNewWidgister());
    }
  };
}

class AppComponent extends React.Component {
  componentDidMount() {
    this.props.getNewWidgister();
  }
  onNewRequest () {
    this.props.getNewWidgister();
  }
  render () {
    if (this.props.status === 'fetching') {
      return (
        <div className={classNames(styles.this)}>
          <div className={classNames(styles.loading)}>Loading ...</div>
        </div>
      );
    } else if (this.props.status === 'idle' && this.props.widgister) {
      var widgister = this.props.widgister;
      return (
        <div className={classNames(styles.this)}>
          <Meter pre={widgister.format && widgister.format === 'currency' ? getSymbolFromCurrency(widgister.unit) : undefined} min={widgister.min} max={widgister.max} value={widgister.value} />
          <p>
            <a className={classNames(styles.button)} onClick={this.onNewRequest.bind(this)}>Re-fetch</a>
          </p>
        </div>
      );
    } else if(this.props.status === 'error') {
      return (
        <div className={classNames(styles.this, styles.error)}>
          <h2>Error: {this.props.error} </h2>
          <a className={classNames(styles.button)} onClick={this.onNewRequest.bind(this)}>Retry Fetch</a>
        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
