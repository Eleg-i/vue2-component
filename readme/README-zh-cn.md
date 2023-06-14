# watermark/vue2-component —— 水印

简体中文 | [English](../README.md)

## 描述

watermark 插件的 vue2 组件封装。

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


## 说明

组件参数同详见 [watermark](https://github.com/Eleg-i/watermark) 的参数

#### Props

| Props 名称 | 可选性 | 类型           | 描述                        |
| ---------- | ------ | -------------- | --------------------------- |
| className  | 可选   | String         | 容器类名，默认为 watermark. |
| content    | 可选   | String         | 水印文本                    |
| disabled   | 可选   | Boolean        | 是否禁用水印，默认为 false.  |
| font       | 可选   | Object         | 字体相关配置                |
| gap        | 可选   | Number         | 水印列间距                  |
| image      | 可选   | String         | 水印图片                    |
| lineHeight | 可选   | String\|Number | 文本行高                    |
| offset     | 可选   | Array\<Number\>  | 水印行偏移                  |
| rotate     | 可选   | Number         | 水印旋转角度                |
| zIndex     | 可选   | Number         | 水印定位叠层                |



