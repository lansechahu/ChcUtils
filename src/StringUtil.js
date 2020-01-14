/*
  字符相关
*/
export default class StringUtil {
	/**
	 *  判断字符串是否为url
	 * @param str [string] 要判断的字符串
	 * @returns {boolean} 返回true是网址，false不是网址
	 */
	CheckUrl(str) {
		var RegUrl = new RegExp();
		RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");
		if(!RegUrl.test(str)) {
			return false;
		}
		return true;
	}

	/**
	 * 去除空格
	 * @param str [string] 要处理的字符串
	 * @param type [number] 怎么处理，1-所有空格 2-前后空格 3-前空格 4-后空格
	 * @returns {string}
	 */
	trim(str, type) {
		switch(type) {
			case 1:
				return str.replace(/\s+/g, "");
			case 2:
				return str.replace(/(^\s*)|(\s*$)/g, "");
			case 3:
				return str.replace(/(^\s*)/g, "");
			case 4:
				return str.replace(/(\s*$)/g, "");
			default:
				return str;
		}
	}

	/**
	 *  判断是否为空字符
	 * @param str [string] 要判断的字符串
	 * @returns {boolean} 返回true是空的，false是非空的
	 */
	isEmpty(str) {
		let __temp = this.trim(str, 1);
		return __temp.length == 0;
	}

	/**
	 * 在指定地方插入字符
	 * @param str [string] 要处理的字符串
	 * @param flg [string] 要插入的字符串
	 * @param sn [number] 要插入的位置
	 * @returns {string}
	 * 例：var aa = 'abcd';
	 *     stringUtil.insert_flg(aa, '123', 2); //ab123cd
	 */
	insert_flg(str, flg, sn) {
		let newstr = "";
		let a = str.slice(0, sn);
		let b = str.slice(sn);
		newstr = a + flg + b;
		return newstr;
	}

	/**
	 * 删除指定地方的字符
	 * @param str [string] 要处理的字符串
	 * @param sn [number] 要删除的位置，从1开始
	 * @param len [number] 删除字符串的长度，默认为1
	 * @returns {string}
	 */
	del_flg(str, sn, len) {
		len = len || 1;
		let newstr = "";
		let arr = str.split('');
		arr.splice(sn - 1, len);
		newstr = arr.join("");
		return newstr;
	}

	/**
	 * 随机A-Z|a-z|0-9 中的随机组合
	 * @param len {number} 随机组合的长度
	 * @returns {string}
	 */
	randomString(len) {
		len = len || 32;
		let $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
			maxPos = $chars.length,
			i = 0,
			pwd = '';
		for(i; i < len; i++) {
			pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
		}
		return pwd;
	}

	/**
	 * 将字符串中的指定字符替换成另一个字符
	 * @param str [string] 要处理的字符串
	 * @param a [string] 要替换的字符串
	 * @param b [string] 要替换成的字符串
	 * @param mm [string] 匹配模式：g-全局匹配  i-区分大小写  m-多行匹配
	 * @returns {string}
	 */
	strReplace(str, a, b, mm) {
		let m = mm || 'g';
		var newStr = str.replace(new RegExp(a, m), b);
		return newStr;
	}

	/**
	 * 字母大小写转换
	 * @param str [string] 要处理的字符串
	 * @param type [number] 转换类型： 1-首字母大写  2-首字母小写  3-大小写转换  4-全部大写  5-全部小写
	 * @returns {*}
	 */
	changeCase(str, type) {
		function ToggleCase(str) {
			let itemText = ""
			str.split("").forEach(item => {
				if(/^([a-z]+)/.test(item)) {
					itemText += item.toUpperCase();
				} else if(/^([A-Z]+)/.test(item)) {
					itemText += item.toLowerCase();
				} else {
					itemText += item;
				}
			});
			return itemText;
		}

		switch(type) {
			case 1:
				return str.replace(/\b\w+\b/g, function(word) {
					return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

				});
			case 2:
				return str.replace(/\b\w+\b/g, function(word) {
					return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
				});
			case 3:
				return ToggleCase(str);
			case 4:
				return str.toUpperCase();
			case 5:
				return str.toLowerCase();
			default:
				return str;
		}
	}

