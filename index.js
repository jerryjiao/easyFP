(function (global, factory) {
  typeof exports == 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.E = {})))
})(this, (function (exports) { 'use strict';
  /**
   * Always Return False
   * 
   * @returns
   */
  const F = function () {return false}

  /**
   *Always Return True
   *
   * @returns
   */
  const T = function() {return true}

  /**
   *
   *
   * @param {*} fns
   */
  const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc),x)

  /**
   * trace pipe to console
   *
   * @param {*} msg
   */
  const trace = msg => x => (console.log(msg,x), x)

  /**
   *
   *
   * @param {*} fn
   */
  const map = fn => arr => arr.map(fn)

  /**
   *
   *
   * @param {*} fn
   */
  const filter = fn => arr => arr.filter(fn)

  /**
   *
   *
   * @param {*} fn
   */
  const foreach = fn => arr => arr.forEach(fn)

  /**
   *
   *
   * @param {*} fn
   */
  const concat = fn => arr => arr.concat(fn)

  /**
   *
   *
   * @param {*} x
   */
  const either = x => y => x||y
  
  /**
   *
   *
   * @param {*} x
   */
  const both = x => y => x&&y

  exports.F = F
  exports.T = T
  exports.pipe = pipe
  exports.trace = trace
  exports.map = map
  exports.filter = filter
  exports.foreach = foreach
  exports.concat = concat
  exports.either = either
  exports.both = both
}))