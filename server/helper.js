import { InsertNewBool, UpdateBookDetails, DeleteBook, GetAuthors, GetGenres, SearchBooks } from "@/data/dbQueries";
import { NextResponse } from "next/server";

export const addNewBook = async (req) => {
    try {
        const { title, author, genre, publish_date, isbn, stock } = await req.json();
        
        const res = await InsertNewBool(title, author, genre, publish_date, isbn, stock);
        return NextResponse.json({ success: 'New book added successfully' });
    } catch (error) {
        console.error("Error adding new book:", error);
        return NextResponse.json({ error: 'Something wen wrong', details: error.message }, { status: 500 });
    }
}

export const editBook = async (req) => {
    try {
        const { entry_id, title, author, genre, publish_date, isbn, stock } = await req.json();
        
        const res = await UpdateBookDetails(entry_id, title, author, genre, publish_date, isbn, stock);
        return NextResponse.json({ success: 'Book details updated successfully' });
    } catch (error) {
        console.error("Error updating book details:", error);
        return NextResponse.json({ error: 'Something wen wrong', details: error.message }, { status: 500 });
    }
}

export const deleteBook = async (req) => { 
    try {
        const { entry_id } = await req.json();

        const res = await DeleteBook(entry_id);
        return NextResponse.json({ success: 'Book deleted successfully' });
    } catch (error) {
        console.error("Error deleting book:", error);
        return NextResponse.json({ error: 'Something wen wrong', details: error.message }, { status: 500 });
    }
}

export const getFilteredBooks = async (req) => {
    try {
        const { searchElement, genre, author } = await req.json();
        console.log("Search Element:", searchElement);
        const res  = await SearchBooks(genre, author, searchElement);
        console.log("Books found successfully:", res?.rows || []);
        return NextResponse.json({ success: 'Books found successfully', data: res.rows || [] });
    } catch (error) {
        console.error("Error searching books:", error);
        return NextResponse.json({ error: 'Something wen wrong', details: error.message }, { status: 500 });
    }
}