const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function display() {
  for (item in myLibrary) {
    console.log(
      `Book: ${myLibrary[item].title} \n Author: ${
        myLibrary[item].author
      } \n Pages: ${myLibrary[item].pages} \n ${
        myLibrary[item].read ? "Read it already" : "haven't read it"
      }`
    );
  }
}
