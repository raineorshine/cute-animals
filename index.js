const adjectives = require('./adjectives.json')
const animals = require('./animals.json')

/** Get a random element from an array. */
const sample = arr => arr[Math.floor(Math.random() * arr.length)]

const random = options =>
  (options || 'animal')
    .split(' ')
    .map(type => sample(
      type === 'adj' ? adjectives
      : type === 'animal' ? animals
      : []
    ))
    .join(' ')

module.exports = random
