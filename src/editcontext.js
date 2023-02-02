export default class EditContext {

  constructor(virtualView, blockFactory) {
    this.virtualView = virtualView;
    this.blockFactory = blockFactory;
  }

  getVirtualView() {
    return this.virtualView;
  }

  getBlockFactory() {
    return this.blockFactory;
  }

}
