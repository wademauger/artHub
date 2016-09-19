import { observable, computed } from 'mobx';
import {autorun} from 'mobx';

class Store {

  constructor() {
    autorun(() => console.warn('state: ', JSON.stringify(this)));
  }

  @observable column = [false, false, false, false, false, false, false];

  @computed get oddOrEven() {
    return this.numClicks % 2 === 0 ? 'even' : 'odd';
  }
  
  clickBlock = (index) => {
    this.column[index] = !this.column[index];
  }

}

export default Store;
