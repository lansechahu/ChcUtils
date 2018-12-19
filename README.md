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
<br>

* **getAngle(start, end)**<br>
     * 返回起点到终点的角度，以Y轴为中心，从上右下左是0,90,180,270,360
     * @param {object} [start] 起点
     * @param {object} [end] 终点
<br>

* **cutStr(value)**<br>
     * 每隔三位数加一个逗号
     * @param {string/number} [value] 要转换的值
<br>

* **getEllipseRandomPoint(radiusX, radiusY)**<br>
     * 获取椭圆内随机一点
     * @param {number} radiusX 椭圆X轴半径
     * @param {number} radiusY 椭圆Y轴半径
     * @param {object} 随机点
<br>

* **gcd(num1, num2)**<br>
     * 求两个数的最大公约数
<br>

* **lcm(num1, num2)**<br>
     * 求两个数的最小公倍数
<br>

* **getPro(__arr)**<br>
     * 根据数组里的概率元素，生成新的概率数组
     * @例：var a=[0.5,0.1,0.2,0.2]; 就是50%个0，10%个1，20%个2，20%个3，生成的数组就是[0,0,0,0,0,1,2,2,3,3]
     * 注：数组元素的和不要大于1，做概率相关的程序时可以用到它
     * 因为用到了最小公倍数函数，所以就把它放到数学类里了，而没放到数组类里
<br>

* **randomInteger(low, high, __zero)**<br>
     * 范围内随机取整,__zero：是否排除0，true是排除，false是不排除，默认为false
<br>

* **randomFloat(low, high, __zero)**<br>
     * 范围内随机取小数
<br>

* **getFloat(number, n)**<br>
     * 数字四舍五入（保留n位小数）
     * @param {number} [number] 要四舍五入的数字
     * @param {number} [n] 保留的位数
<br>

* **getNumToArray(number)**<br>
     * 将数字转成数组
<br>

* **getData(str)**<br>
     * 获取想要的时间
     * @param {string} str s1一秒 h1一小时 d1一天
     * @return {number} 当前时间+str的时间
     * 例：getData('d2');  //返回当前日期后的两天，比如当前是14号，它返回的就是16号
<br>

* **getMoneyCapital(n)**<br>
     * 获取金额中文大写
     * @param {number} [n] 金额数字
     * 例：getMoneyCapital(1682);  //"人民币壹仟陆佰捌拾贰元整"
     * 例：getMoneyCapital(-1693); //"欠人民币壹仟陆佰玖拾叁元整"
<br>