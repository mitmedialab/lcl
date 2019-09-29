/*
 * Utilities
 *
 */

function getTimeZone(){
	return Intl.DateTimeFormat().resolvedOptions().timeZone || "America/New_York";
}