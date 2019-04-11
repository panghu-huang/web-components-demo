class Header extends HTMLElement {

  public static get observedAttributes() {
    return [
      'title',
    ]
  }

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const h2 = document.createElement('h2')
    const homeLink = document.createElement('a')
    homeLink.href = '/index.html'
    homeLink.textContent = 'Home'

    const othersLink = document.createElement('a')
    othersLink.href = '/others.html'
    othersLink.textContent = 'Others'
    
    const linkWrapper = document.createElement('div')
    linkWrapper.className = 'link-wrapper'
    linkWrapper.appendChild(homeLink)
    linkWrapper.appendChild(othersLink)
    const style = this.createStyles()
    shadow.appendChild(style)
    shadow.appendChild(h2)
    shadow.appendChild(linkWrapper)
  }

  public attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const shadowRoot = this.shadowRoot
    if (name === 'title') {
      const h2 = shadowRoot.querySelector('h2')
      h2.textContent = newValue
    }
  }

  private createStyles() {
    const style = document.createElement('style')
    style.textContent = `
      :host {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 54px;
        box-shadow: 0 0 4px grey;
        padding: 0 12px;
      }
      h2 {
        margin: 0;
      }
      a {
        margin-left: 14px;
      }
    `
    return style
  }

}

export default Header