import * as WidgisterActions from '../actions/WidgisterActions';

export default function Widgister (state = {
  status: 'idle',
  error: undefined,
  widgister: undefined
}, action) {
  switch (action.type) {
    case WidgisterActions.REQUEST_NEW_WIDGISTER:
      return Object.assign({}, state, {status: 'fetching', error: undefined});
    case WidgisterActions.SUCCESS_NEW_WIDGISTER:
      return Object.assign({}, state, {status: 'idle', widgister: action.data});
    case WidgisterActions.FAILURE_NEW_WIDGISTER:
      return Object.assign({}, state, {status: 'error', error: action.error});
    default:
      return state;
  }
}
