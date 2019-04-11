class UseTemplate extends HTMLElement {

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const template = document.getElementById('use-template') as HTMLTemplateElement
    shadow.appendChild(
      template.content.cloneNode(true)
    )
  }

}

export default UseTemplate