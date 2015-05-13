module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var fs=require("fs");

    var config = {
        src: 'src',
        dist: 'dist'
    };

    grunt.initConfig({
        config: config,
        rev: {
            dist: {
                files: {
                    src: ['<%= config.dist %>/**/*.{css,js,jpg,png,gif}']
                }
            }
        },
        uglify:{
            build:{
                expand:true,
                cwd:'<%= config.dist %>',
                src:'**/*.js',
                dest:'<%= config.dist %>'
            }
        },
        cssmin:{
            build:{
                expand:true,
                cwd:'<%= config.dist %>',
                src:'**/*.css',
                dest:'<%= config.dist %>'
            }
        },
        clean:{
            build:{
                src:'<%= config.dist %>'
            }
        },
        copy:{
            build:{
                expand: true,
                cwd: '<%= config.src %>',
                src: '**',
                dest: '<%= config.dist %>'
            }
        },
        usemin: {
            options:{
                findPath:""
            },
            html: ['<%= config.dist %>/**/*.{jsp,html}'],
            css: ['<%= config.dist %>/**/*.css']
        },
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '**/*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'copy',
        'uglify',
        'cssmin',
        'rev',
        'usemin',
        //'htmlmin'
    ]);
    grunt.registerTask('default',[
        'build'
    ]);


}