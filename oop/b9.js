"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    constructor(books) {
        this.books = books;
    }
    set addBooks(book) {
        this.books.push(book);
    }
    showLibrary() {
        let arr = [...this.books];
        console.log(arr);
    }
}
let book1 = new Book('conan', 'sdf');
let book2 = new Book('doraemn', 'sdsd');
let book3 = new Book('sdfgfdg', 'sdfg');
let library = new Library([]);
library.addBooks = book1;
library.showLibrary();
library.addBooks = book2;
library.showLibrary();
library.addBooks = book3;
library.showLibrary();
