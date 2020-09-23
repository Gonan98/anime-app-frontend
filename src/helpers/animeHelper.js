import axios from 'axios';

export const getWatchedAnimes = async (token) => {
    try {
        const res = await axios.get('/api/animes/status/watched', {headers:{'access-token':token}});
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getToWatchAnimes = async (token) => {
    try {
        const res = await axios.get('/api/animes/status/towatch', {headers:{'access-token':token}});
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getAllAnimes = async (token) => {
    try {
        const res = await axios.get('/api/animes', {headers:{'access-token':token}});
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getAnimeById = async (token, id) => {
    try {
        const res = await axios.get(`/api/animes/${id}`, {headers:{'access-token':token}});
        return res.data;
    } catch (error) {
        return error;
    }
}

export const deleteAnime = async (token, id) => {
    try {
        const res = await axios.delete(`/api/animes/${id}`, {headers:{'access-token':token}});
        return res.data;
    } catch (error) {
        return error;
    }
}

export const saveAnime = async (token, anime) => {
    try {
        const res = await axios.post('/api/animes', { ...anime }, {headers:{'access-token':token}});
        return res.data;
    } catch (error) {
        return error;
    }
}

