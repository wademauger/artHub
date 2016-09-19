// @flow
import React, {PropTypes} from 'react';
import { observer } from 'mobx-react';
import GridBlock from './GridBlock';

const GridColumn = ({store, index}) => {
  const { columns } = store;
  return (
    <div className="GridColumn">
      {columns[index].map((block, innerIndex) =>
        <GridBlock
          clickAction={store.clickBlock.bind(store, index, innerIndex)}
          val={block}
        />
      )}
    </div>
  );
};

GridColumn.propTypes = {
  index: PropTypes.number,
  store: PropTypes.object,
};

export default observer(GridColumn);
