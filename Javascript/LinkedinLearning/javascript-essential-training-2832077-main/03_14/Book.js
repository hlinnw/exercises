// create a mew class called Book
class Book{
    constructor(
      title,
      author,
      status,
      yearOfPurchase,
      language,
    )
    {
        this.title = title;
        this.author = author;
        this.status = status;
        this.yearOfPurchase = yearOfPurchase;
        this.language = language;
    }

 calcYearOfPurchase(thisYear){
     return thisYear - this.yearOfPurchase;
 }
}

export default Book