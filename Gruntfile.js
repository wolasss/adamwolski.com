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
          'css/style.min.css': ['css/animate.css', 'css/fontello.css', 'css/style-prefixed.css']
        }
      }
    },
    clean: ['css/style.min.css', 'css/style-prefixed.css']
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['autoprefixer', 'cssmin']);
  grunt.registerTask('reboot', ['clean', 'default']);
};