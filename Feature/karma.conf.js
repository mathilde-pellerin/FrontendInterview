module.exports = function (config) {

    config.set({

        basePath: './',

        frameworks: ['jasmine'],

        files: [
            'app/namespace.js',
            'app/**/*.js',
            'test/lib/vehicle_data.js',
            'test/spec/**/*Spec.js'
        ],

        reporters: ['progress'],

        port: 9111,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        captureTimeout: 6000,

        singleRun: false

    });
};