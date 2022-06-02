let form = document.querySelector('#book-form')
let booklist = document.querySelector('#book-list')
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    constructor() {

    }
    static addToBookList(book) {
        if (book.title === '' || book.author === '' || book.isbn === null) {
            if (book.title == '') {
                alert("Please insert title");
            } else if (book.author == '') {
                alert("Please insert author");
            } else {
                alert("Please insert isbn");
            }
            preventDefault();
        } else {
            let bookList = document.querySelector('#book-list');
            let row = document.createElement('tr');
            row.innerHTML = `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href = '#' class="delete">X</a></td>`
            console.log(row)

            bookList.appendChild(row)
        }


        // console.log(book)

    }
    static clearFields() {
        document.querySelector('#author').value = '';
        document.querySelector('#title').value = '';
        document.querySelector('#isbn').value = '';
    }
    static RemoveElement(target){
        if(target.hasAttribute('href')){
            target.parentElement.parentElement.remove();
        }
    }

}

form.addEventListener('submit', newBook);
booklist.addEventListener('click',removeRow);

function removeRow(e){
    UI.RemoveElement(e.target);
    e.preventDefault();
}
function newBook(e) {
    author = document.querySelector('#author').value;
    title = document.querySelector('#title').value;
    isbn = document.querySelector('#isbn').value;

    let book = new Book(title, author, isbn);
    // console.log(book);

    UI.addToBookList(book);
    UI.clearFields();
   
}

