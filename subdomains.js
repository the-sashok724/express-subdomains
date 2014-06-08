module.exports = function(request, response, next) {
	// If has no host...
	if(!request.host) {
		next();
		return;
	}
	
	// Remove WWW
	if(request.host.indexOf('www.') === 0) {
		response.redirect(request.protocol + '://' + request.host.substring(4) + request.url);
		response.end();
		return;
	}
	
	// Subdomains
	var append = '';
	for(i in request.subdomains) {
		append += '/' + request.subdomains[i];
	}
	request.url = append + request.url;
	
	next();
}
