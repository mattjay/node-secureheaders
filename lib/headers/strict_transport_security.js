//  strict_transport_security
var hstsHeaderName = 'Strict-Transport-Security',
	hstsMaxAge = "31536000",
	defaultValue = "max-age=" + hstsMaxAge,
	validSTSHeader = /\Amax-age=\d+(; includeSubdomains)?\z/i;
