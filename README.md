# come-svg [WIP]

A simple SVG component for Vue & React

## Start

安装：`npm install -S come-svg`

### 在 Vue 中使用

使用自定义的图标列表：

```jsx
import createSvgIcon from "come-svg/src/for-vue-jsx"

const icons = [ /* custom icons list */]
app.component('svg-icon', createSvgIcon(icons))
```

或，使用默认的图标列表：

```js
import SvgIcon from "./SvgIcon/for-vue.vue"

app.component('svg-icon', SvgIcon)
```

在需要使用时，这样用：

```html
<svg-icon icon="search" color="#888" width="20px"/>
```

由于组件源码并未进行编译打包，即仍保持 SFC/JSX 的原始格式。
因此，需要将 `node_modules/come-svg` 放入编译列表中。请在vue.config.js 添加：

```js
module.exports = {
  transpileDependencies: ['come-svg']
}
```

### 在 React 中使用

[ ] todo
