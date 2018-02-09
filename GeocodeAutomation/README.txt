This automation project is written in protractor which is a JavaScript automation framework.
Requirements:
  1: Install Node.js and following node modules
  2: Install Protractor: run cmd and type in : npm install -g protractor
  3: Install webdriver-manager: run cmd and type in : npm install -g webdriver-manager
  4: Update webdriver-manager: run cmd and type in webdriver-manager update
  5: install log4js logger: run cmd and type in : npm install -g log4js
  6: install superagent: run cmd and type in : npm install -g superagent

Inside of smoke.spec.js file following changes will need to be made :
line #3: Absolute path should copied instead of C:/Users/Edin/AppData/Roaming/npm/node_modules/superagent

Note: Each call was made with my created Api Key.

How to run the tests:
  1. Run cmd and type in:"webdriver-manager start"
  2. Run different cmd, navigate to project directory path(eg. "cd C:\Users\Desktop\GeocodeAutomation") and type in: "protractor conf.js"
