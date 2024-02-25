

const myLibrary = [];

function Book(title, author, pages, reading_status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.reading_status = reading_status
    this.info = function(){
        return(this.title + ", " + this.author + ", " + this.pages + ", " + this.reading_status)
    };
}

function addBookToLibrary() {
    myLibrary.push(theHobbit)
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet")
console.log(theHobbit.info())