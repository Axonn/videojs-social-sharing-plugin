'use strict';
module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      options: {
        nospawn: true,
      }
    },
	jasmine: {
      base: {
		  src: "build/js/vjssocialsharing.js",
		  options: {
			specs: "build/test/vjssocialsharingtests.js",
			vendor: "components/jquery/jquery.min.js",
		  }
	  }
    },
	typescript: {
      src: {
        src: ['src/ts/*.ts'],
        dest: 'build/js/vjssocialsharing.js',
        options: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          base_path: 'src/ts',
          sourcemap: true,
          fullSourceMapPath: true,
          declaration: true,
        }
      },
	  test: {
        src: ['test/*.ts'],
        dest: 'build/test/vjssocialsharingtests.js',
        options: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          base_path: 'test',
          sourcemap: true,
          fullSourceMapPath: true,
          declaration: true,
        }
      }
    }
  });
  grunt.registerTask('test', ['typescript:test','jasmine']);   
  grunt.registerTask('build', ['test', 'typescript:src']);
};
