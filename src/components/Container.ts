class Container extends HTMLElement {

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const container = document.createElement('div')
    const slot = document.createElement('slot')
    container.className = 'container'
    container.style.cssText = `
      margin-bottom: 12px;
      padding: 16px; 
      border: 6px solid rgb(214, 211, 211);
    `
    container.appendChild(slot)
    shadow.appendChild(container)
  }

}

export default Container