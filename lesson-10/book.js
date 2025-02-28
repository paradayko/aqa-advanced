class Book {
    constructor(bookName, bookAuthor, publishDate){
        this.bookName = bookName
        this.bookAuthor = bookAuthor
        this.publishDate = publishDate
    }
       
    get bookName() {
        return this._bookName;
    }
    
    get bookAuthor() {
        return this._bookAuthor;
    }

    get publishDate() {
        return this._publishDate;
    }

    set bookName(name) {
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error('Book name must be a non-empty string.');
        }
        this._bookName = name;
    }

    set bookAuthor(author) {
        if (typeof author !== 'string' || author.trim() === '') {
            throw new Error('Author name must be a non-empty string.');
        }
        this._bookAuthor = author;
    }

    set publishDate(year) {
        if (!Number.isInteger(year) || year < 0) {
            throw new Error('Publish date must be a valid positive integer.');
        }
        this._publishDate = year;
    }
    
    static getOldestBook(books) {
        return books.reduce((oldest, currentBook) => {
            return currentBook.publishDate < oldest.publishDate ? currentBook : oldest;
        });
    }
   
    printInfo() {
        console.log(`${this.bookName} was written by ${this.bookAuthor}. The date of publication of the book is ${this.publishDate}.`);
    }


}
export default Book

const book = new Book('Animal Farm', 'George Orwell', 1965);
const book1 = new Book('A tale of two cities', 'Charles Dickens', 1875);
const book2 = new Book ('Alice in Wonderland', 'Lewis Carrol', 1976);

book.printInfo();
book1.printInfo();
book2.printInfo();