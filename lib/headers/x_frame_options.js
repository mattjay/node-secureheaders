// x_frame_options
/* var XFOHeaderName = "X-FRAME-OPTIONS",
	defaultValue = 'SAMEORIGIN',
	validXFOHeader = /\A(SAMEORIGIN\z|DENY\z|ALLOW-FROM:)/i;
*/
module.exports = function(val, options) {
	var header = 'DENY';
	if (val == 'sameorigin'){
		header = 'SAMEORIGIN';
	}
	else if ((val == 'allow-from') && options) {
		header = 'ALLOW-FROM ' + options;
	}

	return function (req, res, next) {
		res.header('X-FRAME-OPTIONS', header);
		next();
	}
};
