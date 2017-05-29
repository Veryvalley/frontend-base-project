define(function() {
	var $ = require("jquery"),
		_ = require("underscore");

	var Scence = function() {
		this.steps = [];
		this.funcs = {
			pre: {
				desc: "",
				evtHandler: this.preStep
			},
			next: {
				desc: "",
				evtHandler: this.netStep
			},
			save: {
				desc: "",
				evtHandler: this.save
			}
		}
	};
	Scence.prototype = {
		addSteps: function() {
			//...
		},
		preStep: function() {
			//...
		},
		nextStep: function() {
			//...
		},
		save: function {

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