/*
 * Utilities
 *
 */

calendar_src = 'Nm8xaHEwYjRjZWk1bWo5bnVtOGhobW9kZWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'
start_date = '20220418'
end_date = '20220531'
view_mode = 'WEEK' /* alternative can be MONTH */

iframe_html = '<iframe id="calendar-iframe" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff' 
		+'&amp;ctz=' + encodeURIComponent(getCurrentTimeZone()) + '&amp;src=' + calendar_src 
		+ '&amp;color=%239E69AF&amp;mode='+ view_mode +'&amp;showPrint=0&amp;showCalendars=0&amp;dates='+start_date+'%2F'+ end_date 
		+'" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>'


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
		$('#timezone-header').text(this.value);
		$('#calendar-iframe').attr('src', 'https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=' + 
			encodeURIComponent(this.value) + '&src=' + calendar_src + '&color=%239E69AF&mode='+ view_mode +'&showPrint=0&showCalendars=0&dates=' + start_date +'%2F' + end_date);
	});
})
