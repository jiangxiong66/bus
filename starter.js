var app = require('./app.js');

if(!module.parent) {
    app.listen(3000);
    console.log("Express server listening on port %d",3000);
}