###General Notes 
- On the server when using sendFile, we cannot use a relative path. We must use __dirname to signify the current directory and then a path to index.html. 
- `Error: listen EADDRINUSE :::3000` - means the port is already in use  
- line ending errors on Windows http://stackoverflow.com/questions/37826449/expected-linebreaks-to-be-lf-but-found-crlf-linebreak-style-in-eslint-using
- using babel in webpack config http://stackoverflow.com/questions/31903692/how-can-i-use-es6-in-webpack-config-js 