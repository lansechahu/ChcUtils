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

### * MathUtil
* **getCirclePosition(__angle, __radius, __center)**<br>
     * 计算圆上一点的坐标，可做成画圆效果
     * @param {number} [__angle] 要获取位置的角度
     * @param {object} [__radius] 要获取位置的圆的半径，{x:xx,y:yy}，两个值不一样的时候就是画椭圆
     * @param {object} [__center] 要获取位置的圆的中心点，默认为{x:0,y:0}
     * @returns {object} 生成的坐标
<br>

* **getDistance(p1, p2)**<br>
     * 计算两点间距离
     * @param {object} [p1] 点1
     * @param {object} [p2] 点2
<br>

* **getOnLineXY(p1, p2, _x, _y)**<br>
     * 计算两点间直线任意点的坐标，p1 p2为直线的两个端点，_x和_y为要求的坐标点中的一个坐标，求另一个
     * @param {object} [p1] 点1
     * @param {object} [p2] 点2
     * @param {number} [_x] 要求的点的x坐标，求x坐标的话，该参数填null
     * @param {number} [_y] 要求的点的y坐标，求x坐标的话，该参数填null
<br>

* **getOnLineCenter(p1, p2)**<br>
     * 计算两点间直线中心点坐标
     * @param {object} [p1] 点1
     * @param {object} [p2] 点2
