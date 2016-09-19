// @flow

import React, {PropTypes} from 'react';
import { observer } from 'mobx-react';
import GridBlock from './GridBlock';

const GridColumn = ({store}) => {
  const { column } = store;
  return (
    <div className="GridColumn">
      {column.map((block, index)=> <GridBlock
        val={block}
        clickAction={store.clickBlock.bind(store, index)}
      />)}
    </div>
  );
};

GridColumn.propTypes = {
  store: PropTypes.object,
};

export default observer(GridColumn);
