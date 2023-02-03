import LoginStore from './LoginStore';
import WalkthroughStore from './WalkthroughStore';

class RootStore {
  constructor() {
    this.loginStore = new LoginStore(this);
    this.walkThroughStore = new WalkthroughStore(this);
  }
}

export default new RootStore();
