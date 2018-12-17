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
     * @returns {boolean} 返回true是手机号，false不是手机号
     */
    isPhone(str) {
        str = stringUtil.trim(str, 1);
        var p = /^0*(13|14|15|16|17|18)\d{9}$/;
        return p.test(str);
    }

    /**
     * 判断是否为email
     * @param str [string] 要处理的字符串
     * @returns {boolean} 返回true是邮箱，false不是邮箱
     */
    isEmail(str){
        let myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return myreg.test(str);
    }
}