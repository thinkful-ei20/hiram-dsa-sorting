let count = 0

function qSort(arr, start = 0, end = arr.length) {
  start = start
  end = end
  if (end <= start) {
    return arr
  }

  const middle = partition(arr, start, end)
  arr = qSort(arr, start, middle)
  arr = qSort(arr, middle + 1, end)
  return arr
}

function partition(arr, start, end) {
  count++
  const pivot = arr[end - 1]
  let j = start
  for (let i = start; i < end - 1; i++) {
    if (arr[i] <= pivot) {
      let tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
      j++
    }
  }

  let tmp = arr[end - 1]
  arr[end - 1] = arr[j]
  arr[j] = tmp

  return j
}

function countSort(data) {
  const sortedData = qSort(data)
  console.log(`partition called ${count} times`)
  return sortedData
}

module.exports = countSort
