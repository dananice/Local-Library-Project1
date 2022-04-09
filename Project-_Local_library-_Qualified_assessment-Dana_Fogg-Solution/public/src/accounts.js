function findAccountById(accounts, id) {
  return accounts.filter(accounts => accounts.id === id);
}

function sortAccountsByLastName(accounts) {
//sort alphabetically by last name
    accounts.sort((accountA, accountB) => accountA.name.last.toLower/case() >
    accountB.name.last.toLowerCase() ? 1 : -1);
    return accounts;
}

function getTotalNumberOfBorrows(account, books) {
 //return a number that represents the # of times the 
  //acc id appears in borrows 
  // I will need to loop the books array  as well as loop through 
  // the borrows array to match to the ID

  
  let totalBorrowed = 0;
  for( let i = 0; i < books.length; i++){
      for( let J = 0; j < books[i].borrows.length; j++) {
          if (account.id === books[i].borrows[j].id){
              totalBorrowed += 1;
          }
      }
  }
  return totalBorrowed;
  }


}

function getBooksPossessedByAccount(account, books, authors) {
//returns array of book objects incl author info that represents 
  //all books currently checked out by the given account 
  

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
