module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    app: {
      src: './src',
      bin: './dist',
      vendor: './node_modules'
    },

    // Uglify task
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= app.bin %>/app.js',
        dest: '<%= app.bin %>/app.js.min.js'
      }
    },

    // Browserify task
    browserify: {
      options: {
        banner:  '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      development: {
        options: {
          browserifyOptions: {
            debug: true
          }
        },
        src:  '<%= app.src %>/**/*.js',
        dest: '<%= app.bin %>/app.js'
      },
      production:{
        src:  '<%= app.src %>/**/*.js',
        dest: '<%= app.bin %>/another-app.js'
      }
    },

    // Watch task
    watch: {
      js: {
        files: ['<%= app.src %>/**/*.js'],
        tasks: ['browserify']
      },
      css: {
        files: ['<%= app.src %>/**/*.less'],
        tasks: ['less']
      }
    },

    // Less task
    less: {
      development: {
        files: {
          '<%= app.bin %>/styles.css': '<%= app.src %>/**/*.less'
        }
      }
    },

    // Connect task
    connect: {
      server: {
        options: {
          port: 8000,
          base: ['<%= app.src %>/', '<%= app.bin %>/']
        }
      }
    }    

  });

  // Load tasks from the specified Grunt plugin.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register build task.
  grunt.registerTask('build', ['browserify', 'less']);

  // Overrides default task. grunt
  grunt.registerTask('default', ['build', 'connect',  'watch']);

  // Register release task
  grunt.registerTask('release', ['build', 'uglify']);

  // Load tasks from specified directory.
  grunt.loadTasks('./grunt/tasks/');

};
