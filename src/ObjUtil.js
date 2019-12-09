/*
* 对象相关
* */

export default class ObjUtil {

    /**
     * 深复制对象
     * @param {Object} 要被复制的对象
     * @returns {Object} 返回复制出来的新对象
     */
    cloneObj(__obj) {
        var newObj = {};
	    if (__obj instanceof Array) {
	        newObj = [];
	    }
	    for (var key in __obj) {
	        var val = obj[key];
	        newObj[key] = typeof val === 'object' ? cloneObj(val) : val;
	    }
	    return newObj;
    }

}
