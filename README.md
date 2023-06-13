# watermark/vue2-component —— 水印

[简体中文](readme/README-zh-cn.md) | English

## 描述

Vue 2 component wrapper for the watermark plugin.

## 开始使用

安装依赖包

```bash
npm i @cailiao/watermark-vue2-component
```

#### 导入

```javascript
import Component from '@cailiao/watermark-vue2-component'
```

#### 使用

```javascript
Vue.component('Watermark', Component)
```


## Documentation

The component parameters are the same as the parameters in [watermark](https://github.com/Eleg-i/watermark).

#### Props

| Props Name | Optional | Type           | Description                        |
| ---------- | ------ | -------------- | --------------------------- |
| className  | Optional   | String         | Container class name, default is "watermark". |
| content    | Optional   | String         | Watermark text.                    |
| font       | Optional   | Object         | Font-related configuration.            |
| gap        | Optional   | Number         | Watermark column spacing.                 |
| image      | Optional   | String         | Watermark image.                    |
| lineHeight | Optional   | String\|Number | Text line height.                  |
| offset     | Optional   | Array<Number>  | Watermark row offset.           |
| rotate     | Optional   | Number         | Watermark rotation angle.         |
| zIndex     | Optional   | Number         | Watermark positioning z-index.        |

