// @flow

import React, {PropTypes} from 'react';
import { observer } from 'mobx-react';
import { css, StyleSheet } from 'aphrodite';
// import {styles} from '../styles/styles.css'
import MyComponent from './MyComponent';

const keyframes = {
  '0%': {fontSize: 12},
  '50%': {fontSize: 16},
  '100%': {fontSize: 12},
};

const styles = StyleSheet.create({
    red: {
        ':hover': {
            color: 'red',
        },
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        },
    },
    animate: {
      animation: 'x 6s ease 0s infinite',
      animationName: keyframes,
    },
});

const App = ({store}) => (
  <div className="project">
    <h2 className={css(styles.red)}>Welcome to the {store.name} project!!!</h2>
    <h3 className={css(styles.animate)}>This project is a {store.description}.</h3>
    <MyComponent store={store} />
  </div>
);

App.propTypes = {
  store: PropTypes.object,
};

export default observer(App);
