const { src, dest, watch, parallel, series } = require('gulp');
const browserSync = require('browser-sync').create();
const scss = require('gulp-sass');
const groupMedia = require('gulp-group-css-media-queries');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const del = require('del');

const project_folder = 'dist';
const app_folder = 'app';

const PATH = {
    BASE_DIR_PROJECT_PATH: `${app_folder}/`,
    BASE_DIR_BUILD_PATH: `${project_folder}/`,
    APP_FILE_SOURCE: {
        html: `${app_folder}/*.html`,
        css: `${app_folder}/scss/style.scss`,
        js: `${app_folder}/script/main.js`,
    },
    APP_PATH: {
        html: `${app_folder}/`,
        css: `${app_folder}/css/`,
        js: `${app_folder}/script/`,
    },
    BUILD_FILE_SOURCE: {
        html: `${app_folder}/**/*.html`,
        css: `${app_folder}/css/style.min.css`,
        js: `${app_folder}/script/main.min.js`,
        img: `${app_folder}/images/**/*.{jpg, png, svg, gif, ico, webp}`,
    },
    BUILD_PATH: {
        html: `${project_folder}/`,
        css: `${project_folder}/css/`,
        js: `${project_folder}/script/`,
        img: `${project_folder}/images/`,
    },
    WATCH_PATH: {
        html: `${app_folder}/*.html`,
        css: `${app_folder}/scss/**/*.scss`,
        js: `${app_folder}/script/**/*.js`,
        img: `${app_folder}/images/**/*.{jpg, png, svg, gif, ico, webp}`,
    },
}

const {
    BASE_DIR_PROJECT_PATH,
    BASE_DIR_BUILD_PATH,
    APP_FILE_SOURCE,
    APP_PATH,
    BUILD_FILE_SOURCE,
    BUILD_PATH,
    WATCH_PATH,
} = PATH;

function hotLoader() {
    browserSync.init({
        server: {
            baseDir: BASE_DIR_PROJECT_PATH,
        },
        notify: false,
    });
}

function cleanDist() {
    return del(BASE_DIR_BUILD_PATH);
}

function images() {
    return src(BUILD_FILE_SOURCE.img)
        .pipe(imagemin(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { cleanupIDs: false },
                    ]
                })
            ])
        ))
        .pipe(dest(BUILD_PATH.img))
}

function scripts() {
    return src([
        APP_FILE_SOURCE.js,
    ])
        .pipe(concat('main.min.js'))
        .pipe(babel({
            presets: ["@babel/preset-env"],
        },
        ))
        .pipe(uglify())
        .pipe(dest(APP_PATH.js))
        .pipe(browserSync.stream())
}

function styles() {
    return src(APP_FILE_SOURCE.css)
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(groupMedia())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: [
                "last 2 version"
            ],
        }))
        .pipe(dest(APP_PATH.css))
        .pipe(browserSync.stream())
}

function build() {
    return src([
        BUILD_FILE_SOURCE.css,
        BUILD_FILE_SOURCE.js,
        BUILD_FILE_SOURCE.html,
    ],
        { base: BASE_DIR_PROJECT_PATH })
        .pipe(dest(BASE_DIR_BUILD_PATH));
}

function watching() {
    watch([WATCH_PATH.html]).on('change', browserSync.reload);
    watch([WATCH_PATH.css], styles);
    watch([WATCH_PATH.js, `!${BUILD_FILE_SOURCE.js}`], scripts);  //не отслеживать файл, который собирается для билда скриптом.
}

exports.styles = styles;
exports.watching = watching;
exports.hotLoader = hotLoader;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, build, images);
exports.default = parallel(scripts, styles, hotLoader, watching);
