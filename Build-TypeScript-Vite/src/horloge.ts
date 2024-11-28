export class Horloge {
  private _container!: HTMLElement;

  constructor(container: HTMLElement) {
    this._container = container;
  }

  _render() {
    const now = new Date();
    this._container.innerText = now.toLocaleTimeString();
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), 2000);
  }
}
