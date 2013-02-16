// x_frame_options
var XFOHeaderName = "X-FRAME-OPTIONS",
	defaultValue = 'SAMEORIGIN',
	validXFOHeader = /\A(SAMEORIGIN\z|DENY\z|ALLOW-FROM:)/i;