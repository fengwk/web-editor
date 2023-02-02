// 编辑器命令基类
class Command {

  edit(editContext) {
    if (this.block) {
      throw new Error("重复使用命令");
    }
    const block = this.genBlock(editContext);
    editContext.getVirtualView().addBlock(block);
    this.block = block;
  }

  undo(editContext) {
    editContext.getVirtualView().removeBlock(this.block);
  }

  redo(editContext) {
    editContext.getVirtualView().addBlock(this.block);
  }

  genBlock(editContext) {} // 由子类实现

}

// 插入文本命令
class InsertTextCommand extends Command {

  constructor(text) {
    super();
    this.text = text;
  }

  genBlock(editContext) {
    return editContext.getBlockFactory().createText(this.text);
  }

}

// 插入图片链接命令
class InsertImgUrlCommand extends Command {

  constructor(imgUrl, width, height) {
    super();
    this.imgUrl = imgUrl;
    this.width = width;
    this.height = height;
  }

  genBlock(editContext) {
    return editContext.getBlockFactory().createImg(this.text);
  }

}

export {
  InsertTextCommand,
  InsertImgUrlCommand
}
