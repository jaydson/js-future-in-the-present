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
					'dist/classes/compiled.js': ['src/classes/main.js']
				}
			},
		}
    });

	/* Load tasks */
    grunt.loadNpmTasks('grunt-traceur');
    grunt.loadNpmTasks('grunt-contrib-copy');

    /* Tasks */
    grunt.registerTask('default', ['copy:main','traceur']);
}