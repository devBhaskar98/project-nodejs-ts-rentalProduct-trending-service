// src/routes/__tests__/trending.test.ts

import request from 'supertest'; // For testing HTTP requests
import { application, Shutdown } from '../../src/server'; // Assuming you export your Express app instance from app.ts or similar
import trendingRepository from '../../src/repositories/trending.repository';

jest.mock('../../src/repositories/trending.repository'); // Mock the repository

describe('POST /trending', () => {
    const mockCreate = trendingRepository.create as jest.Mock;

    afterAll((done) => {
        Shutdown(done);
    });

    beforeEach(() => {
        jest.clearAllMocks(); // Reset all mocks before each test
    });

    it('should return 201 and the created trending data on success', async () => {
        // Arrange
        const mockData = { id: 1, title: 'Trending News' };
        mockCreate.mockResolvedValue(mockData); // Mock the create method to return the mock data

        // Act
        const response = await request(application).post('/api/news').send({ title: 'Trending News' }).expect(201); // Expect HTTP status 201

        // Assert
        expect(response.body).toEqual(mockData);
        expect(mockCreate).toHaveBeenCalledWith({ title: 'Trending News' });
    });

    it('should return 500 if there is an error during creation', async () => {
        // Arrange
        mockCreate.mockRejectedValue(new Error('Database error')); // Mock an error in the repository

        // Act
        const response = await request(application).post('/api/news').send({ title: 'Trending News' }).expect(500); // Expect HTTP status 500

        // Assert
        expect(response.body).toEqual({ error: 'Error creating news' });
        expect(mockCreate).toHaveBeenCalledWith({ title: 'Trending News' });
    });
});
