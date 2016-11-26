module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
      single_file: {
        src: 'css/style.css',
        dest: 'css/style-prefixed.css'
      }
    },
    cssmin: {
      combine: {
        files: {
          'css/style.min.css': ['css/tipr.css', 'css/fontello.css', 'css/style-prefixed.css']
        }
      }
    },
    concat: {
      js: {
        src: 'vendor/*.js',
        dest: 'vendor.min.js'
      }
    },
    clean: ['css/style.min.css', 'css/style-prefixed.css']
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['autoprefixer', 'cssmin', 'concat']);
  grunt.registerTask('reboot', ['clean', 'default']);
};