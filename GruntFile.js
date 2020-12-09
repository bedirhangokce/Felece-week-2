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
        options: {
          paths: ['assets/styles']
        },
        files: {
          "assets/styles/style.css": "assets/styles/main.less"
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js', '**/*.css', '**/*less', 'index.html'],
        tasks: ['less'],
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
      build: {
        files: {
          'index.html': ['index.html']
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, src: ['resources'], dest: 'dest/' },
        ],
      },
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'chrome']
      },
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
