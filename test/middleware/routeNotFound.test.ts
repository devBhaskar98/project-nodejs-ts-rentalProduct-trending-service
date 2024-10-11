// src/middleware/__tests__/routeNotFound.test.ts

import { Request, Response, NextFunction } from 'express';
import { routeNotFound } from '@trendingService/middleware'; // Adjust the path if needed
import logging from '../../src/config/logging'; // Adjust the path to your logging module

jest.mock('../../src/config/logging'); // Mock the logging module

describe('routeNotFound middleware', () => {
    let req: Request;
    let res: Response;
    let next: NextFunction;

    beforeEach(() => {
        req = {} as Request; // Mock the Request object
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        } as unknown as Response; // Mock the Response object
        next = jest.fn(); // Mock the NextFunction
    });

    it('should return a 404 status and an error message', () => {
        routeNotFound(req, res, next);

        expect(res.status).toHaveBeenCalledWith(404); // Expect status to be set to 404
        expect(res.json).toHaveBeenCalledWith({
            error: {
                message: 'Not found'
            }
        }); // Expect JSON response with the error message
        expect(logging.warning).toHaveBeenCalledWith(expect.any(Error)); // Check if logging.warning was called
    });
});
