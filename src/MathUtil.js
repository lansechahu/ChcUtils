/*
数学相关类
 */
export default class MathUtil {
	/**
     * 判断是否是数字，是返回true，否返回false
     * @param {string/Number...} [obj] 要被判断的对象
     * @returns {Boolean} 是数字就返回true，不是数字就返回false
     * */
	isNumber(__obj) {
	    var reg = /^[0-9]+.?[0-9]*$/;
	    if (reg.test(__obj)) {
	        return true;
	    }
	    return false;
	}
    /**
     * 计算圆上一点的坐标，可做成画圆效果
     * @param {number} [__angle] 要获取位置的角度
     * @param {object} [__radius] 要获取位置的圆的半径，{x:xx,y:yy}，两个值不一样的时候就是画椭圆
     * @param {object} [__center] 要获取位置的圆的中心点，默认为{x:0,y:0}
     * @returns {object} 生成的坐标
     * */
    getCirclePosition(__angle, __radius, __center) {
        let angle = __angle;
        let radius = __radius;
        let center = __center || {x: 0, y: 0};

        var targetX = center.x + Math.cos(angle * Math.PI / 180) * radius.x;
        var targetY = center.y + Math.sin(angle * Math.PI / 180) * radius.y;

        return {x: targetX, y: targetY};
    }

    /**
     * 计算两点间距离
     * @param {object} [p1] 点1
     * @param {object} [p2] 点2
     * */
    getDistance(p1, p2) {
        let a = p2.x - p1.x;
        let b = p2.y - p1.y;
        let n = Math.sqrt(a * a + b * b);
        return n;
    }

    /**
     * 计算两点间直线任意点的坐标，p1 p2为直线的两个端点，_x和_y为要求的坐标点中的一个坐标，求另一个
     * @param {object} [p1] 点1
     * @param {object} [p2] 点2
     * @param {number} [_x] 要求的点的x坐标，求x坐标的话，该参数填null
     * @param {number} [_y] 要求的点的y坐标，求x坐标的话，该参数填null
     * */
    getOnLineXY(p1, p2, _x, _y) {
        let k = (p2.y - p1.y) / (p2.x - p1.x);
        let b = p1.y - k * (p1.x);
        if (_x == null) {
            _x = (_y - b) / k;
        } else if (_y == null) {
            _y = k * _x + b;
        }
        let p = {
            x: _x,
            y: _y
        };
        return p;
    }

    /**
     * 计算两点间直线中心点坐标
     * @param {object} [p1] 点1
     * @param {object} [p2] 点2
     * */
    getOnLineCenter(p1, p2) {
        let xx = (p1.x + p2.x) / 2;
        let yy = (p1.y + p1.y) / 2;
        let p = {
            x: xx,
            y: yy
        };
        return p;
    }

    /**
     * 返回起点到终点的角度，以Y轴为中心，从上右下左是0,90,180,270,360
     * @param {object} [start] 起点
     * @param {object} [end] 终点
     * */
    getAngle(start, end) {
        let x = Math.abs(start.x - end.x);
        let y = Math.abs(start.y - end.y);
        let z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        let cos = y / z;
        let radina = Math.acos(cos); //用反三角函数求弧度
        let angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度

        if (end.x > start.x && end.y > start.y) { //鼠标在第四象限
            angle = 180 - angle;
        }

        if (end.x == start.x && end.y > start.y) { //鼠标在y轴负方向上
            angle = 180;
        }

        if (end.x > start.x && end.y == start.y) { //鼠标在x轴正方向上
            angle = 90;
        }

        if (end.x < start.x && end.y > start.y) { //鼠标在第三象限
            angle = 180 + angle;
        }

        if (end.x < start.x && end.y == start.y) { //鼠标在x轴负方向
            angle = 270;
        }

        if (end.x < start.x && end.y < start.y) { //鼠标在第二象限
            angle = 360 - angle;
        }

        //返回角度,不是弧度
        return angle;
    }

    /**
     * 每隔三位数加一个逗号
     * @param {string/number} [value] 要转换的值
     * */
    cutStr(value) {
        let temp = parseFloat(value).toLocaleString();
        return temp;
    }

    /**
     * 获取椭圆内随机一点
     * @param {number} radiusX 椭圆X轴半径
     * @param {number} radiusY 椭圆Y轴半径
     * @param {object} 随机点
     * */
    getEllipseRandomPoint(radiusX, radiusY) {
        let angle = (Math.random() * 360);
        //正弦函数图像特点 x∈[0,2π] 5点观察值[0,1, 0,-1,0]
        //余弦函数图像特点 x∈[0,2π] 5点观察值[1,0,-1, 0,1]
        return {
            x: Math.sin(Math.PI / 180 * angle) * (Math.random() * randiusX),
            y: Math.cos(Math.PI / 180 * angle) * (Math.random() * randiusY)
        }
    }

