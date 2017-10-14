/*
 * Pegs!
 *
 * This file makes the pegs fancy.
 *
 */

;(function() {
	// Use a seeded PRNG in order to produce the same pattern on window resize
	// (but different on each page load)
	var originalSeed = Math.floor(Math.random() * 10000);
	var seed = originalSeed;

	function randomFromSeed() {
	    var x = Math.sin(seed++) * 10000;
	    return Math.floor((x - Math.floor(x)) * 10000);
	}

	function generatePegs() {
		// Reset the seed to generate the same pegs upon resize
		seed = originalSeed;

		var PEG_SIZE = 49; // in pixels
		var TITLE_PEGS = 20; // total number of grid slots taken up by the title
		var SUBTITLE_PEGS = 26; // total number of grid slots taken up by the subtitle
		var rows = 11;
		var columns = Math.ceil($(document).width() / PEG_SIZE);

		console.log("Columns: " + columns);

		// Set the grid rows and columns
		var grid = $('#peg-grid');
		grid.empty();
		grid.css({
			'grid-template-rows': 'repeat(' + rows + ', 49px)',
			'grid-template-columns': 'repeat(' + columns + ', 49px)'
		});

		// Generate pegs
		var totalPegs = (rows * columns) - TITLE_PEGS - SUBTITLE_PEGS;
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

	$(window).resize(generatePegs);
	$(document).ready(generatePegs);
})();