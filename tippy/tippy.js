var tooltip = false,
	position = {top: 0, left: 0},
	dep = new Deps.Dependency;

function get_tooltip() {
	dep.depend();
	return tooltip;
}

function set_tooltip(what, where) {
	if (where) position = where;
	tooltip = what;
	console.log('set', tooltip)
	dep.changed();
}

Template.tippy.helpers({
	display: function() {
		var tip = get_tooltip();

		if (tip) {
			return 'show';
		}

		return 'hide';
	},

	content: function() {
		var tip = get_tooltip();

		return tip ? new Handlebars.SafeString(tip) : '';
	},

	position: function() {
		var tip = get_tooltip();

		return 'top: ' + position.top + 'px; left: ' + position.left + 'px;';
	}
});

Template.body.events({
	'mouseover .tippy': function(e) {
		var el = $(e.target),
			o = el.offset(),
			h = el.height(),
			tip = el.data('tooltip');

		o.top += h;

		set_tooltip(tip, o);
	},

	'mouseout .tippy': function(e) {
		console.log('cleared');
		set_tooltip(false);
	}
});
