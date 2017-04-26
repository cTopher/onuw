'use strict'

import gulp from 'gulp'
import nodemon from 'gulp-nodemon'
import gulpSequence from 'gulp-sequence'
import del from 'del'
import cp from 'child_process'
import ts from 'gulp-typescript'
import fs from 'fs-extra'
import Promise from 'bluebird'

const tsProject = ts.createProject('src/server/tsconfig.json')

gulp.task('server', () => {
  nodemon({
    exec: 'ts-node src/server/application/main.ts',
    ext: 'ts',
    watch: ['src/server']
  })
})

gulp.task('clean:dist', () => {
  return del('dist')
})

gulp.task('dist:npm', () => {
  fs.ensureDirSync('dist/node_modules')
  return (new Promise((resolve) => cp.exec('npm ls --prod=true --parseable=true', undefined, (err, stdout) => resolve(stdout))))
    .then((stdout) => stdout.split('\n').filter((line) => line.includes('node_modules')))
    .then((modules) => Promise.each(modules, (module) => {
      console.log(module)
      const moduleName = module.substr(module.indexOf('node_modules') + 13)
      return Promise.promisify(fs.copy)(module, 'dist/node_modules/' + moduleName)
    }))
})

gulp.task('dist:server', () => {
  const tsResult = gulp.src('src/{server,common}/**/*.ts')
    .pipe(tsProject())
  return tsResult.js
    .pipe(gulp.dest('dist/app'))
})

gulp.task('dist:resources', () => {
  return gulp.src([])
    .pipe(gulp.dest('dist'))
})

gulp.task('resources:watch', ['resources'], () => gulp.watch(config.resources, ['resources']))

gulp.task('dist:client', (cb) => {
  cp.exec('npm run dist:client', (err, stdout, stderr) => {
    console.log(stdout)
    console.error(stderr)
    cb(err)
  })
})

gulp.task('dist', gulpSequence('clean:dist', ['dist:server', 'dist:client', 'dist:resources', 'dist:npm']))
