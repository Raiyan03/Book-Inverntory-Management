import axios from "axios"

export const addNewBookCall = async (book) => {
    console.log(book);
    try {
        const res = await axios.post('/api/add-book/', book);
        return res;
    } catch (error) {
        return error;
    }
}