	/**
	 * 字符替换*
	 * @param str [string] 要处理的字符串
	 * @param regArr [array] 字符格式，例：[3,5,3] 生成的字符就是***12345***
	 * @param type [number] 替换方式  0-替换中间N个或前面N个字符  1-替换两边N个或后面N个字符
	 * @param ARepText [string] 替换的字符，默认是*
	 * @returns {string}
	 */
	encryptStr(str, regArr, type = 0, ARepText = '*') {
		let regtext = '',
			Reg = null,
			replaceText = ARepText;
		//replaceStr('18819322663',[3,5,3],0)
		//result：188*****663
		//repeatStr是在上面定义过的（字符串循环复制），大家注意哦
		if(regArr.length === 3 && type === 0) {
			regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
			Reg = new RegExp(regtext);
			let replaceCount = this.repeatStr(replaceText, regArr[1]);
			return str.replace(Reg, '$1' + replaceCount + '$2')
		}
		//replaceStr('asdasdasdaa',[3,5,3],1)
		//result：***asdas***
		else if(regArr.length === 3 && type === 1) {
			regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
			Reg = new RegExp(regtext);
			let replaceCount1 = this.repeatStr(replaceText, regArr[0]);
			let replaceCount2 = this.repeatStr(replaceText, regArr[2]);
			return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
		}
		//replaceStr('1asd88465asdwqe3',[5],0)
		//result：*****8465asdwqe3
		else if(regArr.length === 1 && type === 0) {
			regtext = '(^\\w{' + regArr[0] + '})'
			Reg = new RegExp(regtext);
			let replaceCount = this.repeatStr(replaceText, regArr[0]);
			return str.replace(Reg, replaceCount)
		}
		//replaceStr('1asd88465asdwqe3',[5],1,'+')
		//result："1asd88465as+++++"
		else if(regArr.length === 1 && type === 1) {
			regtext = '(\\w{' + regArr[0] + '}$)'
			Reg = new RegExp(regtext);
			let replaceCount = this.repeatStr(replaceText, regArr[0]);
			return str.replace(Reg, replaceCount)
		}
	}

	/**
	 * 找出最长单词
	 * @param str [string] 要处理的字符串
	 * @param splitType [string] 单词之间的间隔符号，可不填
	 * @returns {{el: string, max: number}} el-最长的单词  max-最长单词的长度
	 * 例：longestWord('Find the Longest word in a String'); {el:'Longest',max:7}
	 *     longestWord('Find|the|Longest|word|in|a|String','|'); {el:'Longest',max:7}
	 */
	longestWord(str, splitType = /\s+/g) {
		let _max = 0,
			_item = '';
		let strArr = str.split(splitType);
		strArr.forEach(item => {
			if(_max < item.length) {
				_max = item.length;
				_item = item;
			}
		});
		return {
			el: _item,
			max: _max
		};
	}

	/**
	 * 句中单词首字母大写
	 * @param str [string] 要处理的字符串
	 * @param splitType [string] 单词之间的间隔符号，可不填
	 * @returns {string}
	 */
	titleCaseUp(str, splitType = /\s+/g) {
		let strArr = str.split(splitType),
			result = "";
		strArr.forEach(item => {
			result += this.changeCase(item, 1) + ' ';
		});
		return this.trim(result, 4)
	}

	/**
	 * 给数字前面加0
	 * @param n [number] 要处理的数字，如果小于10，则前面加0
	 * @param __num [number] 在第几位补0，2：是十位，3：是百位
	 * @returns {string}
	 */
	formatNumber(n, __num) {
		var num = (__num < 2 || !__num) ? 2 : __num;
		n = n.toString();
		for(var i = 0; i < num; i++) {
			if(n[i]) {
				n = n;
			} else {
				n = '0' + n;
			}
		}
		return n;
	}

	/**
	 * 获取格式化的日期
	 * @param fmt [string] 格式规范，如 "yyyy-MM-dd hh:mm"
	 * @param date [date] 要处理的日期
	 * @returns {string}
	 * 例：var mydate = new Date();
	 *     var str = stringUtil.formatDate("yyyy-MM-dd hh:mm",mydate);  2018/12/14 17:45
	 */
	formatDate(fmt, date) {
		var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
	}

