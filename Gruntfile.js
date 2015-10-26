//'use strict';

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    sass: {
      style: {
        files: {
          "build/css/style.css": ["source/sass/style.scss"]
        }
      }
    },

    cmq: {
      style: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"})
        ]
      },
      style: {
        src: "build/css/style.css"
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0,
        report: "gzip"
      },
      style: {
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    csscomb: {
      style: {
        expand: true,
        src: ["sass/**/*.scss"]
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            "index.html",
            "form.html"
          ],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    },

    concat: {
      options: {
        separator: ";"
      },
      dist: {
        src: ["source/js/script.js"],
        dest: "build/js/script.js"
      }
    },

    uglify: {
      my_target: {
        files: {
          "build/js/script.min.js": ["build/js/script.js"]
        }
      }
    }

  });

  grunt.registerTask("build", [
    "clean",
    "copy",
    "concat",
    "uglify",
    "sass",
    "cmq",
    "postcss",
    "cssmin",
    "imagemin"
  ]);

};








//watch: {
//  style: {
//    files: ["sass/**/*.scss"],
//      tasks: ["sass", "cmq", "postcss"]
//  }
//}


//module.exports = function(grunt) {
//  require('load-grunt-tasks')(grunt);
//
//  var config = {
//    pkg: grunt.file.readJSON('package.json'),
//
//    sass: {
//      style: {
//        files: {
//          'css/style.css': 'sass/style.scss'
//        }
//      }
//    },
//
//    postcss: {
//      options: {
//        processors: [
//          require('autoprefixer')({browsers: 'last 2 versions'})
//        ]
//      },
//      style: {
//        src: 'css/*.css'
//      }
//    },
//
//    watch: {
//      style: {
//        files: ['sass/**/*.scss'],
//        tasks: ['sass', 'postcss'],
//        options: {
//          spawn: false,
//          livereload: true
//        }
//      }
//    }
//  };
//
//  config = require('./.gosha')(grunt, config);
//
//  grunt.initConfig(config);
//};
