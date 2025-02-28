import EBook from './ebook.js';
import Book from './book.js';

const book1 = new Book('1984', 'George Orwell', 1949);

try {
    const ebook1 = EBook.createEBookFromBook(book1, '.epub');
    ebook1.printInfo();
} catch (error) {
    console.error(error.message);
}
