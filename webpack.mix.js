const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
    .less('public/css/footer.less', 'public/css')
    .less('public/css/header.less', 'public/css')
    .less('public/css/response.less', 'public/css')
    .less('public/css/content.less', 'public/css')
    .less('public/css/admin.less', 'public/css')
    .less('public/css/blog.less', 'public/css')
    .less('public/css/index.less', 'public/css');
