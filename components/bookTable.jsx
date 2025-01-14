import React, { useState, useEffect, useRef } from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Export from "./export";
import { downLoadFile } from "@/lib/utils";
import EditModal from "./editModal";
import DeleteConfirmation from "./deleteConfirmation";
import { deleteBookCall, editBookCall } from "@/server/calls";

/**
 * BookTable Component
 * 
 * @description
 * This component displays a table of books with functionality to search, edit, delete, and export book entries.
 * Users can filter the displayed books using a search input, and interact with each book entry to edit or delete it.
 * The component also provides an export option for downloading the book list in various formats.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {Array<Object>} props.books - Array of book objects to display in the table.
 * @param {function} props.setBooks - Function to update the list of books in the parent component.
 * 
 * @component
 * 
 * @example
 * <BookTable 
 *    books={bookList} 
 *    setBooks={updateBookList} 
 * />
 * 
 * @requires
 * - react (for useState, useEffect, useRef hooks)
 * - react-icons/fi (for edit icon)
 * - react-icons/md (for delete icon)
 * - Export component (for export dropdown)
 * - EditModal component (for editing books)
 * - DeleteConfirmation component (for confirming deletion)
 * - downLoadFile from "@/lib/utils" (for handling file downloads)
 * - deleteBookCall, editBookCall from "@/server/calls" (for server interactions)
 * 
 * @returns {JSX.Element} The rendered BookTable component.
 */

const BookTable = ({ books, setBooks }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const exportDropdownRef = useRef(null);
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleExport = (type) => {
        downLoadFile(type, books);
        setIsExportDropdownOpen(false); // Close dropdown after export
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (exportDropdownRef.current && !exportDropdownRef.current.contains(event.target)) {
                setIsExportDropdownOpen(false);
            }
        };

        if (isExportDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isExportDropdownOpen]);

    const filteredBooks = books?.filter((book) =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );

    const openEditModal = (book) => {
        setSelectedBook((prevBook) => book);
        setIsEditModalOpen(true);
    };

    const onSave = (updatedBook) => {
        const response = editBookCall(updatedBook).then((res) => {
            setIsEditModalOpen(false);
        }).catch((err) => {
            
        });
        setBooks((prevBooks) => prevBooks.map((book) => (book.entry_id === updatedBook.entry_id ? updatedBook : book)));
    }

    const openDeletePopup = (book) => {
        setSelectedBook(book);
        setIsDeletePopupOpen(true);
    };

    const handleDelete = () => {
        console.log("Deleting book:", selectedBook); // Replace this with actual delete logic
        const response = deleteBookCall(selectedBook?.entry_id)
        .then((res) => {

        })
        .catch((err) => {
            
        });
        setBooks((prevBooks) => prevBooks.filter((book) => book.entry_id !== selectedBook.entry_id));
        setIsDeletePopupOpen(false);
    };

    return (
        <div className="p-4 bg-background">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-bold mb-2 md:mb-0">Inventory Management</h1>
                <div className="flex gap-2 relative">
                    <input
                        type="text"
                        placeholder="Filter by search"
                        className="p-2 border border-accentborders bg-background rounded-lg w-full md:w-auto"
                        onChange={handleSearch}
                    />
                    <div className="relative" ref={exportDropdownRef}>
                        <button
                            className="bg-green-500 flex gap-2 items-center justify-center text-white px-4 py-2 rounded-lg"
                            onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
                        >
                            Export
                        </button>
                        {isExportDropdownOpen && (
                            <Export handleExport={handleExport} />
                        )}
                    </div>
                </div>
            </div>

            {/* Wrapping the table with a div to enable horizontal scrolling on small screens */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-background border shadow-lg rounded-xl">
                    <thead className="p-2">
                        <tr className="bg-accentborders text-left">
                            <th className="py-2 px-4 border-b">Entry ID</th>
                            <th className="py-2 px-4 border-b">ISBN</th>
                            <th className="py-2 px-4 border-b">Title</th>
                            <th className="py-2 px-4 border-b">Author</th>
                            <th className="py-2 px-4 border-b">Genre</th>
                            <th className="py-2 px-4 border-b">Publication Date</th>
                            <th className="py-2 px-4 border-b">Stock</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBooks?.length > 0 ? (
                            filteredBooks.map((book) => (
                                <tr key={book.entry_id} className="hover:bg-accent hover:text-white p-3 rounded-xl">
                                    <td className="py-2 px-4 border-b">{book.entry_id}</td>
                                    <td className="py-2 px-4 border-b">{book.isbn}</td>                                    
                                    <td className="py-2 px-4 border-b">{book.title}</td>
                                    <td className="py-2 px-4 border-b">{book.author}</td>
                                    <td className="py-2 px-4 border-b">{book.genre}</td>
                                    <td className="py-2 px-4 border-b">{new Date(book.publication_date).toLocaleDateString()}</td>
                                    <td className="py-2 px-4 border-b text-center">{book.stock}</td>
                                    <td className="py-2 px-4 border-b text-center">
                                        <div className="flex items-center justify-center gap-4">
                                            <button onClick={() => openEditModal(book)}>
                                                <FiEdit2 />
                                            </button>
                                            <button onClick={() => openDeletePopup(book)}>
                                                <MdOutlineDeleteOutline className="hover:text-red-400" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center py-4 text-gray-500">
                                    No books found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            { selectedBook && <EditModal
                book={selectedBook}
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={onSave} // Replace with actual update logic
            />}

            {/* Delete Confirmation */}
            <DeleteConfirmation
                isOpen={isDeletePopupOpen}
                onClose={() => setIsDeletePopupOpen(false)}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default BookTable;