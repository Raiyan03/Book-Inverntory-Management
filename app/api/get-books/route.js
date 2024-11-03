import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

/**
 * Handles POST requests to retrieve all books from the inventory.
 *
 * @async
 * @function POST
 * @param {Request} req - The HTTP request object containing the incoming request.
 * @returns {Promise<Response>} A JSON response containing an array of books from the inventory.
 */
export async function POST(req) {
    const body = await req.json(); // Parse the incoming request body (not used in this function).
    const { rows } = await sql`SELECT * FROM INVENTORY`; // Query the database for all rows in the INVENTORY table.
    return NextResponse.json(rows); // Return the rows as a JSON response.
}