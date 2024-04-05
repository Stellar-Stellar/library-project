
let reading_stat;
const myLibrary = [];

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

submit_btn.addEventListener('click', () => {
    createCard();
})

function createCard() {
    const newCard = document.createElement("div");
    newCard.setAttribute("id", "book-card")

    const newImage = document.createElement("img");
    newImage.setAttribute("id", "book-image")

    const newTitle = document.createElement("div");
    newTitle = setAttribute("id", "book-title")
    const cardContent = document.createTextNode(myLibrary[0])
    newCard.appendChild(cardContent)
    const formID = document.getElementById("form-container")
    document.body.insertBefore(newCard, formID)
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
const theLastWish = new Book("The Last Wish", "Andrzej Sapkowski", "288 pages", "finished reading");
const theCallofCthulu = new Book("The Call of Cthulu and Other Weird Stories", "H.P Lovecraft", "420 pages", "not read yet");
addBookToLibrary(theHobbit);
addBookToLibrary(theLastWish);
addBookToLibrary(theCallofCthulu);
displayBooks();

