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
			classes : {
				files:{
					'tmp/pre-compiled-classes.js': ['src/classes/main.js'],
					'tmp/pre-compiled-arrows.js': ['src/arrows/main.js']
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