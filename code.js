
let reading_stat;
const myLibrary = [];


const user_title = document.querySelector("#book-title");
const user_author = document.getElementById("book-author")
const user_pages = document.getElementById("pages")
const user_reading_status = document.getElementById('reading-status')
const formID = document.getElementById("form-container")
const submit_btn = document.getElementById("submit-button")

//Takes in the book's title, author, pages and reading status, then returns them all in a function as a string
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

//Creates a new div and inserts onto the document, then runs a loop to add all the book's information to the text
function displayBooks(){
    const bookInfo = document.createElement("div");
    bookInfo.setAttribute("id", "book-info");
    const removeBtn = document.createElement("button")
    removeBtn.setAttribute("id", "remove-button")
    removeBtn.innerText = "Remove"
    document.body.insertBefore(bookInfo, formID)
    document.body.insertBefore(removeBtn, formID)
    for(i = 0; i < myLibrary.length; i++) {
        bookInfo.innerText = myLibrary[i]
    }

}

//
submit_btn.addEventListener('click', () => {
    const newBook = new Book(user_title.value, user_author.value, user_pages.value, user_reading_status.value);
    addBookToLibrary(newBook)
    displayBooks();
})

removeBtn.addEventListener('click', () => {
    
})

//Remove button is next on the list
