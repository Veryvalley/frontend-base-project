define(function() {
	var $ = require("jquery"),
		_ = require("underscore");

	var Scence = function() {
		this.modules = [];
		this.status;
		this.isFirst = true;
		this.isLast = false;
	};
	Scence.prototype = {
		load: function() {
			//依次调用所有模块的load方法
		},
		save: function() {
			//依次调用所有模块的save方法
		},
		setStatus: function() {
			//...
		},
		getStatus: function {

			}
			//...
	}

	Scence.Create = function() {
		var instance;
		var F = function() {};
		F.prototype = Scence.prototype;
		var ScenceChildren = function() {};
		ScenceChildren.prototype = new F();
		if (!instance) {
			instance = new ScenceChildren();
		}
		return instance;

	}

	return Scence;

});