function findAuthorById(authors, id) {
 // returns the author object that has the matching id 
 return authors.find(authors => authors.id === id);
}

function findBookById(books, id) {
 //returns the book object with matching id

 return books.find(books => books.id === id);


}

function partitionBooksByBorrowedStatus(books) {
// returns array w/ 2 arrays inside of it all the inputted 
// books are present in either the 1st or 2nd array
//1st array contains book currently checked out
//2nd array contains books that have been returned

let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 let secondArray = [[...booksBorrowed], [...booksReturned]];
 return secondArray;
}

function getBorrowersForBook(book, accounts) {
 //return an array of ten or fewer account objects that 
 //represents the accounts given by the ID in the provided
 //books borrows array each account should incl the returned 
 // entry from the corresponding transactions object in the 
 //borrows array  

 function getBorrowersForBook(book, accounts) {
    return book.borrows.map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      return { ...borrow, ...account };
     })
     .slice(0, 10);

}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
