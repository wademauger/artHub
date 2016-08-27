import { observable, computed } from 'mobx';
import {autorun} from 'mobx';

class Store {

  constructor() {
    autorun(() => console.warn('state: ', JSON.stringify(this)));
  }

  @observable description = 'Hello World!';
  @observable numClicks = 0;

  @computed get oddOrEven() {
    return this.numClicks % 2 === 0 ? 'even' : 'odd';
  }

  clickButton = () => {
    this.numClicks++;
  }

}

export default Store;
