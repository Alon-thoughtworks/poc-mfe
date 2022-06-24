import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('count-listener')
export class CountListener extends LitElement {
  @property({type: Number})
  count = 0;

  override render() {
    return html`
      <div>Listened Count: ${this.count}</div>
      <div>
        <slot></slot>
      </div>
    `;
  }

  override connectedCallback(){
    super.connectedCallback();
    this.addEventListener('count-changed', (e: any) => {
      this.count = e.detail.count;
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'count-listener': CountListener;
  }
}
