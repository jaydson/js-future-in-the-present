module.exports = function (grunt) {
	grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /* Copy dependencies */
        copy: {
            main: {
                files: [{
					src: ['src/lib/traceur-runtime.js'], dest: 'dist/bin/traceur-runtime.js', filter: 'isFile'
                }]
            }
        },

		concat: {
			options: {
				separator: ';',
			},
			classes : {
				src: ['src/lib/traceur-runtime.js','tmp/pre-compiled-classes.js'],
				dest: 'dist/classes/compiled.js'
			},
			arrows : {
				src: ['src/lib/traceur-runtime.js','tmp/pre-compiled-arrows.js'],
				dest: 'dist/arrows/compiled.js'
			},
			templatestrings : {
				src: ['src/lib/traceur-runtime.js','tmp/pre-compiled-template-strings.js'],
				dest: 'dist/template-strings/compiled.js'
			},
			parameters : {
				src: ['src/lib/traceur-runtime.js','tmp/pre-compiled-parameters.js'],
				dest: 'dist/parameters/compiled.js'
			},
			blockScope : {
				src: ['src/lib/traceur-runtime.js','tmp/pre-compiled-block-scope.js'],
				dest: 'dist/block-scope/compiled.js'
			},
			promises : {
				src: ['src/lib/traceur-runtime.js','tmp/pre-compiled-promises.js'],
				dest: 'dist/promises/compiled.js'
			}
		},

        uglify: {
            options: {
				mangle: false
            },

            main : {
                files: {
                	'dist/classes/compiled-min.js': ['dist/classes/compiled.js'],
                	'dist/arrows/compiled-min.js': ['dist/arrows/compiled.js'],
                	'dist/template-strings/compiled-min.js': ['dist/template-strings/compiled.js'],
                	'dist/parameters/compiled-min.js': ['dist/parameters/compiled.js'],
                	'dist/block-scope/compiled-min.js': ['dist/block-scope/compiled.js'],
                	'dist/promises/compiled-min.js': ['dist/promises/compiled.js']
                }
            }
        },

        traceur: {
			options: {
				/* Turn on some of the experimental features */
				blockBinding : true,
				symbols : true,
				deferredFunctions : true,
				types : true,
				annotations : true
			},
			main : {
				files:{
					'tmp/pre-compiled-classes.js': ['src/classes/main.js'],
					'tmp/pre-compiled-arrows.js': ['src/arrows/main.js'],
					'tmp/pre-compiled-template-strings.js': ['src/template-strings/main.js'],
					'tmp/pre-compiled-parameters.js': ['src/parameters/main.js'],
					'tmp/pre-compiled-block-scope.js': ['src/block-scope/main.js'],
					'tmp/pre-compiled-promises.js': ['src/promises/main.js']
				}
			},
		}
    });

	/* Load tasks */
    grunt.loadNpmTasks('grunt-traceur');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    /* Tasks */
    grunt.registerTask('default', ['traceur','concat']);
}