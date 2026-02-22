export class History {
  constructor() {
    this.undoStack = [];
    this.redoStack = [];
  }

  execute(action) {
    this.undoStack.push(action);
    this.redoStack = [];
  }

  undo(objects) {
    if (!this.undoStack.length) return;
    const action = this.undoStack.pop();
    action.undo(objects);
    this.redoStack.push(action);
  }

  redo(objects) {
    if (!this.redoStack.length) return;
    const action = this.redoStack.pop();
    action.redo(objects);
    this.undoStack.push(action);
  }
}
