  // ================= base functions =================
  const INFINITY = 1 / 0
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
    predicate || (predicate = isFlattenable)    
    result || (result = [])

    if (arr == null) {
      return result
    }

    for (const value of arr) {
      if (depth > 0 && predicate(value)) {
        if(depth > 1) {
          baseFlatten(value, depth - 1,predicate,result)
        } else {
          result.push(...value)
        }
      } else {
        result[result.length] = value
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

  const flattenDeep = arr => {
    const length = arr == null ? 0 : arr.length
    return length ? baseFlatten(arr, INFINITY) : []
  }
  
  const flatten = arr => {
    const length = arr == null ? 0 : arr.length
    return length ? baseFlatten(arr, 1) : []
  }
  // ================= object functions ==================
  const objValue = key => obj => obj[key]
  const objChangeValue = fn => key => obj =>  {
    return {
      ...obj,
      [`${key}`] : fn(obj[key])
    }
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
  exports.isArray = isArray
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
  exports.flatten = flatten
  exports.flattenDeep = flattenDeep
  exports.objValue = objValue
  exports.objChangeValue = objChangeValue