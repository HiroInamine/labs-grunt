module.exports = function(grunt) {

  grunt.initConfig({
    foo: {
      options:{
        help: 'helpme'
      }
    }
  });

  // Register a new task 'foo'. Run with 'grunt foo:arg1:arg2'
  grunt.registerTask('foo', function(arg1, arg2) {
    console.log(this);
    console.log(this.options());

    console.log("args: " + arg1 + " " + arg2);
  });

}
