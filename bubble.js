function bSort(arr) {
  let count = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      let tmp = arr[i + 1]
      arr[i + 1] = arr[i]
      arr[i] = tmp
      count++
    }
  }

  if (count) {
    return bSort(arr)
  }

  return arr
}

module.exports = bSort
