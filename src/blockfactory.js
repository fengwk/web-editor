class Block {

}

class Text extends Block {

  constructor(text) {
    super();
    this.text = text;
  }

}

class Img extends Block {
  
  constructor(imgUrl, width, height) {
    super();
    this.imgUrl = imgUrl;
    this.width = width;
    this.height = height;
  }

}

export default class BlockFactory {

  createText(text) {
    return new Text(text);
  }

  createImg(imgUrl, width, height) {
    return new Img(imgUrl, width, height);
  }

}
