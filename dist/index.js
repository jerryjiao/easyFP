(function (global, factory) {
  typeof exports == 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.E = {})))
})(this, (function (exports) { 'use strict';
  // ================= base functions =================
  /**
   * Always Return False
   * 
   * @since 0.0.1
   * @returns
   */
  const F = function () {return false}

  /**
   *Always Return True
   * @since 0.0.1
   * @returns
   */
  const T = function() {return true}

  /**
   *
   * @since 0.0.1
   * @param {*} fns
   */
  const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc),x)

  /**
   *
   *
   * @param {*} arr
   * @param {*} depth
   * @param {*} predicate
   * @param {*} result
   * @returns
   */
  const baseFlatten = (arr, depth,predicate,result) => {
    let index = -1,
        length = arr.length
    
    predicate || (predicate = isFlattenable)    
    result || (result = [])

    while(++index < length) {
      let value = array[index]
      if (depth > 0 && predicate(value)) {
        if(depth > 1) {
          baseFlattern(value, depth - 1,predicate,result)
        } else {
          result.push(value)
        }
      }
    }
    return result;
  }

  const isFlattenable = (value) => {return isArray(value)}

  
  /**
   * trace pipe to console
   * @since 0.0.1
   * @param {*} msg
   */
  const trace = msg => x => (console.log(msg,x), x)
  
  
  
  // ================= array functions =================

  /**
   *
   *
   * @param {*} value
   * @returns
   */
  const isArray = (value) => { return Array.isArray(value) }

  /**
   *
   * @since 0.0.1
   * @param {*} fn
   */
  const map = fn => arr => arr.map(fn)

  /**
   *
   * @since 0.0.1
   * @param {*} fn
   */
  const filter = fn => arr => arr.filter(fn)

  /**
   *
   * @since 0.0.1
   * @param {*} fn
   */
  const foreach = fn => arr => arr.forEach(fn)

  /**
   *
   * @since 0.0.1
   * @param {*} fn
   */
  const concat = arr => arr1 => arr.concat(arr1)

  /**
   *
   * @since 0.0.1
   * @param {*} value
   */
  const arrPush = arr => value => arr.push(value)

  const flatten = arr => {
    
  }

  // ================= Logical functions =================
  /**
   *
   * @since 0.0.1
   * @param {*} x
   * @param {*} y
   */
  const either = x => y => x||y
  
  /**
   *
   *
   * @since 0.0.1
   * @param {*} x
   * @param {*} y
   */
  const both = x => y => x&&y

  // ================= Math functions =================
  /**
   *
   * @since 0.0.1    
   * @param {*} x
   * @param {*} y
   */
  const add = x=> y => x+y


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
  exports.add = add
  exports.arrPush = arrPush
  exports.isArray = isArray
}))