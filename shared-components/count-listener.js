var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let CountListener = class CountListener extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    render() {
        return html `
      <div>Listened Count: ${this.count}</div>
      <div>
        <slot></slot>
      </div>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('count-changed', (e) => {
            this.count = e.detail.count;
        });
    }
};
__decorate([
    property({ type: Number })
], CountListener.prototype, "count", void 0);
CountListener = __decorate([
    customElement('count-listener')
], CountListener);
export { CountListener };
//# sourceMappingURL=count-listener.js.map