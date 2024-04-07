module.exports = function(grunt) {
  
    // import JSON metadata from package.json
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // transform and bundle JS files
        browserify: {
            dist: {
                options: {
                    transform: [
                        ['babelify', {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }]
                    ],
                    plugin: [
                        ['css-modulesify', {
                            output: 'dist/bundle.css'
                        }]
                    ]
                },
                files: {
                    'dist/bundle.js': ['src/index.js']
                }
            }
        },
        
        
       
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/bundle.min.js': ['dist/bundle.js']
                }
            }
        },
        
    });

    // load the necessary plugins
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Defined a default task
    grunt.registerTask('default', ['browserify', 'uglify']);
};
