define(["jQuery"], function($) {
	var topics = {};
	return function(id) {
		if (id) {
			if (topics[id]) {
				return topics[id];
			}
			var topic = $.Callbacks();

			return topics[id] = {
				subscribe: topic.add, //订阅，就是把函数加入到回调队列中
				publish: topic.fire, // 发就是依次触发回调队列中的函数
				remove： topic.remove,
				disable: topic.disable
			}
		}
	}
});