

const myLibrary = [];

function Book(title, author, pages, reading_status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.reading_status = reading_status
    this.info = function(){
        return(title + ", " + author + ", " + pages + ", " + reading_status)
    };
}

//Pushes the book's information into the myLibrary Array
function addBookToLibrary(input) {
    myLibrary.push(input.info())
}

function displayBooks(){
    for(i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
const theLastWish = new Book("The Last Wish", "Andrzej Sapkowski", "288 pages", "finished reading");
const theCallofCthulu = new Book("The Call of Cthulu and Other Weird Stories", "H.P Lovecraft", "420 pages", "not read yet");
addBookToLibrary(theHobbit);
addBookToLibrary(theLastWish);
addBookToLibrary(theCallofCthulu);
displayBooks();

