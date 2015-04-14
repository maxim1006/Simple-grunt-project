// Обязательная обёртка
module.exports = function(grunt) {

    // Конфигурация
    grunt.initConfig({
        // Настройка плагина less
        less: {
            development: {
                options: {
                    //указать, минифицировать ли файл
                    compress: false
                },
                files: {
                    //тут соответственно указать путь где создавать
                    //конвертируемый файл
                    "styles/main.css": "styles/main.less"
                }
            }
        },
        // Настройка плагина watch
        watch: {
            styles: {
                files: ['styles/**/*.less'],
                tasks: ['less', 'autoprefixer'],
                options: {
                    spawn: false
                }
            }
        },
        // Настройка плагина autoprefixer
        autoprefixer: {
            options: {
                browsers: ['last 3 versions', 'ie 9']
            },
            no_dest: {
                src: 'styles/*.css'
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Задача по умолчанию
    grunt.registerTask('default', ['watch', 'autoprefixer']);
};