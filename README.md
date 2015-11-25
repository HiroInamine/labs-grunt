# labs-grunt

* Install node.js >= 0.8.0

* Install Grunt CLI (command-line interface)
    * npm install -g grunt-cli

* Creating files
    * package.json 
        * npm init or grunt init
 
 ``` javascript
    {
      "name": "my-project-name",
      "version": "0.1.0",
      "devDependencies": {
        "grunt": "~0.4.5",
        "grunt-contrib-jshint": "~0.10.0",
        "grunt-contrib-nodeunit": "~0.4.1",
        "grunt-contrib-uglify": "~0.5.0"
      }
    }
```

    * Gruntfile.js (grunt)
        * npm install grunt --save-dev