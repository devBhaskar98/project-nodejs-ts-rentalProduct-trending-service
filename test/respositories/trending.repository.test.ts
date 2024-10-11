// src/repositories/__tests__/trending.repository.test.ts

import db from '../../src/config/database-setup';
import { trendingRepository } from '@trendingService/repository';

jest.mock('../../src/config/database-setup'); // Mock the database module

describe('Trending Repository', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock calls after each test
    });

    it('should create a news item', async () => {
        const mockNews = { title: 'Test Title', status: 'active' };
        const mockResponse = { rows: [{ id: 1, ...mockNews }] };

        (db.query as jest.Mock).mockResolvedValue(mockResponse); // Mock db.query response

        const result = await trendingRepository.create(mockNews);

        expect(db.query).toHaveBeenCalledWith(expect.any(String), [mockNews.title, mockNews.status]);
        expect(result).toEqual({ id: 1, ...mockNews });
    });

    it('should find a news item by id', async () => {
        const mockResponse = { rows: [{ id: 1, title: 'Test Title', status: 'active' }] };

        (db.query as jest.Mock).mockResolvedValue(mockResponse);

        const result = await trendingRepository.findOne(1);

        expect(db.query).toHaveBeenCalledWith(expect.any(String), [1]);
        expect(result).toEqual(mockResponse.rows[0]);
    });

    it('should return null if news item not found', async () => {
        (db.query as jest.Mock).mockResolvedValue({ rows: [] });

        const result = await trendingRepository.findOne(999); // Non-existing ID

        expect(db.query).toHaveBeenCalledWith(expect.any(String), [999]);
        expect(result).toBeNull();
    });

    it('should find all news items', async () => {
        const mockResponse = { rows: [{ id: 1, title: 'Test Title', status: 'active' }] };

        (db.query as jest.Mock).mockResolvedValue(mockResponse);

        const result = await trendingRepository.findAll();

        expect(db.query).toHaveBeenCalledWith(expect.any(String));
        expect(result).toEqual(mockResponse.rows);
    });

    it('should update a news item', async () => {
        const mockUpdateData = { title: 'Updated Title', status: 'inactive' };
        const mockResponse = { rows: [{ id: 1, ...mockUpdateData }] };

        (db.query as jest.Mock).mockResolvedValue(mockResponse);

        const result = await trendingRepository.updateOne(1, mockUpdateData);

        expect(db.query).toHaveBeenCalledWith(expect.any(String), [1, mockUpdateData.title, mockUpdateData.status]);
        expect(result).toEqual({ id: 1, ...mockUpdateData });
    });

    it('should return null if updating a non-existing news item', async () => {
        (db.query as jest.Mock).mockResolvedValue({ rows: [] });

        const result = await trendingRepository.updateOne(999, { title: 'Some Title', status: 'active' });

        expect(db.query).toHaveBeenCalledWith(expect.any(String), [999, 'Some Title', 'active']);
        expect(result).toBeNull();
    });

    it('should delete a news item', async () => {
        const mockResponse = { rows: [{ id: 1, title: 'Test Title', status: 'active' }] };

        (db.query as jest.Mock).mockResolvedValue(mockResponse);

        const result = await trendingRepository.deleteOne(1);

        expect(db.query).toHaveBeenCalledWith(expect.any(String), [1]);
        expect(result).toEqual(mockResponse.rows[0]);
    });

    it('should return null if deleting a non-existing news item', async () => {
        (db.query as jest.Mock).mockResolvedValue({ rows: [] });

        const result = await trendingRepository.deleteOne(999); // Non-existing ID

        expect(db.query).toHaveBeenCalledWith(expect.any(String), [999]);
        expect(result).toBeNull();
    });
});
