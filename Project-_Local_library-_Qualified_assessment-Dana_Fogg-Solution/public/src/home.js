function getTotalBooksCount(books) {
 // return number of books in array  
 return books.length;
 
 
}

function getTotalAccountsCount(accounts) {
 // return number of account objects inside the array
 return accounts.length;
 
}

function getBooksBorrowedCount(books) {
  // returns number of books that are currently checked out 
  // of the library
  
  let booksCheckedOut = books.filter(
    (book) =>
     book.borrows.filter((record) => record.returned === false).length > 0
   );
   return booksCheckedOut.length;

function getMostCommonGenres(books) {
  // returns an array with 5 objects or less that represents
  // the most common occurring genres ordered from most common 
  // to least
  
    let map = {};
    books.forEach((num) => {
     if (map[num.genre]) {
      map[num.genre]++;
     } else {
      map[num.genre] = 1;
     }
    });
    return Object.entries(map)
     .map(([name, count]) => {
      return {
       name,
       count
      };
     })
     .sort((a, b) => b.count - a.count)
     .slice(0, 5);
  
}

function getMostPopularBooks(books) {
// returns array containing 5 objects or less that represents
// the most popular books in the library

return books.map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);

}

function getMostPopularAuthors(books, authors) {
 //returns array containing 5 objects or fewer that represents 
 //the most popular authors whose books have been  checked
 //out the most   

 let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
