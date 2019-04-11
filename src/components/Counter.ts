class Counter extends HTMLElement {

  public static get observedAttributes() {
    return [
      'initial-value'
    ]
  }

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const increaser = document.createElement('button')
    const decreaser = document.createElement('button')
    const value = document.createElement('span')
    increaser.textContent = '+'
    decreaser.textContent = '-'
    increaser.addEventListener('click', () => {
      const number = +value.textContent || 0
      value.textContent = String(number + 1)
    })
    decreaser.addEventListener('click', () => {
      const number = +value.textContent || 0
      value.textContent = String(number - 1)
    })
    const style = this.createStyles()
    shadow.appendChild(style)
    shadow.appendChild(decreaser)
    shadow.appendChild(value)
    shadow.appendChild(increaser)
  }

  public attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const shadowRoot = this.shadowRoot
    if (name === 'initial-value') {
      const value = shadowRoot.querySelector('span')
      value.textContent = String(+newValue || 0)
    }
  }

  private createStyles() {
    const style = document.createElement('style')
    style.textContent = `
      :host {
        display: flex;
        height: 100px;
        justify-content: center;
        align-items: center;
      }

      span {
        width: 200px;
        font-size: 16px;
        text-align: center;
      }

      button {
        border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
        border-style: solid;
        border-width: 1px;
        padding: 1px 7px 2px;
      }
    `
    return style
  }

}

export default Counter