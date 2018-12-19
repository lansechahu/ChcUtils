# ChcUtils - 我自己的前端常用函数库（持续扩充中。。。）

## 安装
#### NPM Install
`npm install --save-dev chcutils`

ES6导入<br>
`import * as Chcutils from 'chcutils';`

#### 直接引入
`<script src="*/ChcUtils.min.js"></script>`

## [Demo](https://lansechahu.github.io/ChcUtils/)
```
var mathutil = new Chcutils.MathUtil();
var dis = mathutil.getDistance({x: 10, y: 10}, {x: 100, y: 100});
console.log(dis);
```

## 函数

#### MathUtil
* **getCirclePosition(__angle, __radius, __center)**<br>
     * 计算圆上一点的坐标，可做成画圆效果
     * @param {number} [__angle] 要获取位置的角度
     * @param {object} [__radius] 要获取位置的圆的半径，{x:xx,y:yy}，两个值不一样的时候就是画椭圆
     * @param {object} [__center] 要获取位置的圆的中心点，默认为{x:0,y:0}
     * @returns {object} 生成的坐标
