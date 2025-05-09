class Controls {
  constructor() {
    this.forward = false;
    this.reverse = false;
    this.left = false;
    this.right = false;

    this.#addKeyboardListeners();
  }
  #addKeyboardListeners() {
    document.onkeydown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
      }
    };

    document.onkeyup = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.left = false;
          console.log(e.key)
          break;
        case "ArrowRight":
          this.right = false;
          console.log(e.key);
          break;
        case "ArrowUp":
          this.forward = false;
          console.log(e.key);
          break;
        case "ArrowDown":
          this.reverse = false;
          console.log(e.key);
          break;
      }
    };
  }
}
