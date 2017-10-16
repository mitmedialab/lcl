/*
 * Discourse Post Fetcher
 *
 * Fetchs discourse posts!
 *
 */

;(function() {

	$(document).ready(function() {
		$.ajax({
			url: 'http://lcl-discuss.media.mit.edu/posts.json',
			success: function(data) {
				// var jsonData = JSON.parse(data);
				var posts = data.latest_posts;

				var htmlToAppend = '';

				var numPosts = Math.min(posts.length, 3);
				for (var i = 0; i < numPosts; ++i) {
					var post = posts[i];
					var username = post.username;
					var topic = post.topic_title;
					var content = post.cooked;
					var avatar = 'http://lcl-discuss.media.mit.edu' + post.avatar_template.replace('{size}', '120');

					var mod = i % 2;
					var pos = mod == 0 ? "2" : "6";


					htmlToAppend += '<div class="row discourse-post post-mod-' + mod + '"><div class="col-md-' + pos + ' text-right"><img class="post-avatar" src="' + avatar +'" /></div><div class="col-md-6"><div class="speech-bubble"><div class="post-title">' + username + ' posted in ' + topic + '</div><div class="post-content-box"><div class="post-content">' + content + '</div></div></div></div></div>';
				}
				$('#discourse-posts').append(htmlToAppend);
			}
		})
	});

})();
