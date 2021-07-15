import axios from 'axios';

export enum URL {
  BASE_URL = 'http://localhost:5000/employees',
}

export const apiData = async (url: string, data: any, method: string) => {
  if (method === 'POST') {
    const postData = await axios.post(url, data);
    return postData.data;
  } else if (method === 'PATCH') {
    const patchData = await axios.patch(url, data);
    return patchData.data;
  } else if (method === 'DELETE') {
    const deletedData = await axios.delete(url);
    return deletedData.data;
  } else if (method === 'GET') {
    const getData = await axios.get(url);
    return getData.data;
  }
};
