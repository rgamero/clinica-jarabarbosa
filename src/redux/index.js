import { createStore as reduxCreateStore } from 'redux';

const initialState = {
  showMedia: false
};

const reducer = (state, action) => {
  if (action.type === `TOGGLESHOWMEDIA`) {
    return Object.assign({}, state, {
      showMedia: true
    });
  }
  if (action.type === `CLOSE`) {
    return Object.assign({}, state, {
      showMedia: false
    });
  }
  return state;
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
