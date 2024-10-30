import axios from 'axios';
import { User } from '../type/type.ts';

const API_URL = import.meta.env.API_URL;

export const loginUser = async (email: string, password: string): Promise<string> => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data);
        } else {
            throw new Error('An error occurred');
        }
    }
};

export const registerUser = async (user: User): Promise<string> => {
    try {
        const response = await axios.post(`${API_URL}/register`, user);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data);
        } else {
            throw new Error('An error occurred');
        }
    }
};