    /**
     * 计算斐波那契数列 递归
     */
    fbnq(n) {
        if (n == 1 || n == 2) {
            return 1;
        }
        return this.fbnq(n - 1) + this.fbnq(n - 2);
    }

    /**
     * 计算斐波那契数列 非递归
     */
    fbnq2(n) {
        let a, b, res;
        a = b = 1;
        for (let i = 3; i <= n; i++) {
            res = a + b;
            a = b;
            b = res;
        }
        return res;
    }

    /**
     * 求两个数的最大公约数
     */
    gcd(num1, num2) {
        if (num1 % num2 == 0) {
            return num2;
        } else {
            return this.gcd(num2, num1 % num2);
        }
    }

    /**
     * 求两个数的最小公倍数
     */
    lcm(num1, num2) {
        let num = num1 * num2 / this.gcd(num1, num2);
        return num;
    }

    /**
     * 根据数组里的概率元素，生成新的概率数组
     * @例：var a=[0.5,0.1,0.2,0.2]; 就是50%个0，10%个1，20%个2，20%个3，生成的数组就是[0,0,0,0,0,1,2,2,3,3]
     * 注：数组元素的和不要大于1，做概率相关的程序时可以用到它
     * 因为用到了最小公倍数函数，所以就把它放到数学类里了，而没放到数组类里
     * */
    getPro(__arr) {
        let p = __arr;
        let L = getLCM(p); //获取最小公倍数

        let A = [];
        let l = 0;
        for (let i = 0; i < p.length; i++) {
            let k = L * p[i] + l;
            while (l < k) {
                A[l] = i;
                l++;
            }
        }

        function getLCM(__p) {
            let n = 1;
            for (let i = 0; i < p.length; i++) {
                n = this.lcm(n, 1 / p[i]);
            }
            return n;
        }

        return A;
    }

    /*
     * 范围内随机取整,__zero：是否排除0，true是排除，false是不排除，默认为false
     * */
    randomInteger(low, high, __zero) {
        let zero = __zero || false;
        let nMath = low + Math.floor(Math.random() * (high - low));
        if (zero == true) {
            while (nMath == 0) {
                nMath = low + Math.floor(Math.random() * (high - low));
            }
        }
        return nMath;
    }

    /*
     * 范围内随机取小数
     * */
    randomFloat(low, high, __zero) {
        let zero = __zero || false;
        let nMath = low + (Math.random() * (high - low));
        if (zero == true) {
            while (nMath == 0) {
                nMath = low + (Math.random() * (high - low));
            }
        }
        return nMath;
    }

    /**
     * 数字四舍五入（保留n位小数）
     * @param {number} [number] 要四舍五入的数字
     * @param {number} [n] 保留的位数
     * */
    getFloat(number, n) {
        n = n ? parseInt(n) : 0;
        if (n <= 0) return Math.round(number);
        number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
        return number;
    }

    /*
     * 将数字转成数组
     * */
    getNumToArray(number) {
        let aa;
        if (number < 10) {
            aa = '0' + number;
        } else {
            aa = number.toString();
        }

        let arr = aa.split("");
        return arr;
    }


    /**
     * 获取想要的时间
     * @param {string} str s1一秒 h1一小时 d1一天
     * @return {number} 当前时间+str的时间
     * 例：getData('d2');  //返回当前日期后的两天，比如当前是14号，它返回的就是16号
     * */
    getData(str) {
        let str1 = str.substring(0, 1);
        let str2 = str.substring(1, str.length) * 1;
        let time = 0;
        if (str1 == 's') {
            time = str2 * 1000;
        } else if (str1 == 'h') {
            time = str2 * 60 * 60 * 1000;
        } else if (str1 == 'd') {
            time = str2 * 24 * 60 * 60 * 1000;
        }
        let data = new Date();
        data.setTime(data.valueOf() + time);
        return data;
    }

    /**
     * 获取金额中文大写
     * @param {number} [n] 金额数字
     * 例：getMoneyCapital(1682);  //"人民币壹仟陆佰捌拾贰元整"
     * 例：getMoneyCapital(-1693); //"欠人民币壹仟陆佰玖拾叁元整"
     * */
    getMoneyCapital(n) {
        let fraction = ['角', '分', '厘'];
        let digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        let unit = [
            ['元', '万', '亿'],
            ['', '拾', '佰', '仟']
        ];
        let head = n < 0 ? '欠人民币' : '人民币';
        n = Math.abs(n);
        let s = '';
        for (let i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (let i = 0; i < unit[0].length && n > 0; i++) {
            let p = '';
            for (let j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
            //s = p + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
    }
}
