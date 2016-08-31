/**
 * Created by pbli on 8/31/16.
 */
var gulp = require('gulp');
var babel = require('gulp-babel');

var paths = {
    scripts: ['5.es6/**/*.js'],
    dest: ['5.es6_build/']
};

gulp.task('babel', function () {
    gulp.src(paths.scripts[0])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(paths.dest[0]));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['babel']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);
