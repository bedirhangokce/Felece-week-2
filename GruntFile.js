module.exports = function (grunt) {
  grunt.initConfig({
    

    concat: {
      js: {
        src: ['assets/scripts/main.js'],
        dest: 'build/scripts/main.js'
      },
      css: {
        src: ['assets/styles/style.css'],
        dest: 'build/css/style.css'
      }
    },
    less: {
      development: {
        options:{
          style:'compressed'
        },
        files: {
          "assets/styles/style.css": "assets/styles/main.less"
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js', '**/*.css', '**/*less', 'index.html'],
        tasks: ['less','autoprefixer'],
        options: {
          spawn: false,
        },
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'assets/scripts/main.js',
            'assets/styles/style.css',
            'assets/styles/main.less',
            'index.html',
            'gruntFile.js'
          ]
        },
        options: {
          watchTask: true,
          server: './',
        }
      }
    },
    clean: {
      folder: ['build']
    },
    processhtml: {
      dev: {
        options: {
          data: {
            message: 'This is dev target'
          }
        },
        files: {
          'test/fixtures/dev/index.processed.html': ['test/fixtures/index.html']
        },
      build: {
        files: {
          'index.html': ['index.html']
        }
      }
    }
  },
    copy: {
      main: {
        files: [
          { expand: true, src: ['asset/'], dest: 'dest/' },
        ],
      },
    },
    autoprefixer:{
      development: {
        browsers: ['last 2 version', 'Opera'],
        expand: true,
        flatten: true,
      },
      dist:{
        files:{
          'assets/styles/style.css':'assets/styles/style.css'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['browserSync', 'watch']);

}
