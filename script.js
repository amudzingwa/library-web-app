const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Event listener to add a new book
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Create a new book
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const status = document.querySelector('#read').value;

    const book = new Book(title, author, pages, status);

    // Add the new book to the library
    addBookToLibrary(book);
});

function addBookToLibrary(book) {
    library.push(book);
    displayBooks();

    // Reset the form
    document.getElementById('book-form').reset();
}

function displayBooks() {
    const bookList = document.querySelector('#book-list');

    // Clear the book list
    bookList.innerHTML = '';

    // Loop through the library and create a card for each book
    library.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3><strong>Title:</strong>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.read}</p>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        bookList.appendChild(card);
    });

    // Add delete functionality to buttons
    document.querySelectorAll('.delete-btn').forEach((button) => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            library.splice(index, 1);
            displayBooks();
        });
    });
}

// Initial display
displayBooks();
