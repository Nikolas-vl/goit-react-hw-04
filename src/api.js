import axios from 'axios';

const KEY = 'VABl1_LpCUxzV0k9rwevcSxxwRGrgznH-6V3sQop27w';

export const fetchData = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos/`, {
    params: {
      client_id: KEY,
      per_page: 15,
      query,
      page,
      orientation: 'landscape',
    },
  });
  return response.data;
};
