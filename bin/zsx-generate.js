#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk')
const zsx = require('../src/generate');


/**
 * Usage.
 */

program
.command('generate') // 定义一个命令  generate
.description('quick generate your file')
.alias('g') // 是缩写
.action(function(type, name){
    zsx.run(type, name);
});
program.parse(process.argv);