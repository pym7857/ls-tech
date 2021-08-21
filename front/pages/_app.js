import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import withRedux from 'next-redux-wrapper'; // 현재props로 store를 넣어줄 부분이 없는데, 그 역할을 wrapper 패키지가 해준다
import { Provider } from 'react-redux'; // Provider: redux state 중앙 통제실 
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import rootSaga from '../sagas';

const LsTech = ({ Component, store }) => { // Component: next에서 넣어주는 props,   store: state, action, reducer가 합쳐진 것 
    return (
        <Provider store={store}>
            <Head>
                <title>ls-tech</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

LsTech.propTypes = {
    Component: PropTypes.elementType, // any
    store: PropTypes.object,
};

// 이 부분은 그냥 암기 
const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares)) // 배포용일때
      : compose( // 개발용일때 
        applyMiddleware(...middlewares),
        !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
      );
    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
};
  
export default withRedux(configureStore)(LsTech); // HOC