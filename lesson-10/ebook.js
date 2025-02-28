import Book from './book.js';

class EBook extends Book {
    constructor(bookName, bookAuthor, publishDate, fileFormat) {
        super(bookName, bookAuthor, publishDate);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(format) {
        const validFormats = ['.pdf', '.epub', '.mobi', '.txt'];
        if (!validFormats.includes(format)) {
            throw new Error(`Invalid file format. Allowed formats: ${validFormats.join(', ')}`);
        }
        this._fileFormat = format;
    }
    static createEBookFromBook(bookInstance, fileFormat) {
        if (!(bookInstance instanceof Book)) {
            throw new Error('Provided object is not an instance of the Book class.');
        }
        return new EBook(bookInstance.bookName, bookInstance.bookAuthor, bookInstance.publishDate, fileFormat);
    }

    printInfo() {
        console.log(`${this.bookName} was written by ${this.bookAuthor}. The date of publication of the book is ${this.publishDate}. Format - ${this.fileFormat}`);
    }
}

try {
    const book1 = new Book('Animal Farm', 'George Orwell', 1945);
    const book2 = new Book('A Tale of Two Cities', 'Charles Dickens', 1859);
    const book3 = new EBook('David Copperfield', 'Charles Dickens', 1999, '.txt');
    const book4 = new EBook('Alice in Wonderland', 'Lewis Carroll', 1865, '.epub');

    const booksArray = [book1, book2, book3, book4];

    const oldestBook = Book.getOldestBook(booksArray);
    console.log('The oldest book is:');
    oldestBook.printInfo()

} catch (error) {
    console.error(error.message);
}

export default EBook;

