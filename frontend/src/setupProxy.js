const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://backend.mock-interviewer-and-job-application-database.local:5000',
      //target: 'http://backend-service:5000',
      changeOrigin: true,
    })
  );
};
