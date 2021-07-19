const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
//actions
//action-types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';
//하단의 reducer 에서 작성할때 type이 반복되기때문에 따로정의 해놓음

const addSubscriber = () => {
  //type이 ADD_SUBSCRIBER 인 obj를 반환하는 action
  return {
    type: ADD_SUBSCRIBER,
  };
};
const addViewCount = () => {
  type: ADD_VIEWCOUNT;
};

const subscriberState = {
  subscribers: 365, //state의 초기값
};

//reducer -> action 을 handling 한다

const subscriberReducer = (state = subscriberState, action) => {
  // reducer는 state , action 두개의 인자를 받는다.
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        subscribers: state.subscribers + 1,
      };
    default:
      return state;
  }
};
const viewState = {
  viewCount: 100,
};
const viewReducer = (state = viewState, action) => {
  switch (action.type) {
    case ADD_VIEWCOUNT:
      return {
        ...state,
        viewCount: state.viewCount + 1,
      };
    default:
      return state;
  }
};
const rootReducer = redux.combineReducers({
  view: viewReducer,
  subscriber: subscriberReducer,
});
//store
const store = createStore(rootReducer, applyMiddleware(logger));

// store.subscribe(() => {
//   console.log('subscribe ==>', store.getState());
// });
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
