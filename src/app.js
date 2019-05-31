import './main.scss';
import enterView from 'enter-view'; 

enterView({
	selector: '.block-a',
	enter: function(el) {
		el.classList.add('entered');
	}
});

enterView({
	selector: '.block-b',
	offset: 0.5,
	enter: function(el) {
		el.classList.add('entered');
	}
});

var count = 0;
enterView({
	selector: '.block-c',
	offset: 0.75,
	enter: function(el) {
		el.classList.add('entered');
		count += 1;
		el.querySelector('span').innerText = count;
	},
});

enterView({
	selector: '.block-d',
	offset: 0.5,
	enter: function(el) {
		el.classList.add('entered');
	}
});

enterView({
	selector: '.block-e',
	offset: 0.5,
	enter: function (el) {
		el.classList.add('entered');
	},
	exit: function (el) {
		el.classList.remove('entered');
	}
});

enterView({
	selector: '.block-f',
	offset: 0.5,
	enter: function(el) {
		el.classList.add('entered');
	},
	progress: function(el, progress) {
		var p = el.querySelector('.progress')
		p.innerText = progress.toFixed(2);
	}
});