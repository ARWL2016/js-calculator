#### Setup 
- Mocha does not need a `testSetup.js` file. We can run basic tests just with `Mocha file.test.js`. 
- If the test file contains ES6 modules, it is necessary to run: `require('babel-register')();` in the setup file. 
- For now it is more elegant just to use `require`.  