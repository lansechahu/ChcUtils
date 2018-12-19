# ChcUtils - 我自己的前端常用函数库（持续扩充中。。。）

## 安装
#### NPM Install
`npm install --save-dev chcutils`

ES6导入<br>
`import * as Chcutils from 'chcutils';`

#### 直接引入
`<script src="*/ChcUtils.min.js"></script>`

## [Demo](https://lansechahu.github.io/ChcUtils/)
`
var mathutil = new Chcutils.MathUtil();
var dis = mathutil.getDistance({x: 10, y: 10}, {x: 100, y: 100});
console.log(dis);
`