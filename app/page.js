"use client"
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import BookTable from "@/components/bookTable";
import Loader from "@/components/loader";
import { getBooksCall, getFilteredBooksCall } from "@/server/calls";

/**
 * @component MainPage
 * @description
 * The MainPage component serves as the root page for the book management application.
 * It handles the fetching, filtering, and displaying of books based on user input.
 * The component includes a navigation bar for searching and filtering books by genre and author.
 * It utilizes the Loader component to show a loading spinner while data is being fetched.
 *
 * @returns {JSX.Element} The rendered MainPage component which includes a Navbar and a BookTable or a no books found message.
 *
 * @example
 * <MainPage />
 *
 * @hooks
 * - useEffect: For fetching book data from the server on initial render and when search or filter criteria change.
 * 
 * @state
 * - data: Holds the fetched book data.
 * - loading: Boolean to manage loading state during data fetching.
 * - search: Stores the current search input for filtering books.
 * - selectedGenre: An array of selected genres for filtering books.
 * - authorFilter: An array of selected authors for filtering books.
 * - authorName: The current input for the author's name filter.
 */

function MainPage() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearchInput] = useState("");
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [authorFilter, setAuthorFilter] = useState([]);
  const [authorName, setAuthorName] = useState("");
  // Client-side request using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBooksCall();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (search.length < 3) {
      fetchData();
    }
  }, [search]);

  useEffect(() => {
    console.log("Author filter:", search);
    const fetchFilteredData = async () => {
      try{
        setLoading(true);
        const searchParams = {
          searchElement: search,
          genre: [],
          authors: []
        }
        const response = await getFilteredBooksCall(searchParams);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    if (search.length >= 3) {
      fetchFilteredData();
    }
  }, [search]);

  useEffect(() => {
    const filterData = () => {
      if (!data) return;

      let filteredData = data;

      if (selectedGenre.length > 0) {
        filteredData = filteredData.filter(book => selectedGenre.includes(book.genre));
      }

      if (authorFilter.length > 0) {
        filteredData = filteredData.filter(book => authorFilter.includes(book.author));
      }

      setData(filteredData);
    };

    filterData();
  }, [selectedGenre, authorFilter]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBooksCall();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (selectedGenre.length === 0 && authorFilter.length === 0) {
      fetchData();
    }
  }, [selectedGenre, authorFilter]);

  return (
    <div className=" ">
      <Navbar 
      setBooks={setData} 
      setSearchInput={setSearchInput} 
      setAuthorFilter={setAuthorFilter}
      setAuthorName={setAuthorName}
      setSelectedGenre={setSelectedGenre}
      selectedGenre={selectedGenre}
      searchInput={search}
      authorFilter={authorFilter}
      authorName={authorName}/>
      {
        loading ? (
          <div className="flex items-center justify-center h-96">
            <Loader />
          </div>
        ) : (
          data ? 
          <BookTable books={data} setBooks={setData} /> 
          : 
          <div className="flex flex-col items-center justify-center">
            <Image src={'/no-books.png'} height={400} width={400} alt="No books found image" />
            <h1 className=" text-5xl text-accent " >No books found</h1>
          </div>
        )
      }
    </div>
  );
}

export default MainPage;