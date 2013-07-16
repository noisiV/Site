module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    coffee:
      compile:
        files:
          'build/js/app.js': [
            'src/cs/preinit.coffee'
            'src/cs/views/*.coffee'
            'src/cs/router.coffee'
            'src/cs/init.coffee'
          ]
    jst:
      compile:
        options:
          namespace: 'app.tmpl'
        files:
          "build/js/templates.js": ["src/tmpl/**/*.html"]

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-jst'
  grunt.loadNpmTasks 'grunt-contrib-stylus'

  grunt.registerTask 'default', ['coffee', 'jst']


