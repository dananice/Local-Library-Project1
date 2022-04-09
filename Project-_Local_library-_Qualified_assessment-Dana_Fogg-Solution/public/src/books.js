function findAuthorById(authors, id) {
 // returns the author object that has the matching id 
 return authors.filter(authors => authors.id === id);

}

function findBookById(books, id) {
//returns the book object with matching id 
 return books.filter(books => books.id === id);
}

function partitionBooksByBorrowedStatus(books) {
// returns array w/ 2 arrays inside of it all the inputted 
// books are present in either the 1st or 2nd array
//1st array contains book currently checked out
//2nd array contains books that have been returned

}

function getBorrowersForBook(book, accounts) {
//return an array of ten or fewer account objects that 
 //represents the accounts given by the ID in the provided
 //books borrows array each account should incl the returned 
 // entry from the corresponding transactions object in the 
 //borrows array  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
