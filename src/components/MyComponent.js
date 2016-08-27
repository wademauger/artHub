// @flow

import React, {PropTypes} from 'react';
import { observer } from 'mobx-react';

const MyComponent = ({store}) => {
  const {clickButton, numClicks, oddOrEven} = store;
  return (
    <div className="MyComponent">
      <button
        onClick={clickButton}
        type="button"
      >
        Click me!
      </button>
      <h4>You've clicked the button {numClicks} times!</h4>
      <h5>You've clicked button an {oddOrEven} number of times.</h5>
    </div>
  );
};

MyComponent.propTypes = {
  store: PropTypes.object,
};

export default observer(MyComponent);
