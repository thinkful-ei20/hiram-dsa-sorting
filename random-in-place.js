function randomInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let tmp = arr[i]
    arr[i] = arr[randomIndex]
    arr[randomIndex] = tmp
  }
}

function main() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  randomInPlace(data)
  console.log(data)
}

if (require.main === module) {
  main()
}
