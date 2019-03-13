/*
 * grunt-sphinx-plugin
 * https://github.com/jade/grunt-sphinx-plugin
 *
 * Copyright (c) 2018 Kay McCormick
 * Licensed under the MIT license.
 */

'use strict';

const sphinxBuildClient = require('sphinx-build-client');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('sphinx_plugin', 'Sphinx documentation builder plugin.', function() {
	// Merge task-specific and/or target-specific options with these defaults.
	var done = this.async();
	var options = this.options({
	});

	const args = sphinxBuildClient.buildOptions(options.sourceRoot, options.destDir, options);
	const promise = sphinxBuildClient.sphinxBuild(options.sourceRoot, options.destDir, options);
	promise.then(result => done()).catch(err => { grunt.fatal(err); });
	/*
	// Iterate over all specified file groups.
	this.files.forEach(function(f) {
	// Concat specified files.
	var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
        } else {
        return true;
        }
	}).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
	}).join(grunt.util.normalizelf(options.separator));

	// Handle options.
	// Write the destination file.
	grunt.file.write(f.dest, src);

	// Print a success message.
	grunt.log.writeln('File "' + f.dest + '" created.');
	});
	*/

    });

};

