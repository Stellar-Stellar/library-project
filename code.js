
let reading_stat;
const myLibrary = [];

var user_title = document.getElementById("book-title").value;
const user_author = document.querySelector('#book-author')
const user_pages = document.querySelector('#pages')
const user_reading_status = document.querySelector('#reading-status')
const submit_btn = document.querySelector("#submit-button")

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

//Displays the entire array of books
function displayBooks(){
    for(i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
        return(myLibrary[i])
    }
}

//Calls the createCard function each time the submit button is clicked
submit_btn.addEventListener('click', () => {
    createCard();
})

//Creates a "card" for each book which contains the book's title, author, page count, reading status and an image if the user selects one
function createCard() {
    const newCard = document.createElement("div");
    newCard.setAttribute("id", "book-card");

    const newImage = document.createElement("img");
    newImage.setAttribute("id", "book-image");

    const newTitle = document.createElement("div");
    const newTitleContent = user_title.value;
    newTitle.setAttribute("id", "book-title");

    const newAuthor = document.createElement("div");
    newAuthor.setAttribute("id", "book-author");

    const newPages = document.createElement("div");
    newPages.setAttribute("id", "book-pages");

    const newReadingStatus = document.createElement("div");
    newReadingStatus.setAttribute("id", "book-reading-status")

    const cardContent = document.createTextNode(myLibrary[0])
    newCard.appendChild(cardContent)
    
    const formID = document.getElementById("form-container")
    document.body.insertBefore(newCard, formID)
    document.body.insertBefore(newTitle, formID)
    
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
const theLastWish = new Book("The Last Wish", "Andrzej Sapkowski", "288 pages", "finished reading");
const theCallofCthulu = new Book("The Call of Cthulu and Other Weird Stories", "H.P Lovecraft", "420 pages", "not read yet");
addBookToLibrary(theHobbit);
addBookToLibrary(theLastWish);
addBookToLibrary(theCallofCthulu);
displayBooks();

//Having trouble reading data from form

