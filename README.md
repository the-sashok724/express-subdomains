express-subdomains
==================

> Subdomains routing for Express

My version of subdomains module Express. It also automatically removes unnecessary 'www' subdomain.

```javascript
var express = require('express');
var subdomains = require('subdomains');

var app = express();

app.use(subdomains);
app.get('/api/actions/', function(request, response) {
	response.end('<p>api.domain.com/actions/</p>');
});
app.get('/blog/posts/', function(request, response) {
	response.end('<p>blog.domain.com/posts/</p>');
});
```
