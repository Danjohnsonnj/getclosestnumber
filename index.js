const getClosestNumber = (n, targetArray) => {
  if (isNaN(n) || !Array.isArray(targetArray)) {
    return null
  }
  if (Array.prototype.includes && targetArray.includes(n)) {
    return n
  }

  targetArray = targetArray.sort((a, b) => {
    return a > b
  })
  const min = targetArray[0]
  const max = targetArray[targetArray.length - 1]

  if (n < min) {
    return min
  }
  if (n > max) {
    return max
  }

  let smallestDiff = Number.POSITIVE_INFINITY
  let closest = null
  for (let i = 0; i < targetArray.length; i++) {
    let diff = Math.abs(targetArray[i] - n)
    if (diff < smallestDiff) {
      smallestDiff = diff
      closest = targetArray[i]
    }
  }
  return closest
}

module.exports default getClosestNumber
