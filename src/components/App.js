// @flow
import React, {PropTypes} from 'react';
import { observer } from 'mobx-react';
import MyComponent from './MyComponent';
import GridColumn from './GridColumn';
import '../styles/styles.css';

const App = ({store}) => {
  return(<div className="project">
    <GridColumn store={store}/>
  </div>);
};

App.propTypes = {
  store: PropTypes.object,
};

export default observer(App);
