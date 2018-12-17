/*===============================================
  数组相关
===========================================================*/

export default class ArrayUtil {

    /**
     * 洗牌算法 打乱数组
     * @param __arr [array] 要处理的数组
     * @returns [array] 打乱的数组
     */
    shuffle(__arr) {
        let arr = __arr;
        let i, t, m = arr.length;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = arr[m];
            arr[m] = arr[i];
            arr[i] = t;
        }
        return arr;
    }

    /**
     * 随机抓取N个元素生成新数组，如果__num为0或不填，则返回原数组
     * @param __arr [array] 要处理的数组
     * @param __num [number] 抓取多少元素
     * @returns [array] 生成的新数组
     */
    getExt(__arr, __num) {
        if (__num === 0 || !__num) {
            return __arr;
        }
        let arr = __arr.shuffle();
        let arr2 = [];
        for (let i = 0; i < __num; i++) {
            arr2.push(arr[i]);
        }

        return arr2;
    }

    /**
     * 数组去重
     * @param arr [array] 要处理的数组
     * @returns {any[]} 返回新数组
     */
    removeRepeatArray(arr) {
        //es6
        return [...new Set(arr)]
    }

    /**
     * 数组最大值
     * @param arr [array] 要处理的数组
     * @returns {number} 返回数组最大值
     */
    maxArr(arr) {
        return Math.max.apply(null, arr);
    }

    /**
     * 数组最小值
     * @param arr [array] 要处理的数组
     * @returns {number} 返回数组最小值
     */
    minArr(arr) {
        return Math.min.apply(null, arr);
    }

    /**
     * 数组求和
     * @param arr
     * @returns {*}
     */
    sumArr(arr) {
        return arr.reduce((pre, cur) => pre + cur)
    }

    /**
     * 数组求平均值
     * @param arr
     * @returns {number}
     */
    covArr(arr) {
        return this.sumArr(arr) / arr.length;
    }

    /**
     * 返回数组或字符串里一个元素出现的次数
     * @param obj [string | array] 要处理的字符串或数组
     * @param ele 指定的元素
     * @returns {number}
     */
    getEleCount(obj, ele) {
        let num = 0;
        for (let i = 0, len = obj.length; i < len; i++) {
            if (ele === obj[i]) {
                num++;
            }
        }
        return num;
    }

    /**
     * 返回数组中出现最多的几次元素和出现次数
     * @param arr [array] 要处理的数组
     * @param rank [number] 长度，默认为数组长度
     * @param ranktype [number] 新生成数组的排序方式，默认降序 1-升序  非1-降序
     * @returns {array}  返回的数组元素为object：{el:元素,count:出现次数}
     * 例：
     *    getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2])
     *    result：[{"el":"2","count":6},{"el":"1","count":4},{"el":"3","count":2},{"el":"4","count":1},{"el":"5","count":1},{"el":"6","count":1}]
     *    默认情况，返回所有元素出现的次数
     *
     *    getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],3)  传参（rank=3），只返回出现次数排序前三的
     *    result：[{"el":"2","count":6},{"el":"1","count":4},{"el":"3","count":2}]
     *
     *    getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],null,1)  传参（ranktype=1,rank=null），升序返回所有元素出现次数
     *    result：[{"el":"6","count":1},{"el":"5","count":1},{"el":"4","count":1},{"el":"3","count":2},{"el":"1","count":4},{"el":"2","count":6}]
     *
     *    getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],3,1)  传参（rank=3，ranktype=1），只返回出现次数排序（升序）前三的
     *    result：[{"el":"6","count":1},{"el":"5","count":1},{"el":"4","count":1}]
     */
    getCount(arr, rank, ranktype) {
        let obj = {}, k, arr1 = []
        //记录每一元素出现的次数
        for (let i = 0, len = arr.length; i < len; i++) {
            k = arr[i];
            if (obj[k]) {
                obj[k]++;
            } else {
                obj[k] = 1;
            }
        }
        //保存结果{el-'元素'，count-出现次数}
        for (let o in obj) {
            arr1.push({el: o, count: obj[o]});
        }
        //排序（降序）
        arr1.sort(function (n1, n2) {
            return n2.count - n1.count
        });
        //如果ranktype为1，则为升序，反转数组
        if (ranktype === 1) {
            arr1 = arr1.reverse();
        }
        let rank1 = rank || arr1.length;
        return arr1.slice(0, rank1);
    }

    /**
     * 生成n1到n2的数组
     * @param arr [array] 要处理的数组
     * @param n1 要获取的起点元素
     * @param n2 要获取的终点元素
     * @returns [array]
     * 例：
     *    getArrayNum([0,1,2,3,4,5,6,7,8,9],5,9)
     *    result：[5, 6, 7, 8, 9]
     *
     *    getArrayNum([0,1,2,3,4,5,6,7,8,9],2) 不传第二个参数,默认返回从n1到数组结束的元素
     *    result：[2, 3, 4, 5, 6, 7, 8, 9]
     */
    getArrayNum(arr, n1, n2) {
        return arr.slice(n1, n2);
    }
}