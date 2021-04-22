import Book from "./Book.js";

const childrenBook = new Book(
    /*title,
      author,
      status,
      yearOfPurchase,
      language,*/
    
    "Lost and Found",
    "James Brown",
   "new",
    2010,
    "English"
   
);
console.log(childrenBook.yearOfPurchase);
console.log(childrenBook.calcYearOfPurchase(2020));
