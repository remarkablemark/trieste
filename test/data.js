const { END_KEY: KEY, END_VALUE: VALUE } = require('../lib/constants');

const data = [
  /**
   *  a
   *  |
   *  .
   */
  ['a', { a: { [KEY]: VALUE } }],
  [['a'], { a: { [KEY]: VALUE } }],
  [['a', undefined], { a: { [KEY]: VALUE } }],
  [['a', null], { a: { [KEY]: VALUE } }],
  [['a', 1], { a: { [KEY]: VALUE } }],

  /**
   *    a
   *   / \
   *  .   b
   *      |
   *      .
   */
  [
    ['a', 'ab'],
    {
      a: {
        [KEY]: VALUE,
        b: { [KEY]: VALUE }
      }
    }
  ],

  /**
   *     a
   *   / | \
   *  .  b  d
   *     |  |
   *     .  .
   */
  [
    ['a', 'ab', 'ad'],
    {
      a: {
        [KEY]: VALUE,
        b: { [KEY]: VALUE },
        d: { [KEY]: VALUE }
      }
    }
  ],

  /**
   *    a
   *    |
   *    n
   *   / \
   *  .   n
   *     / \
   *    .   a
   *        |
   *        .
   */
  [
    ['an', 'ann', 'anna'],
    {
      a: {
        n: {
          [KEY]: VALUE,
          n: {
            [KEY]: VALUE,
            a: { [KEY]: VALUE }
          }
        }
      }
    }
  ],

  /**
   *  a  b  c
   *  |  |  |
   *  .  .  .
   */
  [
    ['a', 'b', 'c'],
    {
      a: { [KEY]: VALUE },
      b: { [KEY]: VALUE },
      c: { [KEY]: VALUE }
    }
  ]
];

const invalid = [undefined, null, 0, 1, {}, [], () => {}, new Date()];

module.exports = {
  data,
  invalid
};
