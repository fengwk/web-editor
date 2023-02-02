import VirtualView from "./virtualview.js";
import BlockFactory from "./blockfactory.js";
import EditContext from "./editcontext.js";

// web编辑器
export default class WebEditor {

  constructor() {
    this.virtualview = new VirtualView();
    this.blockFactory = new BlockFactory();
    this.editQueue = [];
    this.undoStack = [];
    this.redoStack = [];
  }

  // 接收编辑命令
  // 每个编辑命令应该是EditCommand的子类
  edit(command) {
    this.editQueue.push(command);
    this.processEdit();
  }

  // 撤销命令
  undo() {
    const command = this.undoStack.pop();
    command.undo(this.genContext());
    this.redoStack.push(command);
  }

  // 重做命令
  redo() {
    const command = this.redoStack.pop();
    command.redo(this.genContext());
    this.undoStack.push(command);
  }

  // 处理编辑队列中命令
  processEdit() {
    const command = this.editQueue.shift();
    command.edit(this.genContext());
    this.undoStack.push(command);
    this.redoStack = [];
  }

  genContext() {
    return new EditContext(this.virtualview, this.blockFactory);
  }

  render() {
    // 简单渲染，实际项目中此处会将blocks渲染为dom节点
    this.virtualview.render((blocks) => {
      console.log(JSON.stringify(blocks));
    });
  }

}
