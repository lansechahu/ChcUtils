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

### * StringUtil
* **trim(str, type)**<br>
     * 去除空格
     * @param str [string] 要处理的字符串
     * @param type [number] 怎么处理，1-所有空格 2-前后空格 3-前空格 4-后空格
     * @returns {string}
<br>

* **isEmpty(str)**<br>
     * 判断是否为空字符
     * @param str [string] 要判断的字符串
     * @returns {boolean} 返回true是空的，false是非空的
<br>

* **insert_flg(str, flg, sn)**<br>
     * 在指定地方插入字符
     * @param str [string] 要处理的字符串
     * @param flg [string] 要插入的字符串
     * @param sn [number] 要插入的位置
     * @returns {string}
     * 例：
     ```var aa = 'abcd';
        stringUtil.insert_flg(aa, '123', 2); //ab123cd```
<br>

* **del_flg(str, sn, len)**<br>
     * 删除指定地方的字符
     * @param str [string] 要处理的字符串
     * @param sn [number] 要删除的位置，从1开始
     * @param len [number] 删除字符串的长度，默认为1
     * @returns {string}
<br>

* **randomString(len)**<br>
     * 随机A-Z|a-z|0-9 中的随机组合
     * @param len {number} 随机组合的长度
     * @returns {string}
<br>

* **strReplace(str, a, b, mm)**<br>
     * 将字符串中的指定字符替换成另一个字符
     * @param str [string] 要处理的字符串
     * @param a [string] 要替换的字符串
     * @param b [string] 要替换成的字符串
     * @param mm [string] 匹配模式：g-全局匹配  i-区分大小写  m-多行匹配
     * @returns {string}
<br>

* **changeCase(str, type)**<br>
     * 字母大小写转换
     * @param str [string] 要处理的字符串
     * @param type [number] 转换类型： 1-首字母大写  2-首字母小写  3-大小写转换  4-全部大写  5-全部小写
     * @returns {*}
<br>

* **encryptStr(str, regArr, type, ARepText)**<br>
     * 字符替换*
     * @param str [string] 要处理的字符串
     * @param regArr [array] 字符格式，例：[3,5,3] 生成的字符就是***12345***
     * @param type [number] 替换方式  0-替换中间N个或前面N个字符  1-替换两边N个或后面N个字符
     * @param ARepText [string] 替换的字符，默认是*
     * @returns {string}
<br>

* **longestWord(str, splitType)**<br>
     * 找出最长单词
     * @param str [string] 要处理的字符串
     * @param splitType [string] 单词之间的间隔符号，可不填
     * @returns {{el: string, max: number}} el-最长的单词  max-最长单词的长度
     * 例：
     ```longestWord('Find the Longest word in a String'); {el:'Longest',max:7}
        longestWord('Find|the|Longest|word|in|a|String','|'); {el:'Longest',max:7}```
<br>

* **titleCaseUp(str, splitType)**<br>
     * 句中单词首字母大写
     * @param str [string] 要处理的字符串
     * @param splitType [string] 单词之间的间隔符号，可不填
     * @returns {string}
<br>

* **formatNumber(n)**<br>
     * 给数字前面加0
     * @param n [number] 要处理的数字，如果小于10，则前面加0
     * @returns {string}
<br>

* **formatTime(date)**<br>
     * 获取格式化的日期
     * @param date [date] 要处理的日期
     * @returns {string}
     * 例：
     ```
     var mydate = new Date();
     var str = stringUtil.formatTime(mydate);  2018/12/14 17:45:25
     ```
<br>