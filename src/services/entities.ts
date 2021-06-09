// Custom imports
import axios from '@services/axios';

// Get the data of a given type of entity
export const getEntityInstances = (id: string) =>
  axios.get(`/entities/${id}?bucket=tfg`).then(({ status, data }) => {
    if (status === 200) {
      return data;
    }

    return null;
  });

// Get the data of an instance of the given entity type
export const getEntityInstance = (id: string, slug: string) =>
  axios.get(`/entities/${id}/${slug}?bucket=tfg`).then(({ status, data }) => {
    if (status === 200) {
      return data;
    }

    return null;
  });
