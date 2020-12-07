module.exports = function(grunt)
{

    grunt.initConfig({
        concat: {
            js: {
                src:['scripts/main.js'],
                dest:'build/scripts.js'
            },
            css: {
                src:['styles/style.css'],
                dest:'build/styles.css'
            }
        }, 
        less: {
            development: {
                options: {
                    paths: ['styles']
                  },
                  files: {
                    "styles/style.css" : "styles/main.less"  
                  }
            }
        },
        watch: {
            scripts: {
              files: ['**/*.js','**/*.css','**/*less','index.html'],
              tasks: ['less'],
              options: {
                spawn: false,
              },
            },
        },
        browserSync: {
          dev: {
              bsFiles: {
                  src : [
                      'styles/style.css',
                      'styles/main.less',
                      'index.html'
                  ]
              },
              options: {
                  watchTask: true,
                  server: './',
              }
          }
      },
      clean: {
        folder: ['build','dest']
    },
    processhtml: {
      build: {
          files: {
              'index.html' : ['index.html']
          }
      }
  },
  copy: {
    main: {
      files: [
        {expand: true, src: ['resources'], dest: 'dest/'},
      ],
    },
},
autoprefixer: {
    options: {
        browsers: ['last 2 versions', 'chrome']
    },
  }
    });

   
    //NPMTASK
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']);
}
