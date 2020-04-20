/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: ['./**/*.html', '!./node_modules/**/*.html']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['./**/*.css', '!./node_modules/**/*.css']
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['./**/*.js', '!./node_modules/**/*.js']
    },
    uglify: {
      'dist/fork-me-on-github.js': './fork-me-on-github/fork-me-on-github.js'
    }
  });

  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('build', ['uglify']);
};
