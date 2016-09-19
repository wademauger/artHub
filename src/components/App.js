// @flow
import React, {PropTypes} from 'react';
import { observer } from 'mobx-react';
import GridColumn from './GridColumn';
import '../styles/styles.css';

const App = ({store}) => (
  <div className="project">
    {store.columns.map((column, index) => (
      <GridColumn
        index={index}
        key={index}
        store={store}
      />
    ))}
  </div>
);

App.propTypes = {
  store: PropTypes.object,
};

export default observer(App);
