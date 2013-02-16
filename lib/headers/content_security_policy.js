// content_security_policy.js
var browser = require('ua-parser');

var ua = "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9) Gecko/2008052906 Firefox/3.0";

console.log(browser.parseUA(ua).toString());