import React from 'react';
import { connect } from 'react-redux';
import { getSymbolFromCurrency } from 'currency-symbol-map';

import * as Actions from './actions/WidgisterActions';
import Meter from './components/Meter';

const mapStateToProps = (state) => {
  return {
    status: state.Widgister.status,
    widgister: state.Widgister.widgister
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewWidgister: () => {
      dispatch(Actions.getNewWidgister())
    }
  }
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
        <p>Loading ...</p>
      )
    } else if (this.props.status === 'idle' && this.props.widgister) {
      var widgister = this.props.widgister;
      console.log()
      return (
        <div>
          <Meter pre={widgister.format && widgister.format === 'currency' ? getSymbolFromCurrency(widgister.unit) : undefined} min={widgister.min} max={widgister.max} value={widgister.value} />
          <a onClick={this.onNewRequest.bind(this)}>Re-fetch</a>
        </div>
      );
    } else {
      return (
        <div />
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
