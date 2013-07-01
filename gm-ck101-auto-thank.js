// ==UserScript==
// @name       CK101 - Auto Thank for Extra Content
// @namespace  http://blog.tsaiid.idv.tw/project/gmscripts/ck101-auto-thank-for-extra-content/
// @version    0.1
// @description  Some articles on Ck101 hide the extra content and you have to "Thank" the author to get it. This script will automatically "Thank the author" at the first loading. 
// @match      http://ck101.com/*
// @copyright  2013+, I-Ta Tsai (http://blog.tsaiid.idv.tw/)
// ==/UserScript==

// Use pre-loaded jQuery by ck101.
var $ = unsafeWindow.jQuery;

if ($('.lockThankBtn').length) {
    var thank_btn = $('.lockThankBtn').first();
    thank_btn
    	.click()
    	.delay(1000)
        .promise()
    	.done(function(){
			if ($('#postform').length) {
    			$('#postform').submit();
			}    
    	});
}
