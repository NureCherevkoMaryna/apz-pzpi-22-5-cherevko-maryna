export const login = async (username, password) => {
  const response = await axios.post('/api/login', { username, password });
  return response.data;
};