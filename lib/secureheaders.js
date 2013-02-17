// set secure headers
var http = require('http'),
	browser = require('ua-parser');
	/*csp = require('./headers/content_security_policy.js'),
	hsts = require('./headers/strict_transport_security.js'),
	xcto = require('./headers/x_content_type_options.js'),
	xfo = require('./headers/x_frame_options.js'),
	xXss = require('./headers/x_xss_protection.js');*/

var setCSP = function(options){
	//CSP stuff
};

var setHSTS = function(options){
	//HSTS stuff
};

var setXCTO = function(options){
	//XCTO stuff
};

var setXFO = function(options){
	//XFO stuff
	var XFOHeaderName = "X-FRAME-OPTIONS",
	defaultValue = 'SAMEORIGIN',
	validXFOHeader = /\A(SAMEORIGIN\z|DENY\z|ALLOW-FROM:)/i,
	XFOValue = '';

	if (options === undefined){
		XFOValue = defaultValue;
		response.setHeader(XFOHeaderName, XFOValue);
	}
	else if (options.match(validXFOHeader)) {
		XFOValue = options;
		response.setHeader(XFOHeaderName, XFOValue);
	}
	else
		console.log('Error');

};

var setX_XSS = function(options){
	//X_XSS stuff
	
};

var setSecureHeaders = function(options, userAgent){
	//set all headers
	setCSP({});
	setHSTS({});
	setXFO({});
	setX_XSS({});
	if (browser.parseUA(userAgent).toString().match(/IE/)) {
		setXCTO({});
	}

};