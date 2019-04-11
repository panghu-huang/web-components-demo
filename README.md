# Web Components

(https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)[https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements]

## Slot

和 Vue 类似

## 注意点

> 没有利用 customElements.define 定义，直接在页面上使用，`不会报错`

```html
<undefined-element></undefined-element>
```

> 直接闭合写法

```html
<text-component />
<app-counter initial-number='3'>s</app-counter>
```

上面这种写法，在浏览器中会变成

```html
<text-component>
  <app-counter initial-number='3'>s</app-counter>
</text-component>
```

> 全局的样式不能作用到自定义的 element 当中

> 如果 customElements.define 的时候，添加了 `extends` 选项，只有利用 is='element-name' 才有效

> style 中，可利用 `:host` 选择组件根元素, 添加 `display` 属性后才会显示

```css
:host {
    display: block; // 重点
    width: 100%;
    height: 100px;
    border: 1px solid black;
    background-color: blue;
}
```

> 组件属性初始化，可以在 `constructor` 里面利用 `this.getAttribute()` 获取值（script 在 标签后面） 
但是如果监听了这个属性的变化，依然会在 `constructor` 走 `attributeChangedCallback`, `connectedCallback` 之前