function deepFreeze (object) {
  if (Array.isArray(object)) {
    return Object.freeze(
      object.map((item) => deepFreeze(item))
    )
  } else if (typeof object === 'object' && object !== null) {
    Object.freeze(
      Object.keys(object).reduce(
        (obj, key) => {
          return Object.assign({}, {
            [key]: deepFreeze(object[key])
          })
        },
        {}
      )
    )
  }

  return object
}

module.exports = deepFreeze
