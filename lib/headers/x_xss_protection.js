// x_xss_protection

var X_XSSProetectionHeaderName = 'X-XSS-Protection',
	defaultValue = "1",
	validX_XSSHeader = /\A[01](; mode=block)?\z/i;