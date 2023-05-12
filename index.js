const config = require('./src/config/config');
require('./src/config/db');
const {app} = require('./app');

const port = config.server.port;

let server 
if(config.server.protocol == 'https'){
    var https = require('https');
    const options = {
        key: fs.readFileSync(config.server.key),
        cert: fs.readFileSync(config.server.cert)
    }
    server = https.createServer(options, app);
}
else{
    const http = require('http');
    server = http.createServer(app);
}
server.listen(port,()=>{
    console.log("server is running on port " + port);
});