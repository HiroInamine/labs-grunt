# labs-grunt

## Requisites
---
- node.js >= 0.8.0
- npm


## Installation
---
* Install Grunt CLI (command-line interface)
  * npm install -g grunt-cli


* Preparing environment
  * Creating file package.json with cmd `npm init`
  * Install grunt with cmd `npm install grunt --save-dev`
  * Install grunt plugins with same way of installed grunt `npm install grunt-contrib-jshint --save-dev`

  Below a example of package.json file
  ```javascript
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

* Creting file Gruntfile.js

  This file is comprised of the following parts:

  * The "wrapper" function
  * Project and task configuration
  * Loading Grunt plugins and tasks
  * Custom tasks

  Below a example of this file:

  ```javascript
  module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'src/<%= pkg.name %>.js',
          dest: 'build/<%= pkg.name %>.min.js'
        }
      }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

  };
  ```

## Using
* Executing grunt
  * Run cmd `grunt`
  * Run cmd `grunt --help` to list tasks
