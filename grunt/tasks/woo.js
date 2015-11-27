module.exports = function(grunt){
  grunt.initConfig({
    woo: {
      options:{
        help: 'helpme'
      },
      development:{
        options: {
          age: 100
        }
      },
      production: {
      }
    }
  });

  // Register a new multi task 'woo'. Multi task has target thats mandatory.
  grunt.registerMultiTask('woo', function() {
    console.log(this);
  });
};
