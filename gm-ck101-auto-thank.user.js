// ==UserScript==
// @name            Ck101 - Auto Thank for Extra Content
// @namespace       http://tsai.it/project/gmscripts/ck101-auto-thank-for-extra-content/
// @version         0.2.4
// @description     Some articles on Ck101 hide the extra content and you have to "Thank" the author to get it. This script will automatically "Thank the author" at the first loading.
// @include         http://ck101.com/*
// @copyright       2013+, I-Ta Tsai (http://tsai.it/)
// @grant           none
// @require         http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

if ($('.lockThankBtn').length || $('.locked').length) {
    $('#post_thank').click();

    var intervalId = setInterval(function() {
        if ($('#postform').length) {
            $('#postsubmit').click();
            clearInterval(intervalId);
        }
    }, 500);
}

