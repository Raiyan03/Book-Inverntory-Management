/**
 * Validates a book's title, author, and genre to contain only letters, spaces, dots, and hyphens.
 * 
 * @param {string} name - The name to validate (title, author, or genre).
 * @returns {boolean} - Returns true if the name is valid; otherwise, false.
 */
const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s.-]+$/;
    return nameRegex.test(name);
};

/**
 * Validates a date string in the "YYYY-MM-DD" format and checks if it represents a real date.
 * 
 * @param {string} date - The date string to validate.
 * @returns {boolean} - Returns true if the date format and value are valid; otherwise, false.
 */
const validateDate = (date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
        return false;
    }
    const parsedDate = new Date(date);
    return parsedDate instanceof Date && !isNaN(parsedDate);
};

/**
 * Validates an ISBN number, supporting both ISBN-10 and ISBN-13 formats.
 * 
 * @param {string} isbn - The ISBN string to validate.
 * @returns {boolean} - Returns true if the ISBN is valid according to ISBN-10 or ISBN-13 standards; otherwise, false.
 */
const validateISBN = (isbn) => {
    const isbn10Regex = /^(?:\d{9}X|\d{10})$/;
    const isbn13Regex = /^(?:\d{13})$/;
    return isbn10Regex.test(isbn) || isbn13Regex.test(isbn);
};

/**
 * Validates stock quantity to ensure it is a non-negative integer.
 * 
 * @param {number|string} stock - The stock quantity to validate.
 * @returns {boolean} - Returns true if the stock is a non-negative integer; otherwise, false.
 */
const validateStock = (stock) => {
    return Number.isInteger(parseInt(stock)) && stock >= 0;
};

/**
 * Validates a book object, checking that each field conforms to the expected format and data type.
 * 
 * @param {Object} book - The book object to validate.
 * @param {string} book.title - The title of the book.
 * @param {string} book.author - The author of the book.
 * @param {string} book.genre - The genre of the book.
 * @param {string} book.publication_date - The publication date in "YYYY-MM-DD" format.
 * @param {string} book.isbn - The ISBN of the book, either ISBN-10 or ISBN-13 format.
 * @param {number|string} book.stock - The stock quantity, a non-negative integer.
 * @returns {Object} - Returns an object with a `success` property if all fields are valid, or an `error` property with a message indicating the first validation failure.
 */
export const validateBook = (book) => {
    const { title, author, genre, publication_date, isbn, stock } = book;
    if (!validateName(title)) {
        return { error: "Invalid title" };
    }
    if (!validateName(author)) {
        return { error: "Invalid author" };
    }
    if (!validateName(genre)) {
        return { error: "Invalid genre" };
    }
    if (!validateDate(publication_date)) {
        return { error: "Invalid publication date" };
    }
    if (!validateISBN(isbn)) {
        return { error: "Invalid ISBN" };
    }
    if (!validateStock(stock)) {
        return { error: "Invalid stock" };
    }
    return { success: "Validated" };
};
