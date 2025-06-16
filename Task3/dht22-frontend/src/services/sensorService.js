export const getSensorData = async () => {
    const response = await axios.get('/api/sensors');
    return response.data;
};