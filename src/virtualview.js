// 虚拟视图，用于存储渲染的模型
export default class VirtualView {

  constructor() {
    this.blocks = [];
  }

  getBlockFactory() {
    return this.blockfactory;
  }

  addBlock(block) {
    this.blocks.push(block);
  }

  removeBlock(block) {
    for (let i = 0; i < this.blocks.length; i++) {
      if (block === this.blocks[i]) {
        this.blocks.splice(i, 1);
      }
    }
  }

  render(renderFunc) {
    renderFunc(this.blocks);
  }

}
