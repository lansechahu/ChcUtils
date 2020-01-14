# ChcUtils - 我自己的前端常用函数库（持续扩充中。。。）

## 安装
#### NPM Install
`npm install --save-dev chcutils`

ES6导入<br>
`import * as ChcUtils from 'chcutils';`
```
var mathutil = new ChcUtils.MathUtil();
var dis = mathutil.getDistance({x: 10, y: 10}, {x: 100, y: 100});
console.log(dis);
```

#### 直接引入
`<script src="*/ChcUtils.min.js"></script>`
```
var mathutil = new ChcUtils.MathUtil();
var dis = mathutil.getDistance({x: 10, y: 10}, {x: 100, y: 100});
console.log(dis);
```

## [Demo](https://lansechahu.github.io/ChcUtils/)


## 函数

[MathUtil](#-MathUtil)
<br>
[StringUtil](#-StringUtil)
<br>
[ArrayUtil](#-ArrayUtil)
<br>
[FormUtil](#-FormUtil)
<br>
[OsUtil](#-OsUtil)
<br>
[ObjUtil](#-ObjUtil)

### * **MathUtil**
* **isNumber(__obj)**<br>
     * 判断是否是数字，是返回true，否返回false
     * @param {string/Number...} [__obj] 要被判断的对象
     * @returns {Boolean} 是数字就返回true，不是数字就返回false
<br>

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

### * **StringUtil**
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
     ```
     var aa = 'abcd';
     stringUtil.insert_flg(aa, '123', 2); //ab123cd
     ```
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
     ```
     longestWord('Find the Longest word in a String'); {el:'Longest',max:7}
     longestWord('Find|the|Longest|word|in|a|String','|'); {el:'Longest',max:7}
     ```
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
     * @param __num [number] 在第几位补0，2：是十位，3：是百位
     * @returns {string}
<br>

* **formatDate(fmt,date)**<br>
     * 获取格式化的日期
     * @param fmt [string] 格式规范，如 "yyyy-MM-dd hh:mm"
	 * @param date [date] 要处理的日期
	 * @returns {string}
     * 例：
     ```
     var mydate = new Date();
     var str = stringUtil.formatDate("yyyy-MM-dd hh:mm",mydate);  2018/12/14 17:45
     ```
<br>

* **getTimeDis(thisTime, targetTime, __showDay, __hours_num, __day_num)**<br>
     * 返回两个时间点的时间差
     * @param thisTime [string] 当前日期  格式：2019-04-01 00:00:00
     * @param targetTime [string] 目标日期 格式：2019-04-01 00:00:00
     * @param __showDay [boolean] 是否显示天数 默认false
     * @param __hours_num [number] 小时部分显示几位数
     * @param __day_num [number] 天数部分显示几位数
     * @returns {string}
     * 例：
     ```
     var test = stringUtil.getTimeDis("2019-04-01 04:00:50", "2019-04-05 04:01:00",true,3,3);
     console.log('disTime:' + test);  //disTime:004:00:00:010
     ```
<br>

* **isContainStr(_str1, _str2)**<br>
     * @param _str1 [string] 源字符串
	 * @param _str2 [string] 被寻找的字符串
	 * @returns {Boolean}
     * 例：
     ```
     var a='abcde';
	 var b='cde';
	 var c='cdh';
	 console.log(stringUtil.isContainStr(a,b)); //true
	 console.log(stringUtil.isContainStr(b,c)); //false
     ```
<br>

* **utf16toEntities(str)**<br>
     * 带表情的字符串转码，转码后就可以无障碍的存入数据库了
	 * @param str [string] 源字符串
	 * @returns {String}
<br>

* **entitiestoUtf16(str)**<br>
     * 带表情的字符串解码，从数据库取出字符串后解码后就可以正常显示的前端了
	 * @param str [string] 源字符串
	 * @returns {String}
<br>

### * **ArrayUtil**

* **shuffle(__arr)**<br>
     * 洗牌算法 打乱数组
     * @param __arr [array] 要处理的数组
     * @returns [array] 打乱的数组
<br>

* **clone(__arr)**<br>
     * 克隆出一个独立的数组
     * @param __arr [array] 要处理的数组
     * @returns [array] 生成的新数组
<br>

* **getExt(__arr, __num)**<br>
     * 随机抓取N个元素生成新数组，如果__num为0或不填，则返回原数组
     * @param __arr [array] 要处理的数组
     * @param __num [number] 抓取多少元素
     * @returns [array] 生成的新数组
<br>

* **getNumArr(__num)**<br>
     * 把传过来的数字从0开始转成数组，如：100，数组就是[0,1,2,...,99];
     * @param __num [number] 要处理的数
     * @returns [array] 生成的新数组
<br>

* **removeRepeatArray(arr)**<br>
     * 数组去重
     * @param arr [array] 要处理的数组
     * @returns {any[]} 返回新数组
<br>

* **maxArr(arr)**<br>
     * 数组最大值
     * @param arr [array] 要处理的数组
     * @returns {number} 返回数组最大值
<br>

* **minArr(arr)**<br>
     * 数组最小值
     * @param arr [array] 要处理的数组
     * @returns {number} 返回数组最小值
<br>

* **sumArr(arr)**<br>
     * 数组求和
     * @param arr
     * @returns {*}
<br>

* **covArr(arr)**<br>
     * 数组求平均值
     * @param arr
     * @returns {number}
<br>

* **getEleCount(obj, ele)**<br>
     * 返回数组或字符串里一个元素出现的次数
     * @param obj [string | array] 要处理的字符串或数组
     * @param ele 指定的元素
     * @returns {number}
<br>

* **getCount(arr, rank, ranktype)**<br>
     * 返回数组中出现最多的几次元素和出现次数
     * @param arr [array] 要处理的数组
     * @param rank [number] 长度，默认为数组长度
     * @param ranktype [number] 新生成数组的排序方式，默认降序 1-升序  非1-降序
     * @returns {array}  返回的数组元素为object：{el:元素,count:出现次数}
     * 例：
     ```
          getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2])
          result：[{"el":"2","count":6},{"el":"1","count":4},{"el":"3","count":2},{"el":"4","count":1},{"el":"5","count":1},{"el":"6","count":1}]
          默认情况，返回所有元素出现的次数

          getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],3)  传参（rank=3），只返回出现次数排序前三的
          result：[{"el":"2","count":6},{"el":"1","count":4},{"el":"3","count":2}]

          getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],null,1)  传参（ranktype=1,rank=null），升序返回所有元素出现次数
          result：[{"el":"6","count":1},{"el":"5","count":1},{"el":"4","count":1},{"el":"3","count":2},{"el":"1","count":4},{"el":"2","count":6}]

          getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],3,1)  传参（rank=3，ranktype=1），只返回出现次数排序（升序）前三的
          result：[{"el":"6","count":1},{"el":"5","count":1},{"el":"4","count":1}]
     ```
<br>

* **getArrayNum(arr, n1, n2)**<br>
     * 生成n1到n2的数组
     * @param arr [array] 要处理的数组
     * @param n1 要获取的起点元素
     * @param n2 要获取的终点元素
     * @returns [array]
     * 例：
     ```
          getArrayNum([0,1,2,3,4,5,6,7,8,9],5,9)
          result：[5, 6, 7, 8, 9]

          getArrayNum([0,1,2,3,4,5,6,7,8,9],2) 不传第二个参数,默认返回从n1到数组结束的元素
          result：[2, 3, 4, 5, 6, 7, 8, 9]
     ```
<br>

* **delArr(arr, obj, type)**<br>
     * 删除数组中指定的对象
	 * @param arr [array] 要处理的数组
	 * @param obj [string | number | object] 要删除的对象
	 * @param type [number] 删除方式：0-所有    1-第一个    2-最后一个，默认0
     * @returns [array]
     ```
<br>

* **changeBetween(__arr, __index1, __index2)**<br>
     * 交换数组中两个元素的位置
	 * @param __arr [array] 要处理的数组
	 * @param __index1 要交换的元素1号的索引号
	 * @param __index2 要交换的元素2号的索引号
	 * @returns [array]
     ```
<br>

* **changeFirst(__arr, __index)**<br>
     * 将某一个数组元素移到第一个
	 * @param __arr [array] 要处理的数组
	 * @param __index 提到第一个的元素的索引号
	 * @returns [array]
     ```
<br>

* **changeLast(__arr, __index)**<br>
     * 将某一个数组元素移到最后一个
	 * @param __arr [array] 要处理的数组
	 * @param __index 提到最后一个的元素的索引号
	 * @returns [array]
     ```
<br>

* **delEmpty(__arr)**<br>
     * 删除数组中的空值
	 * @param __arr [array] 要处理的数组
	 * @returns [array]
     ```
<br>

### * **FormUtil**

* **inputEmpty(str)**<br>
     * 判断输入框的内容是不是空的
     * @param str [string] 要判断的字符
     * @returns {boolean} 返回是否为空，如果是空的返回false，如果不是空的返回true
<br>

* **isPhone(str)**<br>
     * 判断是否为手机号码
     * @param str [string] 手机号字符串
     * @returns {boolean} 返回true是手机号，false不是手机号，忽略前后空格
<br>

* **isEmail(str)**<br>
     * 判断是否为email
     * @param str [string] 要处理的字符串
     * @returns {boolean} 返回true是邮箱，false不是邮箱，忽略前后空格
<br>

* **isID(str)**<br>
     * 判断身份证号
     * @param str [string] 身份证号
     * @returns {boolean} 返回true是身份证号，false不是身份证号，忽略前后空格
<br>

* **judgeForm(__arr)**<br>
     * 判断表单必要项是否完整
     * @param __arr [array] 表单项数组，每个数组元素是一个object
     * object的内容：{value:string,type:1}
     *              value [string]:要判断的值
     *              type [nubmer]:判断类型， 1-判断字符串是否为空   2-判断手机号   3-判断邮箱   4-判断身份证号
     *
     *  return [array] 返回一个数组，数组元素与源数组一样，多了一个属性judge，为true时是通过，为false时是有问题
<br>

### * OsUtil

* **pcQRCode(__url, __tip)**<br>
     * 判断是否是pc端，并且在pc端显示二维码提示移动端扫码观看
     * @param __url [string] 要转成二维码的地址，如果没有就取当前页面地址
     * @param __tip [string] 提示文字
     * @param __options [object] 提示页面的样式和结构，style:样式，wrapper:html代码
<br>

* **isPc()**<br>
     * 判断是否是pc端
     * @returns {boolean}
<br>

* **getSysInfo()**<br>
     * 获取终端设备信息
     * return {object} 返回一个对象，对象属性是设备的类型
<br>

* **setCookie(c_name, value, expiredays)**<br>
     * 存储cookie
     * @param c_name [string] 存储的名称
     * @param value [string] 存储的值
     * @param expiredays [number] 存储的时限（天）
<br>

* **getCookie(name)**<br>
     * 获取cookie存储的数据
     * @param name [string] 存储的名称
     * @returns {*} 有值的话返回值，没值的话返回null
<br>

* **delCookie(name)**<br>
     * 删除cookie
     * @param name [string] 要删除的cookie名称
<br>

* **getQueryString(name)**<br>
     * 获取URL中的参数
     * @param name [string] 参数名称
     * @returns {*}
<br>

* **preventTouch(class)**<br>
     * 阻止移动端下拉滑动的效果,并排除指定类,指定的类scroll效果保留
     * @param class [string] 指定排除的类名,默认为'myScroller'
<br>

### * ObjUtil

* **cloneObj(__obj)**<br>
     * 深复制对象
     * @param {Object} [__obj] 要被复制的对象
     * @returns {Object} 返回复制出来的新对象
<br>