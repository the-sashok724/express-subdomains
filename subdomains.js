module.exports = function(request, response, next) {
	if(request.host.indexOf('www.') === 0) { // Remove unnecessary WWW prefix
		response.redirect(request.protocol + '://' + request.host.substring(4) + request.url);
		response.end();
		return;
	}
	
	var append = '';
	for(i in request.subdomains) {
		append += '/' + request.subdomains[i];
	}
	request.url = append + request.url;
	
	next();
}
