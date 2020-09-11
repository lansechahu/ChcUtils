/*
  dom相关
*/

export default class DomUtil {
	/**
	 * 判断div滚动条是否达到底部
	 * @param __target [$dom] 靠jq获取的对象dom节点，要检测这个节点是滚动条，如$('.aa')
	 * @returns {boolean} 返回true是滚动到底部了，false没滚到底部
	 */
	scrollBottom(__target) {
		var $target = __target;
		var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
		var nScrollTop = 0; //滚动到的当前位置
		var nDivHight = $target.height();
		nScrollHight = $target[0].scrollHeight;
		nScrollTop = $target[0].scrollTop;
		var paddingBottom = parseInt($target.css('padding-bottom')),
			paddingTop = parseInt($target.css('padding-top'));
		if(nScrollTop + paddingBottom + paddingTop + nDivHight >= nScrollHight) {
			//console.log("滚动条到底部了");
			return true;
		}
		return false;
	}

	/**
	 * 键盘顶起bug解决
	 */
	inputKeyboard() {
		$("input").blur(function() {
			setTimeout(function() {
				$(document).scrollTop(0);
			}, 200);
			$(document).scrollTop(0);
		});

		$("textarea").blur(function() {
			setTimeout(function() {
				$(document).scrollTop(0);
			}, 200);
			$(document).scrollTop(0);
		});
	}
}