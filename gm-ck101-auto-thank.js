// ==UserScript==
// @name       CK101 - Auto Thank for Extra Content
// @namespace  http://blog.tsaiid.idv.tw/project/gmscripts/ck101-auto-thank-for-extra-content/
// @version    0.2
// @description  Some articles on Ck101 hide the extra content and you have to "Thank" the author to get it. This script will automatically "Thank the author" at the first loading.
// @match      http://ck101.com/*
// @copyright  2013+, I-Ta Tsai (http://blog.tsaiid.idv.tw/)
// ==/UserScript==

// Use pre-loaded jQuery by ck101.
var $ = unsafeWindow.jQuery;

if ($('.lockThankBtn').length) {
    var launch_thank = function() {
        // create a deferred object
        var r = $.Deferred();

        // do whatever you want (e.g. ajax/animations other asyc tasks)
        $('#post_thank').click();

        setTimeout(function() {
            // and call `resolve` on the deferred object, once you're done
            if ($('#postform').length)
                r.resolve();
        }, 500);

        // return the deferred object
        return r.promise();
    };

    launch_thank().done(function() {
        $('#postform').submit();
    });
}