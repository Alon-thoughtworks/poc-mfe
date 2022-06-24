import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('count-listener')
export class CountListener extends LitElement {

  override render() {
    return html`
      <div>
        <p @countchanged=${this._countChangedListener}><slot></slot></p>
      </div>
    `;
  }

  private _countChangedListener(e: CustomEvent) {
    console.log('-----> Hi', e);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'count-listener': CountListener;
  }
}