	/**
	 * 返回两个时间点的时间差
	 * @param thisTime [string] 当前日期  格式：2019-04-01 00:00:00
	 * @param targetTime [string] 目标日期 格式：2019-04-01 00:00:00
	 * @param __showDay [boolean] 是否显示天数 默认false
	 * @param __hours_num [number] 小时部分显示几位数
	 * @param __day_num [number] 天数部分显示几位数
	 * @returns {string}
	 * 例：
	 *      var test = stringUtil.getTimeDis("2019-04-01 04:00:50", "2019-04-05 04:01:00",true,3,3);
	 *      console.log('disTime:' + test);  //disTime:004:00:00:010
	 */
	getTimeDis(thisTime, targetTime, __showDay, __hours_num, __day_num) {
		let showDay = __showDay || false;
		let hours_num = (__hours_num < 2 || !__hours_num) ? 2 : __hours_num;
		if(showDay == true) hours_num = 2;
		let day_num = (__day_num < 2 || !__day_num) ? 2 : __day_num;
		let aa = this.strReplace(thisTime, '-', ',');
		aa = this.strReplace(aa, ':', ',');
		aa = this.strReplace(aa, ' ', ',');
		aa = aa.split(',');

		let bb = this.strReplace(targetTime, '-', ',');
		bb = this.strReplace(bb, ':', ',');
		bb = this.strReplace(bb, ' ', ',');
		bb = bb.split(',');

		let thisDate = new Date(parseInt(aa[0]), parseInt(aa[1]) - 1, parseInt(aa[2]), parseInt(aa[3]), parseInt(aa[4]), parseInt(aa[5]));
		let targetDate = new Date(parseInt(bb[0]), parseInt(bb[1]) - 1, parseInt(bb[2]), parseInt(bb[3]), parseInt(bb[4]), parseInt(bb[5]));
		let timeDis = Date.parse(targetDate) - Date.parse(thisDate);

		let days = parseInt(timeDis / (1000 * 60 * 60 * 24));
		let hours;
		if(showDay == true) {
			hours = parseInt((timeDis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		} else {
			hours = parseInt((timeDis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24;
		}

		let daysStr = days.toString();

		for(var i = 0; i < day_num; i++) {
			if(daysStr[i]) {
				daysStr = daysStr;
			} else {
				daysStr = '0' + daysStr;
			}
		}

		let hoursStr = hours.toString();
		for(var i = 0; i < hours_num; i++) {
			if(hoursStr[i]) {
				hoursStr = hoursStr;
			} else {
				hoursStr = '0' + hoursStr;
			}
		}
		let minutes = parseInt((timeDis % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = (timeDis % (1000 * 60)) / 1000;

		let str = '';
		if(showDay == true) {
			str = [daysStr, hoursStr, minutes, seconds].map(this.formatNumber).join(':');
		} else {
			str = [hoursStr, minutes, seconds].map(this.formatNumber).join(':');
		}

		return str;
	}
	
	/**
	 * 判断字符串内是否包含另一个字符串的内容，无视顺序，有不包含的就返回false
	 * @param _str1 [string] 源字符串
	 * @param _str2 [string] 被寻找的字符串
	 * @returns {Boolean}
	 * 例：
	 * 		var a='abcde';
	 * 		var b='cde';
	 * 		var c='cdh';
	 * 		console.log(stringUtil.isContainStr(a,b)); //true
	 * 		console.log(stringUtil.isContainStr(b,c)); //false
	 */
	isContainStr(_str1, _str2) {
		var contain = true;
    var _arr = _str2.split('');

    for (var i = 0; i < _arr.length; i++) {
        var a = _arr[i];
        if (_str1.indexOf(a) == -1) {
            contain = false;
        }
    }

    return contain;
	}
	
	/**
	 * 带表情的字符串转码，转码后就可以无障碍的存入数据库了
	 * @param str [string] 源字符串
	 * @returns {String}
	 */
	utf16toEntities(str) {
		var patt = /[\ud800-\udbff][\udc00-\udfff]/g;
    // 检测utf16字符正则
    str = str.replace(patt, function (char) {
        var H, L, code;
        if (char.length === 2) {
            H = char.charCodeAt(0);
            // 取出高位
            L = char.charCodeAt(1);
            // 取出低位
            code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00;
            // 转换算法
            return "&#" + code + ";";
        } else {
            return char;
        }
    });
    return str;
	}
	
	/**
	 * 带表情的字符串解码，从数据库取出字符串后解码后就可以正常显示的前端了
	 * @param str [string] 源字符串
	 * @returns {String}
	 */
	entitiestoUtf16(str) {
		// 检测出形如&#12345;形式的字符串
    var strObj = utf16toEntities(str);
    var patt = /&#\d+;/g;
    var H, L, code;
    var arr = strObj.match(patt) || [];
    for (var i = 0; i < arr.length; i++) {
        code = arr[i];
        code = code.replace('&#', '').replace(';', '');
        // 高位
        H = Math.floor((code - 0x10000) / 0x400) + 0xD800;
        // 低位
        L = (code - 0x10000) % 0x400 + 0xDC00;
        code = "&#" + code + ";";
        var s = String.fromCharCode(H, L);
        strObj.replace(code, s);
    }
    return strObj;
	}
}