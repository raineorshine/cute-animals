#!/usr/bin/env node
const animal = require('./index')
const args = process.argv.slice(2).join(' ')
const usage = `
Usage:

  $ cute-animals adj adj animal
  elated sincere sloth

`

const output = animal(args)
console.log(output)
