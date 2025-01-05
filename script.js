const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

document.querySelector('.add-book-btn .btn').addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('#input-title').value.trim();
    const author = document.querySelector('#input-author').value.trim();
    const pages = document.querySelector('#input-pages').value.trim();
    const read = document.querySelector('#read').value;

    if (!title || !author || !pages || !read) {
        alert('Please fill out all fields.');
        return;
    }

    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    resetForm();
});

function addBookToLibrary(book) {
    library.push(book);
    displayBooks();
}

function resetForm() {
    document.querySelector('#input-title').value = '';
    document.querySelector('#input-author').value = '';
    document.querySelector('#input-pages').value = '';
    document.querySelector('#read').value = '';
}

function displayBooks() {
    const bookList = document.querySelector('.all-books-list');
    bookList.innerHTML = '';

    library.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>
                <button class="btn-read-status btn-shared-style">${book.read}</button>
            </td>
            <td>
                <button class="btn-delete-book btn-shared-style" data-index="${index}">Delete</button>
            </td>
        `;
        bookList.appendChild(row);
    });

    document.querySelectorAll('.btn-delete-book').forEach((button) => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            library.splice(index, 1);
            displayBooks();
        });
    });
}

displayBooks();
