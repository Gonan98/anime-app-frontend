import axios from 'axios';

export const getProfile = async (token) => {
    try {
        const res = await axios.get('/api/profile', {headers:{'access-token':token}});
        return res.data;
    } catch (error) {
        return error;
    }
}
