import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api'
});

export const getAllProperties = () => api.get('/properties');
export const updatePropertyById = (id, payload) => api.put(`/movie/${id}`);
export const deletePropertyById = id => api.delete(`/property/${id}`);
export const getPropertyById = id => api.get(`/property/${id}`);
export const insertProperty = payload => api.post('/property', payload);
const apis = {
  insertProperty,
  getAllProperties,
  updatePropertyById,
  deletePropertyById,
  getPropertyById
};

export default apis;
