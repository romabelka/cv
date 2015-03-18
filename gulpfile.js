var gulp = require('gulp'),
    gutil = require('gulp-util');

// HTML
gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})
gulp.task('public',function(){
    return gulp.src('public/**/*', {base:"."})
        .pipe(gulp.dest('build'));
});

// Scripts
gulp.task('scripts', function() {
    var browserify = require('gulp-browserify'),
        reactify = require('reactify'),
        literalify = require('literalify'),
        rename = require('gulp-rename');

    return gulp.src('src/scripts/index.js')
        .pipe(browserify({
            debug: true,
            extensions: ['.jsx', '.js', '.json'],
            transform: [reactify, literalify.configure({
                react: 'window.React'
            })]
        }))
        .on('error', function(err) {
            gutil.log(err.message)
        })
        .pipe(rename('client.js'))
        .pipe(gulp.dest('build'))
});

// Styles
gulp.task('styles', function() {
    var stylus = require('gulp-less'),
        normalize = require('normalize'),
        rename = require('gulp-rename');

    return gulp.src('src/styles/index.less')
        .pipe(stylus({
            use: ['nib', normalize.path + '/normalize']
        }))
        .pipe(rename('client.css'))
        .pipe(gulp.dest('build'))
})

// Vendor scripts
gulp.task('vendor', function() {
    var concat = require('gulp-concat');

    gulp.src([
        'bower_components/react/react-with-addons.min.js',
        'bower_components/bacon/dist/Bacon.min.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('build'));
    gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.css'
    ]).pipe(concat('vendor.css'))
        .pipe(gulp.dest('build'));
});

// Watch
gulp.task('watch', function() {
    gulp.watch('src/index.html', ['html']);
    gulp.watch('src/scripts/**', ['scripts']);
    gulp.watch('src/styles/**', ['styles']);
    gulp.watch('bower_components/**', ['vendor'])
});

gulp.task('default', ['html', 'scripts', 'styles', 'vendor', 'public'])