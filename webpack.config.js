var getConfig = require('hjs-webpack');

module.exports = getConfig({
    in: 'src/app.jsx',
    out: 'public',
    isDev: process.env.NODE_ENV !== 'production',
    clearBeforeBuild: true
});