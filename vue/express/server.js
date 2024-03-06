const express = require('express'); 
const cors = require('cors')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express(); 
const PORT =  process.env.VUE_PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:1880';

function proxyRouter (req) {
    // Does not proxy calls to api without a path e.g. /api or /api/
    if (req.path === '/api' || req.path === '/api/') {
        return 'http://localhost:' + PORT;
    } else if (req.path === '/api/*') {
        return BACKEND_URL;
    }
}

// Proxy calls to api to backend url, rewrites the path to remove /api e.g. /api/test -> /test
app.use('/api', createProxyMiddleware({target: BACKEND_URL, router: proxyRouter, pathRewrite: {'^/api' : ''} }));

app.use(cors())

// Serving dist directory from this script's parent directory
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get("/status", (request, response) => {
    const status = {
       "status": "running"
    };
    response.send(status);
 });
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port " + PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);