import { InsertTextCommand } from "./commands";
import WebEditor from "./webeditor";

// 创建web编辑器对象
const webEditor = new WebEditor();

// 模拟用户输入"hello word web editor"的场景
webEditor.edit(new InsertTextCommand("hello"));
webEditor.edit(new InsertTextCommand(" "));
webEditor.edit(new InsertTextCommand("world"));
webEditor.edit(new InsertTextCommand(" "));
webEditor.edit(new InsertTextCommand("web"));
webEditor.edit(new InsertTextCommand(" "));
webEditor.edit(new InsertTextCommand("editor"));
webEditor.render();

// 模拟撤销
webEditor.undo();
webEditor.undo();
webEditor.undo();
webEditor.undo();
webEditor.undo();
webEditor.undo();
webEditor.render();

webEditor.redo();
webEditor.redo();
webEditor.render();

webEditor.edit(new InsertTextCommand("!"));
webEditor.render();
