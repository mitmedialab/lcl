/*
 * Utilities
 *
 */

function getCurrentTimeZone(){
	return Intl.DateTimeFormat().resolvedOptions().timeZone || "America/New_York";
}

$(document).ready(function(){

	/*$('#timezone-select')
		.append($("<option />").text('America/New_York'))
		.append($("<option />").text('America/Los_Angeles'))
		.append($("<option />").text('America/Sao_Paulo'))
		.append($("<option />").text('Europe/Rome'))
		.append($("<option />").text('Africa/Nairobi'))*/

	$('#timezone-select').change(function(){
		//alert(this.value);
		console.log(this.value);
		$('#timezone-header').text(this.value);
		$('#calendar-iframe').attr('src', 'https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=' + encodeURIComponent(this.value) + '&src=OTNtdWFuNTVwbTQzamtvYXM3YnZvYWNwMDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%239E69AF&mode=WEEK&dates=20200413%2F20200525');
	});
})