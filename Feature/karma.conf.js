module.exports = function (config) {

    config.set({

        basePath: 'Sencha/',

        frameworks: ['jasmine'],

        files: [
            {pattern: '../node_modules/**/*.js',included: false},
            /*'touch/sencha-touch-all-debug.js',*/
            '.sencha/app/microloader/development.js',
            'tests/Setup.js',
            //{pattern: 'app/**/*.js',included: true},
            'tests/**/*.js'
            // {pattern: 'tests/**/*.js',included: true}
        ],

        proxies: {
            '/': 'http://localhost:9999/Sencha/'
        },

        exclude: [
        ],

        reporters: ['progress'],

        port: 9111,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['chrome_without_security'],

        customLaunchers: {
            chrome_without_security: {
                base: "Chrome",
                flags: ["--disable-web-security"]
            }
        },

        captureTimeout: 6000,

        singleRun: false

    });
};