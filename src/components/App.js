// @flow
import React, {PropTypes} from 'react';
import { observer } from 'mobx-react';
import MyComponent from './MyComponent';

const App = ({store}) => (
  <div className="project">
    <h3>{store.description}</h3>
    <MyComponent store={store} />
  </div>
);

App.propTypes = {
  store: PropTypes.object,
};

export default observer(App);
