/*
 * Pegs!
 *
 * This file makes the pegs fancy.
 *
 */

;(function() {
	var seed = Math.floor(Math.random() * 10000);

	function randomFromSeed() {
	    var x = Math.sin(seed++) * 10000;
	    return Math.floor((x - Math.floor(x)) * 10000);
	}

	function generatePegs() {
		var PEG_SIZE = 49; // in pixels
		var rows = 10;
		var columns = 50; // Enough to cover a 1080 screen

		// Set the grid rows and columns
		var grid = $('#peg-grid');
		grid.empty();
		grid.css({
			'grid-template-rows': 'repeat(' + rows + ', 49px)',
			'grid-template-columns': 'repeat(' + columns + ', 49px)'
		});

		// Generate pegs
		var totalPegs = (rows * columns);
		for (var i = 0; i < totalPegs; ++i) {
			var rand = randomFromSeed() % 4;
			switch (rand) {
				case 0:
					grid.append('<div><img src="/lcl-staging-jekyll/images/peg_green.svg" /></div>');
					break;
				case 1:
					grid.append('<div><img src="/lcl-staging-jekyll/images/peg_blue.svg" /></div>');
					break;
				case 2:
					grid.append('<div><img src="/lcl-staging-jekyll/images/peg_red.svg" /></div>');
					break;
				case 3:
					grid.append('<div><img src="/lcl-staging-jekyll/images/peg_yellow.svg" /></div>');
					break;
			}
		}

		grid.append('<div class="peg-grid-title">Learning Creative Learning</div><div class="peg-grid-subtitle">A community of educators, designers, and tinkerers exploring creative learning through projects, passion, peers, and play</div>');

	}

	$(document).ready(generatePegs);
})();