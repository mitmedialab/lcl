var supported_lang = ['en','it','ja', 'es', 'pt', 'he'];

$(document).ready(function() {
  var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
                  navigator.language ||   // All browsers
                  navigator.userLanguage; // IE <= 10

  // update MailChimp's browser language field
  if (language) {
    $('#mc-embedded-subscribe-form').attr('action', function(i, val){
      return val + '&BLANG=' + language;
    });
  }

  // default to english
  if (!language || supported_lang.indexOf(language.substr(0,2)) == -1){
    language = 'en';
  }

  // update iframe src
  $('#video-iframe').attr('src', function(i, val){
    // Only add language if isn't set up (by Transifex)
    if (val.indexOf("&hl=") == -1) {
      val = val + '&hl=' + language;
    }
    if (val.indexOf("&cc_lang_pref=") == -1) {
      val = val + '&cc_lang_pref=' + language;
    }

    return val;
  });
});

Transifex.live.onTranslatePage(function(language_code) {
  var new_lang = Transifex.live.getSelectedLanguageCode();

  if (new_lang) {
    $("#trailer-video").attr("lang", new_lang);

    if (supported_lang.indexOf(new_lang.substr(0,2)) != -1) {

      // add new language
      $('#video-iframe').attr('src', function(i, val){
        // remove last lang if exists
        val = val.replace(/&hl=.*/, '').replace(/&cc_lang_pref=.*/, '');

        return val + '&hl=' + new_lang + '&cc_lang_pref=' + new_lang;
      });
    }
  }
});