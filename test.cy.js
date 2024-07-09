const axios = require('axios');

describe('API Tests', () => {
  test('should validate API response', async () => {
    const response = await axios.get('https://api.conqt.com/home');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('someValue');
  });
});
