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
        },

        test1: {
            
        }
        
    });
    
        
    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Default task(s).
    //grunt.registerTask('default', ['uglify']);
    
    // A very basic default task.
    grunt.registerTask('default', 'Log some stuff.', function() {
        console.log(grunt.log);
        
        grunt.log.write('Logging some stuff...').ok();
    });
};