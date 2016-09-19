// @flow

import React, {PropTypes} from 'react';
import { observer } from 'mobx-react';

const GridBlock = (store) => {
  const {clickAction, val} = store;
  return (
    <div
      className={`GridBlock ${val ? 'blockOn' : 'blockOff'}`}
      onClick={clickAction}
    >
    </div>
  );
};

GridBlock.propTypes = {
  store: PropTypes.object,
};

export default observer(GridBlock);
