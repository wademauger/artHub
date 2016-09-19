import { observable } from 'mobx';
import {autorun} from 'mobx';

class Store {

  constructor() {
    autorun(() => console.warn('state: ', JSON.stringify(this)));
  }

  columns = [
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  observable([false, false, false, false, false, false, false]),
  ];

  clickBlock = (outerIndex, innerIndex) => {
    this.columns[outerIndex][innerIndex] = !this.columns[outerIndex][innerIndex];
  }

}

export default Store;
