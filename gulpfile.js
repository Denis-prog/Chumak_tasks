import pkg from 'gulp';
const { src, dest, watch, parallel, series } = pkg;
import browserSyncPackage, { stream } from 'browser-sync';
const browserSync = browserSyncPackage.create();
import scss from 'gulp-sass';
import groupMedia from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import uglifyPackage from 'gulp-uglify-es';
const uglify = uglifyPackage.default;
import babel from 'gulp-babel';
import imagemin from 'gulp-imagemin';
import del from 'del';

const project_folder = 'dist';
const src_folder = 'src';

const PATH = {
    BASE_DIR_BUILD: `${project_folder}/`,
    SRC_PATH: {
        html: `${src_folder}/*.html`,
        css: `${src_folder}/scss/style.scss`,
        js: `${src_folder}/script/main.js`,
        img: `${src_folder}/images/**/*.{jpg,png,svg,gif,ico,webp}`,
    },
    BUILD_PATH: {
        html: `${project_folder}/`,
        css: `${project_folder}/css/`,
        js: `${project_folder}/script/`,
        img: `${project_folder}/images/`,
    },
    WATCH_PATH: {
        html: `${src_folder}/*.html`,
        css: `${src_folder}/scss/**/*.scss`,
        js: `${src_folder}/script/**/*.js`,
        img: `${src_folder}/images/**/*.{jpg, png, svg, gif, ico, webp}`,
    },
}

const {
    BASE_DIR_BUILD,
    SRC_PATH,
    BUILD_PATH,
    WATCH_PATH,
} = PATH;

export const hotLoader = () => {
    browserSync.init({
        server: {
            baseDir: BASE_DIR_BUILD,
        },
        notify: false,
    });
}

export const html = () => {
    return src(SRC_PATH.html)
        .pipe(dest(BUILD_PATH.html))
        .pipe(stream());
}

export const styles = () => {
    return src(SRC_PATH.css)
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(groupMedia())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: [
                "last 2 version"
            ],
        }))
        .pipe(dest(BUILD_PATH.css))
        .pipe(stream());
}

export const scripts = () => {
    return src([
        SRC_PATH.js,
    ])
        .pipe(concat('main.min.js'))
        .pipe(babel({
            presets: ["@babel/preset-env"],
        },
        ))
        .pipe(uglify())
        .pipe(dest(BUILD_PATH.js))
        .pipe(stream())
}

export const images = () => {
    return src(SRC_PATH.img)
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
        .pipe(stream());
}

export const watching = () => {
    watch(WATCH_PATH.html, html);
    watch(WATCH_PATH.css, styles);
    watch(WATCH_PATH.js, scripts);
    watch(WATCH_PATH.img, images)
}

export const cleanDist = () => del(BASE_DIR_BUILD);

const dev = series(parallel(html, scripts, styles, images), parallel(hotLoader, watching));

export default dev;
export const build = series(cleanDist, parallel(html, styles, scripts, images));