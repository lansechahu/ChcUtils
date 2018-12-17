/*
* 系统相关
* */

export default class OsUtil {
    /**
     * 判断是否是pc端
     * @returns {boolean}
     */
    isPc() {
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    /**
     * 获取终端设备信息
     * return {object} 返回一个对象，对象属性是设备的类型
     */
    getSysInfo() {
        let userAgent = window.navigator.userAgent;
        let find = function (needle) {
            return userAgent.indexOf(needle) !== -1;
        }
        let os = {};
        os.iphone = find('iPhone');
        os.ipod = find('iPod');
        os.ipad = find('iPad');
        os.ios = os.iphone || os.ipod || os.ipad;

        os.android = find('Android');

        //华为手机
        os.isHuaWei = find('HUAWEI');

        //微信APP终端
        os.weChat = find('MicroMessenger');

        //企业微信
        os.wxWork = find('wxwork') && os.weChat;

        //高德APP终端
        os.amap = find('amap');

        os.isMobile = !this.isPc();
        os.ispc = this.isPc();

        return os;
    }

    /**
     * 存储cookie
     * @param c_name [string] 存储的名称
     * @param value [string] 存储的值
     * @param expiredays [number] 存储的时限（天）
     */
    setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    }

    /**
     * 获取cookie存储的数据
     * @param name [string] 存储的名称
     * @returns {*} 有值的话返回值，没值的话返回null
     */
    getCookie(name) {
        let dc = document.cookie;
        let prefix = name + "=";
        let begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else {
            begin += 2;
        }
        let end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
        return unescape(dc.substring(begin + prefix.length, end));
    }

    /**
     * 删除cookie
     * @param name [string] 要删除的cookie名称
     */
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }

    /**
     * 获取URL中的参数
     * @param name [string] 参数名称
     * @returns {*}
     */
    getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
}