import { notFound } from 'next/navigation';
import { axiosApi } from './config/axios';

export const serverApiFetch = async (endpoint: string) => {
  const API_URL = process.env.NEXT_PUBLIC_API_PORT;

  if (!API_URL) {
    throw new Error('API URL is invalid');
  }

  try {
    const response = await axiosApi.get(endpoint);

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      notFound();
    }
    throw error;
  }
};
