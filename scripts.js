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
  clearAll();
  myLibrary.forEach((book, item) => {
    const newB = document.createElement("div");
    newB.classList.add("book");
    const Bname = document.createElement("p");
    Bname.innerText = book.title;
    Bname.classList.add("name");
    const Bauthor = document.createElement("p");
    Bauthor.innerText = book.author;
    Bauthor.classList.add("author");
    const Bpages = document.createElement("p");
    Bpages.innerText = book.pages;
    Bpages.classList.add("pages");
    const Bread = document.createElement("p");
    Bread.innerText = book.read ? "Read it already" : "Haven't read it";
    Bread.classList.add("read");
    const Btndiv = document.createElement("div");
    Btndiv.classList.add("btns");
    const btn1 = document.createElement("button");
    btn1.innerText = "Read";
    btn1.classList.add("readd");
    btn1.classList.add("btn");
    btn1.setAttribute("id", item);
    btn1.addEventListener("click", () => {
      myLibrary[item].read = true;
      display();
    });
    const btn2 = document.createElement("button");
    btn2.innerText = "Unread";
    btn2.classList.add("btn");
    btn2.classList.add("unread");
    btn2.setAttribute("id", item);
    btn2.addEventListener("click", () => {
      myLibrary[item].read = false;
      display();
    });
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.classList.add("add");
    removeBtn.classList.add("remove");
    btn2.setAttribute("id", item);
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(item, 1);
      display();
    });

    const books = document.querySelector(".cards");
    Btndiv.appendChild(btn1);
    Btndiv.appendChild(btn2);
    newB.appendChild(Bname);
    newB.appendChild(Bauthor);
    newB.appendChild(Bpages);
    newB.appendChild(Bread);
    newB.appendChild(Btndiv);
    newB.appendChild(removeBtn);
    books.appendChild(newB);
  });
}

function clearAll() {
  const bookss = document.querySelector(".cards");
  bookss.innerHTML = "";
}

const dialog = document.querySelector("dialog");
const adding = document.querySelector(".add");
adding.addEventListener("click", () => {
  dialog.showModal();
});

const form = document.querySelector(".addBook");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var name = document.querySelector("#name").value;
  var author = document.querySelector("#author").value;
  var pages = document.querySelector("#pages").value;
  var read = document.querySelector("#read").value;
  addBookToLibrary(name, author, pages, read);
  dialog.close();
  form.reset();
  display();
});

addBookToLibrary("Harry Potter", "JK Rowling", 300, true);
addBookToLibrary("LOTR", "Tolkien", 500, false);
addBookToLibrary("ASOIAF", "GRR Martin", 400, true);
display();

/*
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
*/
