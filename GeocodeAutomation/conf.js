var log4js = require('C:/Users/Edin/AppData/Roaming/npm/node_modules/log4js');

exports.config = {

	seleniumAddress : 'http://localhost:4444/wd/hub',
	capabilities:  {
	'browserName' : 'chrome'
},

suites:{
	smoke:'./Tests/Smoke/*.spec.js'
},

beforeLaunch: function() {
    var currentdate = new Date();

    log4js.configure({
      appenders: {
        out: {
          type: 'stdout'
        },
        app: {
          type: 'file',
          filename: './logs/ExecutionLog' + currentdate.getDate() + "-" +
            (currentdate.getMonth() + 1) + "-" +
             currentdate.getFullYear() + "-" +
             currentdate.getHours() + "-" +
             currentdate.getMinutes() + "-" +
             currentdate.getSeconds() + '.log',
        }
      },
      categories: {
        default: {
          appenders: ['out', 'app'],
          level: 'debug'
        }
      }
    });
  },


framework: 'jasmine',
params: require('./Tests/testParameters.json'),

onPrepare: function(){
		browser.logger =log4js.getLogger('protractorLog4js');
}
};
