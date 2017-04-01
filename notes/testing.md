#### Setup 
- Mocha does not need a `testSetup.js` file. We can run basic tests just with `Mocha file.test.js`. 
- If the test file contains ES6 modules, it is necessary to run: `require('babel-register')();` in the setup file. 
- For now it is more elegant just to use `require`.  

#### Environment 
- When mocha imports a function from a particular .js file, it has to interpret the whole file. 
- webpack imports like require('file.scss') will not be understood, so use the testSetup file to overwrite these
- the window object comes back as undefined, since we are not loading the file in the browser.  
- We can use karma to test js in the browser, but configuration with webpack looks painful. Defer. 