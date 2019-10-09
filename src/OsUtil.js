/*
* 系统相关
* */
import QRCode from 'qrcode';

export default class OsUtil {
    /**
     * 判断是否是pc端，并且在pc端显示二维码提示移动端扫码观看
     * __url  {string} 要转成二维码的地址，如果没有就取当前页面地址
     * __tip  {string} 提示文字
     * __options {object} 提示页面的样式和结构，style:样式，wrapper:html代码
     */
    pcQRCode(__url, __tip, __options) {
        let that = this;
        let tip = __tip || '请使用手机微信打开页面';
        let options = __options || {};
        if (!options.style) {
            options.style = '\
                #qcodeWrapper {\
                    width: 100%;\
                    height: 100%;\
                    display: flex;\
                    position: fixed;\
                    top: 0;\
                    left: 0;\
                    z-index: 999;\
                    background: black;\
                    justify-content: center;\
                    align-items: center;\
                }\
                #qcode {\
                    text-align:center;\
                    margin-bottom: 20px;\
                }\
                #qcode canvas{\
                    width:100% ;\
                    height:auto;\
                }\
                .box .tip {\
                    font-size: 24px;\
                    margin: 0 auto;\
                    text-align: center;\
                    color: white;\
                }\
            ';
        }
        if (!options.wrapper) {
            options.wrapper = `\
                <div class="box">\
                    <div id="qcode"><canvas id="canvas"></canvas></div>\
                    <div class="tip">${tip}</div>\
                </div>\
            `;
        }
        var style1 = document.createElement('style');
        style1.innerHTML = options.style;
        document.head.appendChild(style1);


        var qcodeBox = document.createElement('div');
        qcodeBox.id = 'qcodeWrapper';
        qcodeBox.innerHTML = options.wrapper;
        document.body.appendChild(qcodeBox);
        qcodeBox.style.display = 'none';

        var _url = __url || window.location.href;
        QRCode.toCanvas(document.getElementById('canvas'), _url, {margin: 1, width: 300, height: 300});
        setQcode();
        window.addEventListener('resize', setQcode);

        function setQcode() {
            var isPc = that.isPc();
            if (isPc) {
                qcodeBox.style.display = 'flex';
            } else {
                qcodeBox.style.display = 'none';
            }
        }
    }

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

    /**
     * 深复制一个对象，生成一个新的对象
     * @param obj [object] 要复制的对象
     * @returns {*}
     */
    cloneObj(obj) {
        var obj2 = Object.create(
            Object.getPrototypeOf(obj),
            Object.getOwnPropertyDescriptors(obj)
        );

        return obj2;
    }
}
