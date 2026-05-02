import axios from 'axios';

export const sendContact = async (fromData) =>{
    try {
        const response = await axios.post("http://localhost:5000/api/contact", fromData);
        return response.data;
        } catch (error) {
            console.error("Contact API Error:", error);
    throw error;
}
}