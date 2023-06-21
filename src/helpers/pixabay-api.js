import axios from 'axios';

export const pixabayApi = async (text, page = 1) => {
    const response = await axios.get(
        `https://pixabay.com/api/?q=${text}&page=${page}&key=35922475-10b4d9df5938435aa37377ae0&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
};
