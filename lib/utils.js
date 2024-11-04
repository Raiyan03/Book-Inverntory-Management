
/**
 * @function downLoadFile
 * @description
 * A utility function that allows users to download a list of books in either JSON or CSV format. 
 * It creates a Blob from the book data and triggers a download in the user's browser.
 *
 * @param {string} type - The format type for the download, either "json" or "csv".
 * @param {Array} books - An array of book objects, where each object contains properties such as entry ID, title, author, genre, publication date, and stock.
 *
 * @returns {void} This function does not return a value. It triggers a file download in the browser.
 *
 * @example
 * const books = [
 *     { entry_id: 1, title: "Book Title", author: "Author Name", genre: "Fiction", publication_date: "2024-01-01", stock: 10 },
 *     { entry_id: 2, title: "Another Book", author: "Another Author", genre: "Non-Fiction", publication_date: "2024-02-01", stock: 5 }
 * ];
 * 
 * downLoadFile("json", books); // Downloads books.json
 * downLoadFile("csv", books);  // Downloads books.csv
 */

export const downLoadFile = (type, books) => {
    if (type === "json") {
        const jsonData = JSON.stringify(books, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "books.json";
        link.click();
    } else if (type === "csv") {
        let csvData = "Entry ID,Title,Author,Genre,Publication Date,Stock\n";
        books.forEach((book) => {
            csvData += `${book.entry_id},${book.title},${book.author},${book.genre},${new Date(book.publication_date).toLocaleDateString()},${book.stock}\n`;
        });
        const blob = new Blob([csvData], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "books.csv";
        link.click();
    }
} 