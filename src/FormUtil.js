/*
 * 表单相关
 * */

import StringUtil from './StringUtil';

let stringUtil = new StringUtil();

export default class FormUtil {

	/**
	 * 判断输入框的内容是不是空的
	 * @param str [string] 要判断的字符
	 * @returns {boolean} 返回是否为空，如果是空的返回false，如果不是空的返回true
	 */
	inputEmpty(str) {
		let isEmpty = stringUtil.isEmpty(str);
		return !isEmpty;
	}

	/**
	 * 判断是否为手机号码
	 * @param str [string] 手机号字符串
	 * @returns {boolean} 返回true是手机号，false不是手机号，忽略前后空格
	 */
	isPhone(str) {
		str = stringUtil.trim(str, 2);
		var p = /^0*(10|11|12|13|14|15|16|17|18)\d{9}$/;
		return p.test(str);
	}

	/**
	 * 判断是否为email
	 * @param str [string] 要处理的字符串
	 * @returns {boolean} 返回true是邮箱，false不是邮箱，忽略前后空格
	 */
	isEmail(str) {
		str = stringUtil.trim(str, 2);
		let myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		return myreg.test(str);
	}

	/**
	 * 判断身份证号
	 * @param str [string] 身份证号
	 * @returns {boolean} 返回true是身份证号，false不是身份证号，忽略前后空格
	 */
	isID(str) {
		str = stringUtil.trim(str, 2);
		let myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		return myreg.test(str);
	}

	/**
	 * 判断表单必要项是否完整
	 * @param __arr [array] 表单项数组，每个数组元素是一个object
	 * object的内容：{value:string,type:1}
	 *              value [string]:要判断的值
	 *              type [nubmer]:判断类型， 1-判断字符串是否为空   2-判断手机号   3-判断邮箱   4-判断身份证号
	 *
	 *  return [array] 返回一个数组，数组元素与源数组一样，多了一个属性judge，为true时是通过，为false时是有问题
	 */
	judgeForm(__arr) {

		for(let i = 0; i < __arr.length; i++) {
			let str = __arr[i].value;
			let type = __arr[i].type;

			switch(type) {
				case 1:
					__arr[i].judge = this.inputEmpty(str);
					break;
				case 2:
					__arr[i].judge = this.isPhone(str);
					break;
				case 3:
					__arr[i].judge = this.isEmail(str);
					break;
				case 4:
					__arr[i].judge = this.isID(str);
					break;
			}
		}

		return __arr;
	}

	/**
	 * 解决IOS端软键盘将页面顶起的bug
	 */
	inputHandler() {
		var userAgent = window.navigator.userAgent;
		document.body.addEventListener('focusin', () => {
			//软键盘弹出的事件处理
			if(/iPhone|iPad|iPod/i.test(userAgent)) {}
		})
		document.body.addEventListener('focusout', () => {
			//软键盘收起的事件处理
			if(/iPhone|iPad|iPod/i.test(userAgent)) {
				window.scrollTo(0, 0);
			}
		})
	}
}