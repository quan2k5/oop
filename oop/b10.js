"use strict";
class BookVersion2 {
    constructor(title, author, quantity = 1) {
        this.quantity = quantity;
        this.title = title;
        this.author = author;
    }
    get titleFunction() {
        return this.title;
    }
    get quantitySection() {
        return this.quantity;
    }
    set quantitySection(quantity) {
        this.quantity = quantity;
    }
}
class LibraryVersion2 {
    constructor(books) {
        this.books = books;
    }
    set addBooks(adBook) {
        let find = this.books.find(e => {
            return e.titleFunction === adBook.titleFunction;
        });
        if (find) {
            find.quantitySection = find.quantitySection + 1;
        }
        else {
            this.books.push(adBook);
        }
    }
    showLibrary() {
        let arr = [...this.books];
        console.log(arr);
    }
}
let book4 = new BookVersion2('doraemon', 'nobita');
let book5 = new BookVersion2('conan', 'narto', 3);
let book6 = new BookVersion2('shubasha', 'ronaldo', 8);
let library1 = new LibraryVersion2([]);
library1.addBooks = book4;
library1.addBooks = book4;
library1.addBooks = book5;
library1.addBooks = book6;
library1.addBooks = book6;
library1.showLibrary();
