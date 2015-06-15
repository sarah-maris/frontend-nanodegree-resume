module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 600,
            quality: 30
          }, {
		  width: 400,
            suffix: '_2x',
            quality: 30
          }, {
            width: 200,
            suffix: '_1x',
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['**.{gif,jpg,png}'],
          cwd: 'images_src',
          dest: 'images'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images']
      }
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        }
      }
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,    expand: true,
          cwd: 'images_src/map-icon/',
          src: '*.{gif,jpg,png,.svg}',
          dest: 'images/map-icon'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};