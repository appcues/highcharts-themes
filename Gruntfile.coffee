module.exports = (grunt) ->

    grunt.initConfig

        # Import package manifest
        pkg: grunt.file.readJSON("package.json")

        # Banner definitions
        meta:
            banner: "/*\n" +
                " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
                " *  <%= pkg.description %>\n" +
                " *  <%= pkg.homepage %>\n" +
                " *\n" +
                " *  Made by <%= pkg.author.name %>\n" +
                " */\n"

        # Concat definitions
        concat:
            dist:
                src: ["src/highcharts-themes.js"]
                dest: "dist/highcharts-themes.js"
            options:
                banner: "<%= meta.banner %>"

        # Lint definitions
        jshint:
            files: ["src/highcharts-themes.js"]
            options:
                jshintrc: ".jshintrc"

        # Minify definitions
        uglify:
            my_target:
                src: ["dist/highcharts-themes.js"]
                dest: "dist/highcharts-themes.min.js"
            options:
                banner: "<%= meta.banner %>"

        # CoffeeScript compilation
        coffee:
            compile:
                expand: true
                flatten: true
                cwd: 'src'
                src: '*.coffee'
                dest: 'dist'
                ext: '.js'

        copy:
            main:
                expand: true
                flatten: true
                src: 'dist/*'
                dest: 'demo/js/'

        watch:
            scripts:
                files: "src/*.coffee"
                tasks: ['coffee', 'uglify', 'copy']

    grunt.loadNpmTasks("grunt-contrib-concat")
    grunt.loadNpmTasks("grunt-contrib-jshint")
    grunt.loadNpmTasks("grunt-contrib-uglify")
    grunt.loadNpmTasks("grunt-contrib-coffee")
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("grunt-release")

    grunt.registerTask("default", ["jshint", "uglify"])
    grunt.registerTask("build", ['coffee', "jshint", "uglify", 'copy'])
    grunt.registerTask("travis", ["jshint"])
