const bSort = require('./bubble')

function sortingBooks(books) {
  bSort(books)
}

function main() {
  const books = [
    'Harry Potter and the Half-Blood Prince',
    'James and the Giant Peach',
    'To Kill a Mockingbird',
    'Frankenstein',
    'Harry Potter and the Goblet of Fire'
  ]

  sortingBooks(books)
  console.log(books)
}

if (require.main === module) main()
