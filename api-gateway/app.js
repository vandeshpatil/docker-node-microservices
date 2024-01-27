// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// mount `exampleProxy` in web server
const app = express();
app.use('/user-service', createProxyMiddleware({
    target: `http://user-service:3000`,
    pathRewrite: {
        [`^/user-service`]: `/`,
    }
}));

app.use('/order-service', createProxyMiddleware({
    target: `http://order-service:4000`,
    pathRewrite: {
        [`^/order-service`]: `/`,
    }
}));


app.listen(5000);